// components/SheetContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { auth, database } from "../firebase.js";
import { ref, onValue, set, update } from "firebase/database";

const SheetContext = createContext();

export function SheetProvider({ children }) {
  const user = auth.currentUser; // o usuário já deve estar logado
  const [character, setCharacter] = useState({
    name: "",
    class: "",
    level: 1,
    strength: "",
    dexterity: "",
    vitality: "",
    intelligence: "",
    charisma: "",
    history: "",
  });
  const [messages, setMessages] = useState([]);
  const [chat, setChat] = useState("");
  // Lista fixa de perícias (pode ser atualizada via código)
  const [skills, setSkills] = useState([
    { id: 1, name: "Acrobacia", checked: false },
    { id: 2, name: "Arcanismo", checked: false },
    { id: 3, name: "Furtividade", checked: false },
    { id: 4, name: "Intimidação", checked: false },
    { id: 5, name: "Percepção", checked: false },
  ]);

  // Carrega os dados salvos do Firebase
  useEffect(() => {
    if (user) {
      const sheetRef = ref(database, `users/${user.uid}/sheet`);
      onValue(sheetRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setCharacter(data.character || character);
          setSkills(data.skills || skills);
        }
      });

      const chatRef = ref(database, `users/${user.uid}/chat`);
      onValue(chatRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          // Convertendo objeto em array (assumindo que as mensagens são salvas com chaves únicas)
          setMessages(Object.values(data));
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  // Atualiza o Firebase com os dados da ficha
  const updateSheetInFirebase = (updatedCharacter, updatedSkills) => {
    if (user) {
      const sheetRef = ref(database, `users/${user.uid}/sheet`);
      update(sheetRef, { character: updatedCharacter, skills: updatedSkills });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCharacter((prev) => {
      const updated = { ...prev, [name]: value };
      updateSheetInFirebase(updated, skills);
      return updated;
    });
  };

  const handleDiceChange = (attribute, dice) => {
    setCharacter((prev) => {
      const updated = { ...prev, [attribute]: dice };
      updateSheetInFirebase(updated, skills);
      return updated;
    });
  };

  const toggleSkill = (id) => {
    setSkills((prev) => {
      const updated = prev.map((skill) =>
        skill.id === id ? { ...skill, checked: !skill.checked } : skill
      );
      updateSheetInFirebase(character, updated);
      return updated;
    });
  };

  const sendMessage = () => {
    if (chat.trim() !== "") {
      const newMessage = { text: chat, sender: "Você", timestamp: Date.now() };
      setMessages((prev) => {
        const updated = [...prev, newMessage];
        if (user) {
          // Salva a nova mensagem no Firebase usando o timestamp como chave
          const chatRef = ref(
            database,
            `users/${user.uid}/chat/${newMessage.timestamp}`
          );
          set(chatRef, newMessage);
        }
        return updated;
      });
      setChat("");
    }
  };

  return (
    <SheetContext.Provider
      value={{
        character,
        setCharacter,
        messages,
        setMessages,
        chat,
        setChat,
        skills,
        setSkills,
        handleInputChange,
        handleDiceChange,
        toggleSkill,
        sendMessage,
      }}
    >
      {children}
    </SheetContext.Provider>
  );
}

export function useSheet() {
  const context = useContext(SheetContext);
  if (!context) {
    throw new Error("useSheet must be used within a SheetProvider");
  }
  return context;
}

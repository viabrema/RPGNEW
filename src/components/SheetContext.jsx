import { createContext, useContext, useState } from "react";

const SheetContext = createContext();

export function SheetProvider({ children }) {
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
    // Lista fixa de perícias (atualizável via código)
    const [skills, setSkills] = useState([
        { id: 1, name: "Acrobacia", checked: false },
        { id: 2, name: "Arcanismo", checked: false },
        { id: 3, name: "Furtividade", checked: false },
        { id: 4, name: "Intimidação", checked: false },
        { id: 5, name: "Percepção", checked: false },
    ]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCharacter((prev) => ({ ...prev, [name]: value }));
    };

    const handleDiceChange = (attribute, dice) => {
        setCharacter((prev) => ({ ...prev, [attribute]: dice }));
    };

    const toggleSkill = (id) => {
        setSkills((prev) =>
            prev.map((skill) =>
                skill.id === id ? { ...skill, checked: !skill.checked } : skill
            )
        );
    };

    const sendMessage = () => {
        if (chat.trim() !== "") {
            setMessages((prev) => [...prev, { text: chat, sender: "Você" }]);
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

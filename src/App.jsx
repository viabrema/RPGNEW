// App.js
import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import CharacterSheet from "./components/CharacterSheet";
import LoginScreen from "./components/LoginScreen";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  if (!user) {
    return <LoginScreen />;
  }

  return <CharacterSheet />;
}

export default App;

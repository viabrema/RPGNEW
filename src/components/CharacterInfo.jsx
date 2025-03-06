// components/CharacterInfo.jsx
import React from "react";
import { useSheet } from "./SheetContext";

export default function CharacterInfo() {
  const { character, handleInputChange } = useSheet();

  return (
    <div className="flex items-center gap-4 mb-4">
      <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center text-2xl">
        📷
      </div>
      <div className="flex flex-col gap-2 w-full">
        <input
          type="text"
          name="name"
          value={character.name}
          onChange={handleInputChange}
          placeholder="Nome do Personagem"
          className="w-full bg-gray-700 p-2 rounded text-xl font-bold"
        />
        <input
          type="text"
          name="class"
          value={character.class}
          onChange={handleInputChange}
          placeholder="Classe"
          className="w-full bg-gray-700 p-2 rounded"
        />
        <input
          type="number"
          name="level"
          value={character.level}
          onChange={handleInputChange}
          min="1"
          className="w-full bg-gray-700 p-2 rounded"
        />
      </div>
    </div>
  );
}

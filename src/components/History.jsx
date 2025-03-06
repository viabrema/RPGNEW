import React from "react";
import { useSheet } from "./SheetContext";

export default function History() {
    const { character, handleInputChange } = useSheet();

    return (
        <textarea
            name="history"
            value={character.history}
            onChange={handleInputChange}
            placeholder="História do personagem..."
            className="w-full bg-gray-700 p-2 rounded h-32"
        ></textarea>
    );
}

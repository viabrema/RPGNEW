import React from "react";
import DiceSelector from "./DiceSelector";
import { useSheet } from "./SheetContext";

export default function Attributes() {
    const { character, handleDiceChange } = useSheet();

    return (
        <div className="space-y-4">
            <DiceSelector
                attribute="strength"
                value={character.strength}
                onChange={handleDiceChange}
            />
            <DiceSelector
                attribute="dexterity"
                value={character.dexterity}
                onChange={handleDiceChange}
            />
            <DiceSelector
                attribute="vitality"
                value={character.vitality}
                onChange={handleDiceChange}
            />
            <DiceSelector
                attribute="intelligence"
                value={character.intelligence}
                onChange={handleDiceChange}
            />
            <DiceSelector
                attribute="charisma"
                value={character.charisma}
                onChange={handleDiceChange}
            />
        </div>
    );
}

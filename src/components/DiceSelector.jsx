import React from "react";

export default function DiceSelector({ attribute, value, onChange }) {
    const diceOptions = ["d4", "d6", "d8", "d10", "d12"];
    const attributeLabels = {
        strength: "Força",
        dexterity: "Destreza",
        vitality: "Vigor",
        intelligence: "Inteligência",
        charisma: "Carisma",
    };

    return (
        <div>
            <span className="block mb-2 font-bold">
                {attributeLabels[attribute]}
            </span>
            <div className="flex gap-2">
                {diceOptions.map((dice) => (
                    <button
                        key={dice}
                        type="button"
                        onClick={() => onChange(attribute, dice)}
                        className={`p-2 border rounded ${value === dice
                                ? "bg-red-600 text-white"
                                : "bg-gray-700 text-white"
                            } hover:bg-red-700 transition-colors`}
                    >
                        {dice}
                    </button>
                ))}
            </div>
        </div>
    );
}

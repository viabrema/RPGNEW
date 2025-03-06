import React from "react";
import { SheetProvider } from "./SheetContext";
import ChatColumn from "./ChatColumn";
import CharacterInfo from "./CharacterInfo";
import Attributes from "./Attributes";
import Skills from "./Skills";
import History from "./History";

export default function CharacterSheet() {
    return (
        <SheetProvider>
            <div className="flex min-h-screen bg-black text-white">
                {/* Coluna do Chat */}
                <ChatColumn />
                {/* Coluna principal da ficha */}
                <div className="w-3/4 p-6">
                    <div className="max-w-4xl mx-auto bg-gray-800 shadow-lg rounded-2xl p-6">
                        <CharacterInfo />
                        <hr className="my-4 border-red-600" />
                        <div className="grid grid-cols-2 gap-4">
                            {/* Coluna de Atributos */}
                            <Attributes />
                            {/* Coluna de Perícias */}
                            <Skills />
                        </div>
                        <hr className="my-4 border-red-600" />
                        <History />
                    </div>
                </div>
            </div>
        </SheetProvider>
    );
}

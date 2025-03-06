// components/ChatColumn.jsx
import React from "react";
import { useSheet } from "./SheetContext";

export default function ChatColumn() {
  const { messages, chat, setChat, sendMessage } = useSheet();

  return (
    <div className="w-1/4 p-4 bg-gray-900 border-r border-red-600">
      <h2 className="text-2xl font-bold mb-4 text-red-600">Chat do Jogo</h2>
      <div className="mb-4 h-96 overflow-y-auto p-2 bg-gray-800 rounded">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <strong>{msg.sender}: </strong>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={chat}
          onChange={(e) => setChat(e.target.value)}
          placeholder="Digite sua mensagem..."
          className="flex-1 bg-gray-700 p-2 rounded"
        />
        <button onClick={sendMessage} className="bg-red-600 px-4 py-2 rounded">
          Enviar
        </button>
      </div>
    </div>
  );
}

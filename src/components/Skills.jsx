// components/Skills.jsx
import React from "react";
import { useSheet } from "./SheetContext";

export default function Skills() {
  const { skills, toggleSkill } = useSheet();

  return (
    <div>
      <h3 className="text-2xl font-bold mb-2 text-red-600">Perícias</h3>
      <div className="space-y-2">
        {skills.map((skill) => (
          <div key={skill.id} className="flex items-center">
            <input
              type="checkbox"
              checked={skill.checked}
              onChange={() => toggleSkill(skill.id)}
              className="form-checkbox h-5 w-5 text-red-600"
            />
            <span className="ml-2">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import { Plus } from "lucide-react";

const AddTodo = ({ createTodo }) => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    if (!input.trim()) return;
    createTodo(input.trim());
    setInput("");
  };

  return (
    <div className="w-full flex gap-4 mt-6">
      <input
        type="text"
        placeholder="Ajouter une nouvelle tâche..."
        className="
          flex-grow
          px-5 py-3
          border border-gray-300 rounded-lg
          shadow-sm
          text-gray-700 placeholder-gray-400
          focus:outline-none focus:ring-3 focus:ring-green-400
          transition
          duration-300
          ease-in-out
        "
        onChange={handleInput}
        value={input}
        aria-label="Ajouter une nouvelle tâche"
      />
      <button
        disabled={!input.trim()}
        onClick={handleAdd}
        className="
          flex items-center gap-2
          bg-green-600
          hover:bg-green-700
          active:scale-95 active:shadow-lg
          disabled:bg-green-300 disabled:cursor-not-allowed
          text-white font-semibold
          rounded-lg px-5 py-3
          shadow-md
          transition
          duration-300
          ease-in-out
          select-none
        "
        aria-label="Ajouter une tâche"
        type="button"
      >
        <Plus size={20} />
        Ajouter
      </button>
    </div>
  );
};

export default AddTodo;

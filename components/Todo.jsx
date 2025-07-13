"use client";
import { useState } from "react";
import { Edit2, Save, X, Trash2 } from "lucide-react";

const Todo = ({ todo, changeTodoText, toggleIsTodoDone, deleteTodoItem }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);
  const [isDone, setIsDone] = useState(todo.done);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleIsDone = () => {
    toggleIsTodoDone(todo.id, !isDone);
    setIsDone((prev) => !prev);
  };

  const handleEdit = () => setEditing(true);

  const handleSave = () => {
    if (text.trim() === "") return; // éviter texte vide
    changeTodoText(todo.id, text.trim());
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
    setText(todo.text);
  };

  const handleDelete = () => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette tâche ?")) {
      deleteTodoItem(todo.id);
    }
  };

  return (
    <div className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg shadow-sm bg-white hover:shadow-md transition">
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={isDone}
        onChange={handleIsDone}
        className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500 focus:ring-2 cursor-pointer transition"
        aria-label="Marquer la tâche comme terminée"
      />

      {/* Texte de la tâche */}
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        readOnly={!editing}
        className={`flex-grow text-gray-800 placeholder-gray-400 px-3 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-green-400 transition
          ${
            isDone
              ? "line-through text-gray-400 italic select-none cursor-default"
              : "cursor-text"
          }
          ${editing ? "border-green-400 bg-green-50" : "border-transparent bg-transparent"}
        `}
        aria-label="Texte de la tâche"
      />

      {/* Boutons actions */}
      <div className="flex items-center gap-2">
        {editing ? (
          <>
            <button
              onClick={handleSave}
              className="p-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
              aria-label="Enregistrer la modification"
            >
              <Save size={20} />
            </button>
            <button
              onClick={handleCancel}
              className="p-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition shadow-md focus:outline-none focus:ring-2 focus:ring-red-400"
              aria-label="Annuler la modification"
            >
              <X size={20} />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleEdit}
              className="p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Modifier la tâche"
            >
              <Edit2 size={20} />
            </button>
            <button
              onClick={handleDelete}
              className="p-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition shadow-md focus:outline-none focus:ring-2 focus:ring-red-400"
              aria-label="Supprimer la tâche"
            >
              <Trash2 size={20} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Todo;

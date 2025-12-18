import React, { useState } from "react";

const Add = ({ onSubmit }) => {
  const [addText, setAddText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!addText.trim()) return;

    onSubmit(addText);
    setAddText("");
  };

  return (
    <form className="flex gap-3" onSubmit={handleSubmit}>
      <input
        type="text"
        value={addText}
        onChange={(e) => setAddText(e.target.value)}
        placeholder="Add new item..."
        className="
          flex-1
          px-4 py-2
          rounded-xl
          border
          border-gray-300
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-400
          focus:border-transparent
          text-gray-800
          placeholder-gray-400
        "
      />

      <button
        type="submit"
        disabled={!addText.trim()}
        className="
          px-5 py-2
          rounded-xl
          bg-indigo-600
          text-white
          font-medium
          hover:bg-indigo-700
          transition
          disabled:opacity-50
        "
      >
        Add
      </button>
    </form>
  );
};

export default Add;

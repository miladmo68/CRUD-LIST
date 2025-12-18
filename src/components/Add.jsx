import React from "react";

const Add = () => {
  return (
    <div className="flex gap-3">
      <input
        type="text"
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
        className="
          px-5 py-2
          rounded-xl
          bg-indigo-600
          text-white
          font-medium
          hover:bg-indigo-700
          transition
        "
      >
        Add
      </button>
    </div>
  );
};

export default Add;

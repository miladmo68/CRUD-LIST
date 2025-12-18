import { useState } from "react";
import Add from "./components/Add";

function App() {
  const initialItems = [
    { id: 1, text: "Buy milk" },
    { id: 2, text: "Finish CRUD task" },
    { id: 3, text: "Go to gym" },
    { id: 4, text: "Read 10 pages" },
    { id: 5, text: "Call the clinic" },
  ];

  const [items, setItems] = useState(initialItems);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-indigo-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-6">
        {/* 👆 space-y فاصله‌ها رو اتومات درست می‌کنه */}

        <h1 className="text-3xl font-bold text-center text-indigo-600">
          CRUD List
        </h1>

        <Add />

        {items.length > 0 ? (
          <ol className="space-y-3">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between bg-indigo-50 hover:bg-indigo-100 transition rounded-xl px-4 py-2"
              >
                <span className="text-gray-800 font-medium">{item.text}</span>

                <div className="flex gap-2">
                  <button className="text-xs px-3 py-1 rounded-lg bg-yellow-100 text-yellow-700 hover:bg-yellow-200 transition">
                    Edit
                  </button>

                  <button className="text-xs px-3 py-1 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition">
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <p className="text-center text-gray-400">No list available</p>
        )}
      </div>
    </div>
  );
}

export default App;

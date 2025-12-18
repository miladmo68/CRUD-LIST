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

  // Edit states
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  // CREATE
  const handleAddSubmit = (text) => {
    setItems((prev) => [{ id: Date.now(), text }, ...prev]);
  };

  // DELETE
  const deleteHandler = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // EDIT (start)
  const editHandler = (item) => {
    setEditingId(item.id);
    setEditingText(item.text);
  };

  // SAVE (update)
  const saveHandler = (id) => {
    if (!editingText.trim()) return;

    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, text: editingText } : it))
    );

    setEditingId(null);
    setEditingText("");
  };

  // CANCEL
  const cancelHandler = () => {
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-indigo-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center text-indigo-600">
          CRUD List
        </h1>

        <Add onSubmit={handleAddSubmit} />

        {items.length > 0 ? (
          <ol className="space-y-3">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between bg-indigo-50 hover:bg-indigo-100 transition rounded-xl px-4 py-2"
              >
                {/* TEXT / INPUT */}
                {editingId === item.id ? (
                  <input
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    className="flex-1 mr-2 px-3 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                ) : (
                  <span className="text-gray-800 font-medium">{item.text}</span>
                )}

                {/* BUTTONS */}
                <div className="flex gap-2">
                  {editingId === item.id ? (
                    <>
                      <button
                        type="button"
                        className="text-xs px-3 py-1 rounded-lg bg-green-100 text-green-700 hover:bg-green-200 transition"
                        onClick={() => saveHandler(item.id)}
                      >
                        Save
                      </button>

                      <button
                        type="button"
                        className="text-xs px-3 py-1 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
                        onClick={cancelHandler}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="text-xs px-3 py-1 rounded-lg bg-yellow-100 text-yellow-700 hover:bg-yellow-200 transition"
                        onClick={() => editHandler(item)}
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        className="text-xs px-3 py-1 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition"
                        onClick={() => deleteHandler(item.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
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

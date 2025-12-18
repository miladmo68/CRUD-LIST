import { useState } from "react";

function App() {
  const initialItems = [
    { id: 1, text: "Buy milk" },
    { id: 2, text: "Finish CRUD task" },
    { id: 3, text: "Go to gym" },
    { id: 4, text: "Read 10 pages" },
    { id: 5, text: "Call the clinic" },
  ];

  const [items, setItems] = useState(initialItems);

  // setItems((prev) => [...prev, initialItems]);

  return (
    <div className=" flex flex-col items-center ">
      <h1>CURD LIST</h1>
      <div>
        {items.length > 0 ? (
          <ol>
            {items.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ol>
        ) : (
          <p>No List Available</p>
        )}
      </div>
    </div>
  );
}

export default App;

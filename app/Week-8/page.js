"use client";
import ItemList from "./itemList";
import NewItem from "./newItemnew-item";
import { useState } from "react";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  {
    /*donesn't mutate array*/
  }
  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <main className="min-h-screen p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-center text-black dark:text-blue-600 mb-6">
          Shopping List
        </h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}

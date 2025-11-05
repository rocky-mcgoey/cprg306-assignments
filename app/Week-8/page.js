"use client";
import ItemList from "./ItemList";
import NewItem from "./NewItem";
import { useState } from "react";
import itemsData from "./Items.json";
import MealIdeas from "./MealIdeas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("chicken");

  {
    /*doesn't mutate array*/
  }
  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
    //setItems([...prevItems, newItem]);
  }

  return (
    <main className="min-h-screen p-6">
      <div className="mb-10 display: flex; flex-direction: column; gap: 10px;">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold text-center text-black dark:text-blue-600 mb-6">
            Shopping List + Meal Ideas
          </h1>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onSelect={setSelectedItemName} />
        </div>
        <div className="max-w-2xl mx-auto mt-10">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}

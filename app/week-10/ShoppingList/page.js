"use client";
import ItemList from "./ItemList";
import NewItem from "./NewItem";
import { useState } from "react";

import MealIdeas from "./MealIdeas";
import { useUserAuth } from "../../contexts/AuthContext";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState();

  {
    /*doesn't mutate array*/
  }
  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
    //setItems([...prevItems, newItem]);
  }

  if (!user) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-4 p-6">
        <p>You have to be logged in to view this content</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-2;">
        <div>
          <h1 className="text-2xl font-bold text-center text-black dark:text-blue-600 mb-6">
            Shopping List + Meal Ideas
          </h1>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onSelect={setSelectedItemName} />
        </div>
        <div className="p-4 mt-6">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}

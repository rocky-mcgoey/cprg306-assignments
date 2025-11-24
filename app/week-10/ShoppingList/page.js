"use client";
import ItemList from "./ItemList";
import NewItem from "./NewItem";
import { useState, useEffect } from "react";
import { getItems, addItem } from "../_services/ShoppingListService";
import MealIdeas from "./MealIdeas";
import { useUserAuth } from "../../contexts/AuthContext";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState();

  async function loadItems() {
    if (!user) return;
    try {
      const loadedItems = await getItems(user.uid);
      setItems(loadedItems);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  }

  useEffect(() => {
    if (!user) return;
    loadItems();
  }, [user]);

  async function handleAddItem(newItem) {
    if (!user) return;

    try {
      const id = await addItem(user.uid, newItem);

      const itemWithId = { ...newItem, id };
      setItems((prevItems) => [...prevItems, itemWithId]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
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

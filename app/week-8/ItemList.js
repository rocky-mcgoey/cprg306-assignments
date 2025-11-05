"use client";
import { useState } from "react";
import Item from "./Item.js";

export default function ItemList({ items, onSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });
  return (
    <section className="max-w mx-auto mt-3">
      <div className="flex justify-left gap-3 mb-4">
        <h2 className="text-lg font-semibold text-shadow-black dark:text-blue-600">
          Sort Items:
        </h2>
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-md font-medium border 
            ${
              sortBy === "name"
                ? "bg-yellow-600 text-white"
                : "bg-stone-300 text-gray-800"
            }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-md font-medium border 
            ${
              sortBy === "category"
                ? "bg-yellow-600 text-white"
                : "bg-stone-300 text-gray-800"
            }`}
        >
          Sort by Category
        </button>
      </div>

      <ul className="space-y-2">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={onSelect}
          />
        ))}
      </ul>
    </section>
  );
}

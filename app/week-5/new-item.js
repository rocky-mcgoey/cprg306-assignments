"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");
  const [name, setName] = useState("");


  // Increase quantity but stop at 20
  const increment = () => {
    setQuantity(q => {
      if (q < 20) return q + 1;
      return 20;
  });
  };

  // Decrease quantity but only until at 1
const decrement = () => {
  setQuantity(q => {
    if (q > 1) return q - 1;
    return 1;
  });
  };
  function handleSubmit(event) {
    event.preventDefault();
    const item = { name, quantity, category  };
    console.log("New Item:", item);
    alert(`Item Added: ${name} \nQuantity: ${quantity} \nCategory: ${category}`);

    // Reset form
    setName("");
    setQuantity(1);
    setCategory("Produce");
  }

  const categories = ["Produce", "Dairy", "Bakery", "Meat", "Canned Goods", "Dry Goods", "Household", , "Snacks", "Beverages", "Frozen Foods","Other"];




  return (
    <section className="max-w-md mx-auto mt-8 p-6 rounded-xl border-2 shadow-md bg-white-100 border-black-300 text-gray-800 dark:bg-stone-900 dark:border-teal-600 dark:text-teal-300">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium" htmlFor="name">
            Item Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
            placeholder="e.g., milk, 4 L 🥛"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium" htmlFor="quantity">
            Quantity (1-20)
          </label>

          <div className="flex items-center gap-3">
           
              <span className="mr-1">Current:</span>
              <span className="font-bold">{quantity}</span>
          </div>
            
          <div className="flex items-center gap-2 mb-2">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 disabled:cursor-not-allowed"
              
            >
              -
            </button>

            <button
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              className="px-3 py-1 bg-gray-400 rounded-md hover:bg-gray-200 dark:bg-blue-700 dark:hover:bg-blue-400 disabled:cursor-not-allowed"
            >
              +
            </button>
            
          </div>

            <p className="text-sm text-gray-300 mt-1">
              Allowed range: 1-20
            </p>
          </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="pt-1">
          <button
          type="submit"
          className="w-1/2 py-2 px-4 bg-teal-400 text-black font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Item
          </button>
        </div>
      </form>
    </section>
  );
}
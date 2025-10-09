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
      return 1;
  });
  };

  // Decrease quantity but only until at 1
const decrement = () => {
  setQuantity(q => {
    if (q > 1) return q - 1;
    return 1;
  });
};

  return (
    <section className="max-w-md mx-auto mt-8 p-6 rounded-xl border-2 border-green-500 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Quantity: {quantity}</h2>

      <div className="flex items-center gap-6">
        <button
          type="button"
          onClick={decrement}
          disabled={quantity === 1}
          className="px-6 py-2 rounded-lg bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200"
        >
          -
        </button>


        <button
          type="button"
          onClick={increment}
          disabled={quantity === 20}
          className="px-6 py-2 rounded-lg bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-400"
        >
          +
        </button>
      </div>
      <p className= "mt-4 text-sm text-gray-400">Allowed range: 1-20</p>
    </section>
  );
}
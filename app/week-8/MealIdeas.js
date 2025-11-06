"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [mealIdeas, setMealIdeas] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    if (!ingredient || !ingredient.trim()) {
      setMealIdeas([]);
      return;
    }
    const encode = encodeURIComponent(ingredient);
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encode}`
    );

    const data = await response.json();
    console.log(" hey", data); // remove this later
    setMealIdeas(data.meals ?? []);
  };

  useEffect(() => {
    fetchMealIdeas(ingredient);
  }, [ingredient]);

  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-semibold mt-5 mb-4 text-black dark:text-blue-600">
        Meal Ideas with {ingredient}
      </h2>

      {!ingredient && (
        <p className="text-gray-600 dark:text-gray-400">
          Please select an item to see meal ideas.
        </p>
      )}

      {ingredient && mealIdeas.length === 0 && (
        <p className="text-gray-600 dark:text-gray-400">No meal ideas found.</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 overflow-y-auto pr-1">
        {mealIdeas &&
          mealIdeas.map((meal) => (
            <div
              key={meal.idMeal}
              className="w-full p-4 rounded-md border-2 border-yellow-500 bg-stone-100 text-stone-900 dark:border-yellow-400 dark:bg-stone-800 dark:text-blue-600"
            >
              {meal.strMeal}
            </div>
          ))}
      </div>
    </div>
  );
}

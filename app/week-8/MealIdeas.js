"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [mealIdeas, setMealIdeas] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
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
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4 text-black dark:text-blue-600">
        Meal Ideas with {ingredient}
      </h2>

      {/* <pre>
        <code>{JSON.stringify(mealIdeas, null, 2)}</code>
      </pre> */}

      <ul>
        {mealIdeas &&
          mealIdeas.map((meal) => (
            <li key={meal.idMeal} className="mb-2">
              <p className="text-black dark:text-white">{meal.strMeal}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

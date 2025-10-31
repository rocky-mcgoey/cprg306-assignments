export default function Item({ name, quantity, category }) {
  return (
    <li className="
        w-full h-32 mx-auto mb-3 p-4 rounded-md flex flex-col justify-between
        border-2 border-yellow-500 bg-stone-100 text-stone-900
        hover:bg-stone-200
        dark:border-yellow-400 dark:bg-stone-800 dark:text-blue-600
        dark:hover:bg-stone-700">
      <p className="font-semibold">{name}</p>
      <p className="text-sm">Quantity: {quantity}</p>
      <p className="text-sm">
        Category: <span className="capitalize">{category}</span>
      </p>
    </li>
  );
}
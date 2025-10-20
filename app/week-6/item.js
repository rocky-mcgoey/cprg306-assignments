export default function Item({ name, quantity, category }) {
  return (
    <li className=" bg-stone-500 text-black border-3 border-yellow-500 rounded-md p-3 mb-3  w-full h-32 mx-auto flex flex-col justify-between">
      <p className="font-semibold">{name}</p>
      <p className="text-sm">Quantity: {quantity}</p>
      <p className="text-sm">
        Category: <span className="capitalize">{category}</span>
      </p>
    </li>
  );
}
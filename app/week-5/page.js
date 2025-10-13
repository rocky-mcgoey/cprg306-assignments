import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl text-teal-400 font-bold text-center mb-8">Add a New Item</h1>
      <NewItem />
    </main>
  );
}
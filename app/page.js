import Link from "next/link";

export default function Home() {
  return (
    <body>
    <header>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
    </header>
    <main className="p-8">
      <p>
        <Link href="/week-2">Week 2</Link>
      </p>
    </main>
    </body>
  );
}

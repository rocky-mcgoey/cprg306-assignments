import Link from "next/link";

export default function Home() {
  const rightArrow = "\u2192";
  return (
    <main>
    <header>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
    </header>
    
      <p>
        <Link href="/week-2">Go to Week 2 {rightArrow}</Link><Link href="/week-3">Go to Week 3</Link>
      </p>
    </main>
    
  );
}

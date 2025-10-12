import Link from "next/link";

export default function Home() {
  const rightArrow = "\u2192";
  return (
    <main>
    <header>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
    </header>
    
      <p>
        <Link href="/week-2">Go to Week 2 {rightArrow}</Link><Link href="/week-3">Go to Week 3 {rightArrow}</Link><Link href="/week-4">Go to Week 4 {rightArrow}</Link><Link href="/week-5">Go to Week 5</Link>
      </p>
    </main>
    
  );
}

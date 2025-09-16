"use client"; 
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Student Information</h1>
      <p>Name: Rocky McGoey</p>
      <p>
        GitHub:
        <Link href="https://github.com/rocky-mcgoey"> Rocky&#39;s Repository</Link>
      </p>
    </main>
  );
}
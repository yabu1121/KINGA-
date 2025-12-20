'use client'

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-green-500">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem] text-k-light-white">
          Kinga!!
        </h1>
        <p className="text-k-light-white">-アソバナイと新年が始まらないアプリ-</p>
        <Link href="/choice"
          className="px-4 py-2 rounded text-k-light-white bg-k-black hover:bg-k-dark-red cursor-pointer"
        >始める</Link>
      </div>
    </main>
  );
}
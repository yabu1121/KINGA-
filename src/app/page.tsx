'use client'

import { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center bg-green-500">
      <div className={`container flex flex-col items-center justify-center gap-12 px-4 py-16 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Kinga!!
        </h1>

        {/* 外側のコンテナで高さを確保し、ガタつき（Layout Shift）を防ぐ */}
        <div className="relative min-h-10 flex items-center justify-center">
          {!isLoaded && (
            <div className="absolute animate-pulse text-white text-sm">
              読み込み中...
            </div>
          )}
          
          <img 
            src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=16&duration=2000&pause=200&color=ffffff&center=true&vCenter=true&width=435&lines=-アソバナイと新年が始まらないアプリ-" 
            alt="キャッチコピー"
            onLoad={() => setIsLoaded(true)}
            className={`transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          />
        </div>

        <Link 
          href="/choice"
          className="rounded bg-black px-4 py-2 text-white hover:bg-red-800 transition-colors"
        >
          始める
        </Link>
      </div>
    </main>
  );
}
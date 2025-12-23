'use client'

import Link from "next/link"
import RankingSection from "../components/RankingSection"
import Image from "next/image"

const ChoicePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-k-dark-white p-4 font-sans relative">      
      <div className="w-full max-w-lg bg-k-white rounded-[2.5rem] shadow-2xl border-b-8 border-k-brown/20 overflow-hidden">
        <div className="p-8 bg-k-light-white border-b-2 border-dashed border-k-brown/10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-k-red text-xl">◆</span>
            <h2 className="text-k-brown font-black text-xl tracking-widest">ランキング</h2>
            <span className="text-k-red text-xl">◆</span>
          </div>
          <Image 
            src="/image/fuji.png"
            alt="富士山のイラスト"
            width={400}
            height={400}
            className="absolute top-140 right-30 z-0"
          />
          <div className="bg-white rounded-2xl p-4 shadow-inner min-h-50">
            <RankingSection />
          </div>
        </div>

        <div className="p-8 space-y-4">
          <Link 
            href="/game" 
            className="group relative flex items-center justify-center w-full py-5 bg-k-red hover:bg-k-dark-red text-k-yellow text-2xl font-black rounded-2xl transition-all shadow-lg active:scale-95 overflow-hidden"
          >
            <span className="relative z-10 tracking-[0.3em]">ゲーム開始</span>
            <div className="absolute inset-0 bg-k-yellow/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link 
              href="/ranking"
              className="flex items-center z-10 justify-center px-4 py-3 bg-k-brown text-k-light-white font-bold rounded-xl hover:bg-k-light-black transition-colors"
            >
              ランキングをもっと見る
            </Link>
            <Link 
              href="/howto"
              className="flex items-center justify-center z-10 px-4 py-3 bg-k-brown text-k-light-white font-bold rounded-xl hover:bg-k-light-black transition-colors"
            >
              遊び方
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChoicePage
'use client'

import Link from "next/link"
import Share from "~/app/components/Share"

const SharePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-k-dark-white p-6">
      
      <div className="max-w-md w-full bg-k-white border-2 border-k-yellow p-10 rounded shadow-xl text-center relative overflow-hidden">
        <h2 className="text-2xl font-black text-k-red mb-4">
          登録完了
        </h2>
        
        <p className="text-k-light-black font-bold mb-10 leading-relaxed">
          あなたの名前が<br />
          ランキングに登録されました！
        </p>

        <Share titleText="友達にもKingaを共有する"/>

        {/* ナビゲーションボタン */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
          <Link 
            href="/game" 
            className="flex-1 px-6 py-3 bg-k-red text-k-white font-black rounded-xl hover:bg-k-dark-red active:scale-95 transition-all shadow-md"
          >
            もう一度遊ぶ
          </Link>
          <Link 
            href="/" 
            className="flex-1 px-6 py-3 border-2 border-k-brown text-k-brown font-black rounded-xl hover:bg-k-brown hover:text-k-white active:scale-95 transition-all"
          >
            Top へ
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SharePage
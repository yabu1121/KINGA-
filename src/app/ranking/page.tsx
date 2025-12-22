'use client'

import React from 'react'
import { api } from '~/trpc/client'
import Link from 'next/link'

const RankingPage = () => {
  const { data, isLoading, error } = api.ranking.getAllRanking.useQuery()

  // 読み込み中のスケルトン表示（UX向上）
  if (isLoading) {
    return (
      <div className="min-h-screen bg-k-light-white flex flex-col items-center p-8">
        <div className="w-full max-w-md animate-pulse">
          <div className="h-10 bg-k-brown/20 rounded-lg mb-8" />
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-16 bg-k-white rounded-xl mb-3" />
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-k-light-white flex items-center justify-center p-8">
        <div className="bg-white p-6 rounded-2xl border-2 border-k-red text-center">
          <p className="text-k-red font-bold">通信エラーが発生しました</p>
          <p className="text-sm text-gray-500">{error.message}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-k-dark-white flex flex-col items-center p-6 sm:p-12 font-sans">
      
      {/* ページヘッダー */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-black text-k-brown flex items-center gap-3">
          <span className="text-k-red">🏮</span>
          Kinga ランキング表
          <span className="text-k-red">🏮</span>
        </h1>
        <p className="text-k-brown/60 text-sm mt-2 font-bold tracking-widest">RANKING BOARD</p>
      </div>

      {/* ランキングリスト */}
      <div className="w-full max-w-xl bg-k-white rounded-[2rem] shadow-xl border-2 border-k-brown p-2">
        <div className="bg-k-dark-white rounded-[1.8rem] border border-dashed border-k-brown/20">
          <ul className="divide-y divide-k-brown/10">
            {data?.map((item, index) => (
              <li 
                key={item.id} 
                className="flex items-center justify-between p-5 hover:bg-k-light-white/50 transition-colors first:rounded-t-[1.8rem] last:rounded-b-[1.8rem]"
              >
                <div className="flex items-center gap-4">
                  {/* 順位バッジ */}
                  <span className={`
                    w-10 h-10 flex items-center justify-center rounded-full font-black text-lg
                    ${index === 0 ? 'bg-k-yellow text-k-brown' : 
                      index === 1 ? 'bg-slate-300 text-slate-700' : 
                      index === 2 ? 'bg-orange-300 text-orange-900' : 'bg-k-dark-white border border-k-brown/20 text-k-brown'}
                  `}>
                    {index + 1}
                  </span>
                  
                  {/* 名前 */}
                  <span className="text-xl font-bold text-k-light-black">
                    {item.name}
                  </span>
                </div>

                {/* スコア */}
                <div className="text-right">
                  <span className="text-2xl font-black text-k-red tracking-tight">
                    {item.score.toLocaleString()}
                  </span>
                  <span className="text-xs font-bold text-k-brown ml-1">円</span>
                </div>
              </li>
            ))}

            {data?.length === 0 && (
              <li className="p-10 text-center text-k-brown/40 font-bold">
                まだ記名がありません。
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* 戻るボタン */}
      <Link 
        href="/choice" 
        className="mt-12 px-8 py-3 bg-k-brown text-k-light-white font-bold rounded-full hover:bg-k-light-black transition-all active:scale-95 shadow-lg"
      >
        戻る
      </Link>
    </div>
  )
}

export default RankingPage
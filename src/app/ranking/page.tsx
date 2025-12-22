'use client' 

import React from 'react'
import { api } from '~/trpc/client'

const RankingPage = () => {
  const { data, isLoading, error } = api.ranking.getAllRanking.useQuery()
  if (isLoading) return <div>読み込み中...</div>
  if (error) return <div>エラーが発生しました: {error.message}</div>

  return (
    <div>
      <h1>ランキング</h1>
      <ul className='border'>
        {data?.map((item) => (
          <li key={item.id}>
            <span className='mx-2'>{item.name}</span>
            <span>{item.score} 点</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RankingPage
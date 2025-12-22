'use client'
import { api } from '~/trpc/client'
import IsLoading from './IsLoading';
import IsError from './IsError';

const TopFiveRanking = () => {
  const { data, isLoading, error} = api.ranking.getTopFiveRanking.useQuery();
  if(isLoading) return <IsLoading />
  if(error) return <IsError />
  return (
    <div className="mb-10 overflow-hidden rounded-lg border border-gray-200">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">順位</th>
            <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">ユーザーネーム</th>
            <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">金額</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data?.map((item, idx) => (
            <tr key={item.id} className="hover:bg-gray-50 transition-colors"> 
              <td className={`px-4 py-2 text-brand-red text-center ${idx == 0 ? "font-bold text-k-yellow" : ""}`}>{idx + 1}位</td>
              <td className="px-4 py-2 text-brand-red text-center">{item.name}</td>
              <td className="px-4 py-2 text-gray-900 text-center">¥{item.score.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TopFiveRanking
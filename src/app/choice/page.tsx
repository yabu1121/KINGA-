import Link from "next/link"

const ChoicePage = () => {
  return (
    <div className="min-h-screen flex justify-center flex-col item-center bg-k-light-white">
      <div className="flex flex-col justify-center items-center mx-auto">
        <div className="bg-k-white px-20 py-10 rounded-2xl">
          <h2 className="text-center text-k-light-black font-bold">Kinga!! の今日のランキング</h2>
          <h2 className="px-4 py-2 text-k-light-black border-b-2 border-k-dark-red mb-2 text-center mx-auto">ランキング</h2>
          <div className="mb-10 overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">順位</th>
                  <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">金額</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-2 text-brand-red font-bold text-center">1位</td>
                  <td className="px-4 py-2 text-gray-900 text-center">¥25,000</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-2 text-gray-700 text-center">2位</td>
                  <td className="px-4 py-2 text-gray-900 text-center">¥20,000</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-2 text-gray-700 text-center">3位</td>
                  <td className="px-4 py-2 text-gray-900 text-center">¥5,200</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-2 text-gray-700 text-center">4位</td>
                  <td className="px-4 py-2 text-gray-900 text-center">¥5,000</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-2 text-gray-700 text-center">5位</td>
                  <td className="px-4 py-2 text-gray-900 text-center">¥2,500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Link href="/game" 
              className="px-4 py-2 bg-k-brown text-k-light-white rounded-2xl"
            >スタート</Link>
            <Link href="/ranking"
              className="px-4 py-2 rounded-2xl bg-k-brown text-k-light-white"
            >ランキングをもっと見る</Link>
            <Link href="/howto"
              className="px-4 py-2 rounded-2xl bg-k-brown text-k-light-white"
            >遊び方を見る</Link>
            <Link href="/login"
              className="px-4 py-2 rounded-2xl bg-blue-500 text-k-white"
            >ログイン</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChoicePage
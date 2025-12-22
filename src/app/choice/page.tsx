import Link from "next/link"
import RankingSection from "../components/RankingSection"

const ChoicePage = () => {
  return (
    <div className="min-h-screen flex justify-center flex-col item-center bg-k-light-white">
      <div className="flex flex-col justify-center items-center mx-auto">
        <div className="bg-k-white px-20 py-10 rounded-2xl">
          <RankingSection />
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
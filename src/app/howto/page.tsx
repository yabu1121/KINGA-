'use client'
import Image from "next/image"

const HowToPlay = () => {
  const steps = [
    {
      src: "/image/howtoplay1.png",
      text: "選択画面でスタートを押しましょう。ランキングページでは1か月間の順位を確認できます。",
    },
    {
      src: "/image/howtoplay2.png",
      text: "スタートボタンを押したら画面が切り替わり、3秒間のカウントダウンが始まります。",
    },
    {
      src: "/image/howtoplay3.png",
      text: "10秒間のうちに連打をできる限り多くして、たくさんのお年玉をもらおう！",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-k-light-white px-6 py-10">
      <h1 className="text-3xl font-bold text-k-light-red mb-10">遊び方説明</h1>
      <div className="flex flex-col gap-12 max-w-md w-full">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-sm">
            <div className="relative w-48 h-48 mb-6">
              <Image
                src={step.src}
                alt={`遊び方説明${index + 1}`}
                fill
                className="object-contain" 
              />
            </div>
            <p className="text-gray-700 font-medium leading-relaxed">
              {step.text}
            </p>
          </div>
        ))}
      </div>

      <button 
        onClick={() => window.history.back()}
        className="mt-12 bg-gray-200 text-gray-600 px-8 py-3 rounded-full font-bold hover:bg-gray-300 transition"
      >
        戻る
      </button>
    </div>
  )
}

export default HowToPlay
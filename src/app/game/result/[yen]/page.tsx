'use client'

import { useParams } from "next/navigation"
import { useState } from "react";
import { toast } from "sonner"

const ResultPage = () => {

  const handleShare = () => {
    const text = `kinga!!-アソバナイと新年が始まらないアプリ-で${disp}円のお年玉をもらうことができました！#お年玉ゲーム #kinga`;
    const url = window.location.href; 
    const xUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(xUrl, '_blank');
  };

  const handleLineShare = () => {
    const text = `kinga!!で ${disp}円円のお年玉をもらうことができました！\nアソバナイと新年が始まらないアプリ！`;
    const url = window.location.href;
    const lineUrl = `https://line.me/R/msg/text/?${encodeURIComponent(text + "\n" + url)}`;
    window.open(lineUrl, '_blank');
  };

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url)
      .then(() => {
        toast.success('リンクをコピーしました！', {
          description: '友達に送って自慢しよう！',
        });
      })
      .catch((err) => {
        console.error("コピーに失敗しました", err);
      });
  };

  const {yen} = useParams(); 
  const disp = Number(yen).toLocaleString();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-k-light-white-white relative">
      <div className="flex flex-col items-center bg-green-100 rounded-3xl w-80 py-40">
        <h1 className="text-3xl text-k-light-red">
          結果
        </h1>
        <p className="text-6xl text-k-yellow">\{disp}</p>
        <button 
          onClick={() => (setIsModalOpen(state => !state))}
          className="mt-8 bg-k-green text-k-dark-white px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform"
        >
          友達に自慢する
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-white w-[90%] max-w-sm p-8 rounded-3xl relative flex flex-col items-center gap-4">
            
            <button 
              className="absolute -top-4 -right-4 bg-k-brown w-10 h-10 text-white rounded-full font-bold shadow-lg"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>

            <h2 className="text-xl font-bold mb-2">友達に自慢する</h2>

            <button 
              onClick={handleShare}
              className="w-full py-3 bg-black text-white rounded-xl font-bold hover:opacity-90"
            >
              X (Twitter) で自慢する
            </button>

            <button 
              onClick={handleLineShare}
              className="w-full py-3 bg-[#06C755] text-white rounded-xl font-bold hover:opacity-90"
            >
              LINE で自慢する
            </button>

            <button 
              onClick={handleCopyLink}
              className="w-full py-3 bg-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-300"
            >
              リンクをコピーする
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ResultPage
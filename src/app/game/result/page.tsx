'use client'

import { useRouter } from "next/navigation"
import { useRef, useEffect } from "react";
import { toast } from "sonner"
import Share from "~/app/components/Share";
import { api } from "~/trpc/client";
import { useGameStore } from "~/store/useGameStore";

const ResultPage = () => {
  const router = useRouter();
  const { score, clickCount } = useGameStore();
  const disp = score.toLocaleString();

  const formNameRef = useRef<HTMLInputElement>(null);

  const addRanking = api.ranking.postScore.useMutation({
    onSuccess: () => {
      toast.success("ランキングに登録しました!");
      router.push("/game/share");
    },
    onError: (e) => toast.error(`エラー: ${e.message}`)
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = formNameRef.current?.value.trim();
    if (!name) return toast.error("名前を入力してください");
    addRanking.mutate({ name, score });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-k-light-white p-4 font-sans">
      <div className="flex flex-col items-center bg-k-white shadow-2xl rounded-3xl w-full max-w-sm overflow-hidden border-4 border-k-brown">
        <div className="bg-k-red w-full py-6 text-center shadow-inner">
          <h1 className="text-k-yellow text-2xl font-black tracking-[0.2em]">
            結果
          </h1>
        </div>

        <div className="py-12 text-center relative w-full">
          <p className="text-k-light-black text-sm font-bold mb-2 relative">獲得金額</p>
          <div className="flex items-baseline justify-center gap-1 relative">
            <span className="text-3xl font-bold text-k-red">¥</span>
            <p className="text-7xl font-black text-k-light-black tracking-tighter italic">
              {disp}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="w-full px-8 pb-10 space-y-6 relative">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-bold text-k-brown ml-1 flex items-center gap-2">
              <span className="w-2 h-2 bg-k-red rotate-45 inline-block"></span>
              ユーザー名
            </label>
            <input
              type="text"
              placeholder="お名前"
              className="w-full px-4 py-3 rounded-lg border-2 border-k-brown/20 bg-k-dark-white outline-none focus:border-k-red transition-all text-k-black placeholder:text-k-light-black/30"
              ref={formNameRef}
              id="name"
              disabled={addRanking.isPending}
            />
          </div>

          <button
            className="group w-full py-4 bg-k-red hover:bg-k-dark-red disabled:bg-k-light-black/50 text-k-yellow font-bold rounded-full shadow-lg active:scale-95 transition-all border-b-4 border-k-dark-red"
            type="submit"
            disabled={addRanking.isPending}
          >
            {addRanking.isPending ? "登録中..." : "ランキングに載せる"}
          </button>
        </form>

        <div className="w-full bg-k-dark-white p-6 border-t-2 border-dashed border-k-brown/30 flex flex-col items-center gap-4">
          <Share titleText="結果を自慢しよう!" />
          <button
            onClick={() => router.push("/game")}
            className="text-sm font-bold text-k-brown hover:text-k-red transition-colors flex items-center gap-1"
          >
            ← 最初から遊ぶ
          </button>
          <button
            onClick={() => router.push("/")}
            className="text-sm font-bold text-k-brown hover:text-k-red transition-colors flex items-center gap-1"
          >
            ← topに戻る
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResultPage
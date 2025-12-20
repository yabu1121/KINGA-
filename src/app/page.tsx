export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Kinga <span className="text-[hsl(280,100%,70%)]">学習</span>プロジェクト
        </h1>

        {/* 学習ガイド */}
        <div className="max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-bold">🎓 学習を開始しましょう！</h2>
          <p className="mb-6 text-lg text-white/80">
            このプロジェクトはNext.js App Routerの学習用スケルトンです。
            <br />
            基本的な設定だけが完了した状態なので、ここから独自の機能を追加していきましょう。
          </p>

          <div className="mt-8 grid gap-4 text-left">
            <div className="rounded-lg bg-white/10 p-4">
              <h3 className="mb-2 font-bold">✨ 次のステップ</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-white/70">
                <li>データベースを追加してデータを保存する</li>
                <li>tRPCでAPIエンドポイントを作成する</li>
                <li>認証機能を実装する</li>
                <li>UIコンポーネントを追加する</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

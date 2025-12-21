import Link from "next/link"

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <form action="">
        <div className="flex gap-20 items-center">
          <label htmlFor="name">name</label>
          <input id="name" type="text" className="border px-4 rounded-xl"/>
        </div>
        <div className="flex gap-20 items-center">
          <label htmlFor="email">メールアドレス</label>
          <input id="email" type="email" className="border px-4 rounded-xl"/>
        </div>
        <div className="flex gap-20 items-center">
          <label htmlFor="password">パスワード</label>
          <input id="password" type="password" className="border px-4 rounded-xl"/>
        </div>
        <button className="px-4 py-2 bg-blue-500 rounded text-white">ログイン</button>
        <Link href="/signup">
          <p className="text-k-red border-b border-k-dark-red w-fit">まだ登録をしていませんか？？</p>
        </Link>
      </form>
    </div>
  )
}

export default LoginPage
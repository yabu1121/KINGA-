'use client'

export default function HomePage() {
  const handleChangeThema = () => {
    console.log("change thema")
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Kinga
        </h1>
        <button 
          className="px-4 py-2 rounded text-white bg-black hover:bg-blue-500 cursor-pointer"
          onClick={handleChangeThema}
        >change thema</button>
      </div>
    </main>
  );
}
'use client'
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

interface Coordinate {
  x: number;
  y: number;
}

interface PopupData {
  id: number;
  x: number;
  y: number;
  flyX: string;
  amount: number;
}

const GamePage = () => {
  const [yen, setYen] = useState(0);
  const [isLean, setIsLean] = useState(false);
  const [mousePosition, setMousePosition] = useState<Coordinate>({x: 0, y: 0});
  const [popups, setPopups] = useState<PopupData[]>([]);
  const boxRef = useRef(null);

  const getRandomAmount = () => {
    const difId = Math.random() * 100;
    if (difId <= 10) return 100;
    if (difId <= 20) return 200;
    if (difId <= 35) return 400;
    if (difId <= 60) return 700;
    if (difId <= 61) return 2000;
    if (difId <= 70) return 10;
    if (difId <= 80) return 500;
    return 300;
  };

  const handleClick = () => {
    const currentAmount = getRandomAmount(); 
    setYen((state) => (state + currentAmount));
    setIsLean((state) => !state);

    const newPopup = {
      id: Date.now(),
      x: mousePosition.x,
      y: mousePosition.y,
      flyX: `${Math.random() * 200 - 100}px`,
      amount: currentAmount
    };
    setPopups((prev) => [...prev, newPopup]);

    setTimeout(() => {
      setPopups((prev) => prev.filter((p) => p.id !== newPopup.id));
    }, 800);
  }

  useEffect(() => {
    const mouseMoveListener = (event) => {
      const rect = boxRef.current?.getBoundingClientRect();
      setMousePosition({ 
        x: Math.floor(event.clientX - rect.left), 
        y: Math.floor(event.clientY - rect.top),
      });
    };
    window.addEventListener("mousemove", mouseMoveListener);
    return () => {
    window.removeEventListener("mousemove", mouseMoveListener);
    };
  }, []);

  return (
    <div 
      className="border flex flex-col min-h-screen items-center justify-center"
      id="screen"
    >
      {mousePosition.x} : {mousePosition.y}
      <div className="relative">
        <h2>\{yen.toLocaleString()}</h2>
        <button 
          onClick={handleClick}
          id="pochi"
          ref={boxRef}
        >
          <Image 
            src="/image/otoshidama.png"
            alt="ポチ袋の画像"
            width={2000}
            height={2000}
            className={`w-72 h-72 transition-all duration-75 ${isLean ? "rotate-12" : "-rotate-12"}`}
          />
          {popups.map((popup) => (
            <span
              key={popup.id}
              className="absolute text-2xl font-bold text-k-yellow pointer-events-none animate-fly-and-fade"
              style={{ 
                left: popup.x, 
                top: popup.y-20,
                '--fly-x': popup.flyX 
              }}
            >
              +{popup.amount}
            </span>
          ))}
        </button>
        <p className="text-center text-k-red font-bold text-3xl mt-20 animate-bounce">ポチ袋を連打!!!</p>
      </div>
    </div>
  )
}

export default GamePage
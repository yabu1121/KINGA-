'use client'
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner";
import { useGameStore } from "~/store/useGameStore";

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
  const { setResult } = useGameStore();
  const [yen, setYen] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const [isLean, setIsLean] = useState(false);
  const [mousePosition, setMousePosition] = useState<Coordinate>({ x: 0, y: 0 });
  const [popups, setPopups] = useState<PopupData[]>([]);
  const [status, setStatus] = useState("ready");
  const [timeLeft, setTimeLeft] = useState(10);
  const [countdown, setCountdown] = useState(3);
  const boxRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const getRandomAmount = () => {
    const difId = Math.random() * 100;
    if (difId <= 10) return 50;
    if (difId <= 20) return 100;
    if (difId <= 35) return 200;
    if (difId <= 60) return 150;
    if (difId <= 61) return 2000;
    if (difId <= 70) return 80;
    if (difId <= 80) return 200;
    return 300;
  };

  const handleClick = () => {
    if (status != "playing") return;
    const currentAmount = getRandomAmount();
    setYen((state) => (state + currentAmount));
    setTotalClicks((prev) => prev + 1);
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
    if (status === 'ready') {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setStatus('playing');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }

    if (status === 'playing') {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setStatus('finished');
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }

    if (status == "finished") {
      toast("終了!!");
      setResult(yen, totalClicks);
      setTimeout(() => {
        router.push('/game/result');
      }, 2000);
    }
  }, [status]);


  useEffect(() => {
    const mouseMoveListener = (event: MouseEvent) => {
      const rect = boxRef.current?.getBoundingClientRect();
      if (!rect) return;
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
      className="border flex flex-col min-h-screen items-center justify-center relative"
      id="screen"
    >
      <div className="relative">
        <h1 className={`text-center text-2xl mb-10 pointer-events-none select-none ${timeLeft === 1 ? "text-k-light-red" : ""}`}>残り : {timeLeft} 秒</h1>
        <h2 className="pointer-events-none select-none ">\{yen.toLocaleString()}</h2>
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
            className={`w-72 h-72 transition-all duration-75 pointer-events-none select-none ${isLean ? "rotate-12" : "-rotate-12"}`}
          />
          {popups.map((popup) => (
            <span
              key={popup.id}
              className={`absolute text-2xl font-bold pointer-events-none select-none  animate-fly-and-fade ${popup.amount == 2000 ? "text-3xl text-k-yellow" : "text-k-light-red"}`}
              style={{
                left: popup.x,
                top: popup.y - 20,
                '--fly-x': popup.flyX
              } as React.CSSProperties}
            >
              +{popup.amount}
            </span>
          ))}
        </button>
        <p className="text-center text-k-red font-bold text-3xl mt-20 animate-bounce pointer-events-none select-none ">ポチ袋を連打!!!</p>
      </div>
      {status == "ready" && <span className="w-screen h-screen bg-k-light-black absolute opacity-90 flex justify-center items-center">
        <p className="text-k-dark-white text-9xl font-bold mb-20 pointer-events-none select-none">{countdown}</p>
      </span>}
    </div>
  )
}

export default GamePage
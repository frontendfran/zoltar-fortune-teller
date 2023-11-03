'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [fortune, setFortune] = useState("");

  async function getFortune() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setFortune(data.slip.advice);
  }

  useEffect(function () {
    getFortune();
  }, []);

  return (
    <div>
      <h1>{fortune}</h1>
      <button onClick={getFortune}>Get Fortune</button>
    </div>
  );
}
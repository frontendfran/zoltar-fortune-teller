'use client'

import { useEffect, useState } from 'react';
import { Charm } from 'next/font/google';

const charm = Charm({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  const [fortune, setFortune] = useState('');

  async function getFortune() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setFortune(data.slip.advice);
  }

  useEffect(function () {
    getFortune();
  }, []);

  return (
    <main>
      <h1 className={charm.className}>Zoltar</h1>
      <h2>{fortune}</h2>
      <button onClick={getFortune}>Get Fortune</button>
    </main>
  );
}
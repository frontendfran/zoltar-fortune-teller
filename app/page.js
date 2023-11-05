// https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
// https://fonts.google.com/specimen/Charm?preview.text=ZOLTAR&classification=Handwriting

'use client'

import { useEffect, useState } from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
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
    <main className={roboto.className}>
      <h1>{fortune}</h1>
      <button onClick={getFortune}>Get Fortune</button>
    </main>
  );
}
import React from 'react';
import me from '../assets/images/me.svg';

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center" id="home">
      <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl">Fiorella Chilcon</h1>
          <img className="my-9 w-[272px] h-[293px]" src={me} alt="Fiorella"/>
          <h2 className="text-2xl">Frontend Developer</h2>
      </div>
    </div>
  )
}

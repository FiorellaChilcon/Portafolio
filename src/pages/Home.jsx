import React from 'react';
import me from '../assets/images/me.svg';
import SlideInAnimation from '../components/SlideInAnimation';

export default function Home() {
  return (
    <div className="w-full h-screen py-9 flex items-center justify-center" id="home">
      <SlideInAnimation animationType='fade-in-bottom' styleClasses="flex flex-col items-center justify-center">
        <h1 className="text-4xl">Fiorella Chilcon</h1>
        <img className="my-9 w-[272px] h-[293px]" src={me} alt="Fiorella"/>
        <h2 className="text-2xl">Frontend Developer</h2>
      </SlideInAnimation>
    </div>
  )
}

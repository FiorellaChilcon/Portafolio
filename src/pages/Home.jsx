import React from 'react';
import me from '../assets/images/me.svg';
import SlideInAnimation from '../components/SlideInAnimation';
import ContactLinks from '../components/ContactLinks';

export default function Home() {
  return (
    <div className="w-full min-h-screen pt-9 mb-9 flex flex-col items-center justify-center" id="home">
    <div className="flex-1 flex items-center max-w-5xl px-8 lg:w-10/12 w-full">
      <SlideInAnimation animationType='fade-in-bottom' styleClasses="flex flex-col items-center justify-center mx-auto">
        <h1 className="sm:text-4xl text-3xl text-center">Fiorella Chilcon</h1>
        <img className="my-9 sm:h-[293px] h-[250px]" src={me} alt="Fiorella"/>
        <h2 className="sm:text-2xl text-xl text-center">Frontend Developer</h2>
      </SlideInAnimation>
    </div>
      <div className="self-start p-4">
        <ContactLinks />
      </div>
    </div>
  )
}

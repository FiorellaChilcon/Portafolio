import React from 'react';
import github from '../assets/images/github.svg';
import play from '../assets/images/play.svg';
import SlideInAnimation from './SlideInAnimation';

export default function ProjectCard(props) {
  const { picture, name, link, repo, stack } = props;

  return (
    <SlideInAnimation animationType='fade-in-bottom' styleClasses="flex justify-center flex-col items-center border rounded-lg bg-white shadow hover:shadow-md w-[410px] h-[260px] m-5 transition-all cursor-pointer">
      <img className="h-[130px] w-auto transition-all" src={picture} alt={name} />
      <h1 className="font-normal text-base text-center transition-all">{name}</h1>
      <div className="hidden justify-center items-center flex-col size-full text-black transition-all">
        <h1>{name}</h1>
        <span className="mb-5 transition-all text-center text-sm">{stack}</span>
        <div>
          <a href={repo} target='_blank' rel='noreferrer'>
            <img className="h-[28px] transition-all mr-4" src={github} alt='github'/>
          </a>
          <a href={link} target='_blank' rel='noreferrer'>
            <img className="h-[28px] transition-all"  src={play} alt='play'/>
          </a>
        </div>
      </div>
    </SlideInAnimation>
  )
}

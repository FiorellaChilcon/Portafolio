import React from 'react';
import github from '../assets/icons/github.svg';
import play from '../assets/icons/play.svg';
import SlideInAnimation from './SlideInAnimation';

export default function ProjectCard(props) {
  const { picture, name, link, repo, stack } = props;

  return (
    <SlideInAnimation animationType='fade-in-bottom' styleClasses="group/project-card flex justify-center flex-col items-center border rounded-lg bg-white shadow hover:shadow-md lg:w-[410px] lg:h-[260px] sm:w-[360px] sm:h-[210px] w-full h-[200px] min-w-[250px] transition-all cursor-pointer">
      <img className="lg:h-[130px] sm:h-[100px] h-[80px] w-auto transition-all group-hover/project-card:hidden" src={picture} alt={name} />
      <h3 className="font-normal text-base text-center transition-all group-hover/project-card:hidden">{name}</h3>
      <div className="hidden justify-center items-center flex-col size-full text-black transition-all group-hover/project-card:flex">
        <h3 className="font-medium mb-2 text-base">{name}</h3>
        <span className="mb-5 transition-all text-center text-sm">{stack}</span>
        <div className="flex">
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

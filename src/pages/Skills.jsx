import React from 'react';
import SlideInAnimation from '../components/SlideInAnimation';

function Tag({ name }) {
  const animations = ['fade-in', 'fade-in-bottom', 'slide-left', 'slide-right']
  const randomNum = Math.floor(Math.random() * animations.length);

  return (
    <SlideInAnimation  animationType={animations[randomNum]} styleClasses="rounded-lg bg-gray-200 py-2 px-4">
      {name}
    </SlideInAnimation>
  )
}

const frontEndStack = ['Next.js', 'React.js', 'Ember.js', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind', 'Bulma', 'Sass'];
const backEndStack = ['Express.js', 'Node.js', 'SQL', 'Java'];

export default function Skills() {
  return (
    <div className="lg:min-h-screen flex py-9 px-8 justify-center items-center flex-col" id="skills">
      <h2 className="text-2xl mb-9 font-medium">Skills</h2>
      <div className="lg:w-8/12 w-full">
        <h3 className="text-xl font-normal">Frontend</h3>
        <p className="mt-4 mb-10">Technologies I’ve worked with  to develop user interfaces...</p>
        <div className="flex flex-wrap gap-6">
          {frontEndStack.map(tool => (
            <Tag name={tool} />
          ))}
        </div>
      </div>
      <div className="lg:w-8/12 w-full my-16">
        <h3 className="text-xl font-normal">Backend</h3>
        <p className="mt-4 mb-10">In the backend side, I’ve used the following technologies....</p>
        <div className="flex flex-wrap gap-6">
          {backEndStack.map(tool => (
            <Tag name={tool} />
          ))}
        </div>
      </div>
    </div>
  )
}

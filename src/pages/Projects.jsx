import React from 'react';
import ProjectCard from '../components/ProjectCard';
import burgerQueen from '../assets/images/burger-queen.png';
import mdLinks from '../assets/images/md-links.png';
import scheduleTweets from '../assets/images/schedule-tweets.png';
import joinApp from '../assets/images/join-app.png';

export default function Projects() {
  return (
    <div className="lg:min-h-screen flex py-9 justify-center items-center flex-col" id="projects">
      <h2 className="text-2xl mb-9 font-medium">Projects</h2>
      <div className="flex flex-wrap justify-center items-center lg:w-9/12 w-full">
        <ProjectCard
          picture={joinApp}
          name='JOIN - Social Network'
          link='https://join-network.firebaseapp.com/'
          repo='https://github.com/FiorellaChilcon/Join-network'
          stack='React hooks - Firebase'
        />
        <ProjectCard
          picture={scheduleTweets}
          name='Schedule Tweets - Web app'
          link='https://app-scheduled-tweets.herokuapp.com/'
          repo='https://github.com/FiorellaChilcon/scheduled-tweets'
          stack='Ruby on Rails - PostgreSQL - Twitter API'
        />
        <ProjectCard
          picture={burgerQueen}
          name='Burger Queen - API'
          link='https://github.com/FiorellaChilcon/LIM012-fe-burger-queen-api'
          repo='https://github.com/FiorellaChilcon/LIM012-fe-burger-queen-api'
          stack='Express.js -  Mongo DB - Docker'
        />
        <ProjectCard
          picture={mdLinks}
          name='MD Links - Library'
          link='https://www.npmjs.com/package/markdown-links-analyzer'
          repo='https://github.com/FiorellaChilcon/LIM012-fe-md-links'
          stack='Node.js - NPM'
        />
      </div>
    </div>
  )
}

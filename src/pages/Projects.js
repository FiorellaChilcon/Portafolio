import React from 'react';
import ProyectCard from '../components/ProjectCard';
import burgerQueen from '../assets/images/burger-queen.png';
import mdLinks from '../assets/images/md-links.png';
import scheduleTweets from '../assets/images/schedule-tweets.png';
import joinApp from '../assets/images/join-app.png';

export default function Projects() {
  return (
    <div className='project-wrapper' id='projects'>
      <div className='section-header'>
        PROYECTS
      </div>
      <div className='divider'></div>
      <div className='projects-container'>
        <ProyectCard
          picture={joinApp}
          name='JOIN - Social Network'
          link='https://join-network.firebaseapp.com/'
          repo='https://github.com/FiorellaChilcon/Join-network'
          stack='React hooks - Firebase'
        />
        <ProyectCard
          picture={scheduleTweets}
          name='Schedule Tweets - Web app'
          link='https://app-scheduled-tweets.herokuapp.com/'
          repo='https://github.com/FiorellaChilcon/scheduled-tweets'
          stack='Ruby on Rails - PostgreSQL - Twitter API'
        />
        <ProyectCard
          picture={burgerQueen}
          name='Burger Queen - API'
          link='https://github.com/FiorellaChilcon/LIM012-fe-burger-queen-api'
          repo='https://github.com/FiorellaChilcon/LIM012-fe-burger-queen-api'
          stack='Express.js -  Mongo DB - Docker'
        />
        <ProyectCard
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

import React from 'react'
import ProyectCard from '../components/ProjectCard';
import burgerQueen from '../assets/images/burger-queen.png'
import mdLinks from '../assets/images/md-links.png'
import scheduleTweets from '../assets/images/schedule-tweets.png'
import joinApp from '../assets/images/join-app.png'

export default function Projects() {
  return (
    <div className='projects-container'>
      <ProyectCard
       picture={joinApp}
       name='JOIN - Social Network'
       link='https://join-network.firebaseapp.com/'
      />
      <ProyectCard
       picture={scheduleTweets}
       name='Schedule Tweets - Web app'
       link='https://app-scheduled-tweets.herokuapp.com/'
      />
      <ProyectCard
       picture={burgerQueen}
       name='Burger Queen - API'
       link='https://github.com/FiorellaChilcon/LIM012-fe-burger-queen-api'
      />
      <ProyectCard
       picture={mdLinks}
       name='MD Links - Library'
       link=''
      />
    </div>
  )
}

import React from 'react'
import github from '../assets/images/github.svg'
import play from '../assets/images/play.svg'

export default function ProjectCard(props) {
  const { picture, name, link, repo, stack } = props;

  return (
    <div className='project-card'>
      <img src={picture} alt={name} />
      <h1>{name}</h1>
      <div className='project-card-info'>
        <h1>{name}</h1>
        <span>{stack}</span>
        <div>
          <a href={repo} target='_blank' rel='noreferrer'>
            <img src={github} alt='github'/>
          </a>
          <a href={link} target='_blank' rel='noreferrer'>
            <img src={play} alt='play'/>
          </a>
        </div>
      </div>
    </div>
  )
}

import React from 'react'

export default function ProjectCard(props) {
  const { picture, name, link } = props;

  return (
    <a className='project-card' href={link}>
      <img src={picture} alt={name} />
      <h1>{name}</h1>
    </a>
  )
}

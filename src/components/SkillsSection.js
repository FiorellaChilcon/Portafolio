import React from 'react'

function SkillItem(props) {
  const { skill } = props;
  return (
    <div className='skill-child'>
      <img src={skill.img} alt='frameworks'/>
      {skill.items.map(item => (
        <span>{item}</span>
      ))}
    </div>
  )
}

export default function SkillsSection(props) {
  const { skills, title } = props;
  return (
    <div className='skill-wrapper'>
      <div className='section-header'>
        {title}
      </div>
      <div className='divider'></div>
      <div className='skill-section'>
        <div className='skill-subsection'>
          {skills.slice(0, 3).map((skill) => <SkillItem skill={skill}/> )}
        </div>
        <div className='line'></div>
        <div className='skill-subsection'>
          {skills.slice(3).map((skill) => <SkillItem skill={skill}/> )}
        </div>
      </div>
    </div>
  )
}

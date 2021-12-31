import React from 'react'
import SkillsSection from '../components/SkillsSection'
import code from '../assets/images/code.svg'
import database from '../assets/images/database.svg'
import styles from '../assets/images/styles.png'
import languages from '../assets/images/languages.svg'
import analytics from '../assets/images/analytics.svg'
import creativity from '../assets/images/creativity.svg'
import communication from '../assets/images/communication.svg'
import problemSolving from '../assets/images/problem-solving.svg'
import teamWork from '../assets/images/team-work.svg'
import adaptability from '../assets/images/adaptability.png'

const hardSkills = [
  {
    img: code,
    items: ['React.js', 'Ember.js', 'Node.js / Express.js', 'Ruby on Rails']
  },
  {
    img: database,
    items: ['SQL', 'Mongo DB', 'Firebase']
  },
  {
    img: styles,
    items: ['CSS', 'Tailwind', 'SASS']
  },
  {
    img: languages,
    items: ['Javascript', 'Ruby']
  },
  {
    img: analytics,
    items: ['Google Analytics', 'Amplitude', 'Metabase']
  }
];

const softSkills = [
  { img: problemSolving, items: ['Problem-solving'] },
  { img: creativity, items: ['Creativity'] },
  { img: teamWork, items: ['Team-work'] },
  { img: adaptability, items: ['Adaptability'] },
  { img: communication, items: ['Good comunication']}
];

export default function Skills() {
  return (
    <div className='skill-container' id='skills'>
      <SkillsSection skills={hardSkills} title='HARD SKILLS'/>
      <SkillsSection skills={softSkills} title='SOFT SKILLS'/>
    </div>
  )
}

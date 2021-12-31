import React from 'react';
import me from '../assets/images/me.jpeg';
import jsImg from '../assets/images/js.png';
import cssImg from '../assets/images/css.png';
import htmlImg from '../assets/images/html.png';

export default function Home() {
  return (
    <div className='home-container'>
      <div className='me-container'>
        <div className='info' id='about-me'>
          <h1>Hey, I’m Fiorella 👋</h1>
          <div className='intro'>
            I’m a  Junior full stack developer, my passion is programming
            and my constant professional development, I enjoy creating graphic
            interfaces that reflect my creativity and challenges that require me to
            overcome uncertainty and obtain new skills and knowledge.
          </div>
          <div className='lg-imgs'>
            <img src={jsImg} alt='javascript'></img>
            <img className='html-img' src={htmlImg} alt='html'></img>
            <img src={cssImg} alt='css'></img>
          </div>
        </div>
        <img className='me' src={me} alt='Fiorella'></img>
      </div>
    </div>
  )
}

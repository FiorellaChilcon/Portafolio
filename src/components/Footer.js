import React from 'react'
import github from '../assets/images/github.svg'
import linkedin from '../assets/images/linkedin.svg'
import phone from '../assets/images/phone.svg';
import email from '../assets/images/email.svg';
import peruFlag from '../assets/images/peru-flag.png';

export default function Footer() {
  return (
    <footer id='contact'>
      <h3>GET IN TOUCH!</h3>
      <a href='mailto:fiorella_chilcon@outlook.com'>
        <img src={email} alt='email'/>
        fiorella_chilcon@outlook.com
      </a>
      <a href='tel:+51923059876'>
        <img src={phone} alt='phone'/>
        +51 923 059 876
        <img src={peruFlag} className='flag' alt='peru'/>
      </a>
      <div>
        <a href='https://github.com/FiorellaChilcon'>
          <img src={github} alt='github'/>
        </a>
        <a href='https://www.linkedin.com/in/fiorella-chilcon/'>
          <img src={linkedin} alt='linkedin'/>
        </a>
      </div>
      <span>© All rights reserved</span>
    </footer>
  )
}

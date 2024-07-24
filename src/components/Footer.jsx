import React from 'react'
import github from '../assets/icons/github.svg'
import linkedin from '../assets/icons/linkedin.svg'
import phone from '../assets/icons/phone.svg';
import email from '../assets/icons/email.svg';
// import peruFlag from '../assets/images/peru-flag.png';

export default function Footer() {
  return (
    <footer id='contact' className="w-full flex flex-col py-9 px-5 shadow-md items-center bg-slate-50">
      <h2 className="text-center text-base text-softBlack-1 font-medium mb-2">GET IN TOUCH!</h2>
      <a className="text-sm p-2 flex items-center no-underline" href="mailto:fiorella_chilcon@outlook.com" target="_blank" rel="noreferrer">
        <img className="h-4 mx-2" src={email} alt='email'/>
        fiorella_chilcon@outlook.com
      </a>
      <a className="text-sm p-2 flex items-center no-underline" href="tel:+51406868217">
        <img className="h-4 mx-2" src={phone} alt='phone'/>
        +61 4068 68217
        {/* <img src={peruFlag} className='rounded-sm border border-slate-50' alt='peru'/> */}
      </a>
      <div className="flex flex-row">
        <a className="size-11 flex" target="_blank" href="https://github.com/FiorellaChilcon" rel="noreferrer">
          <img className="h-6 hover:h-7 m-auto" src={github} alt='github'/>
        </a>
        <a className="size-11 flex" target="_blank" href="https://www.linkedin.com/in/fiorella-chilcon/" rel="noreferrer">
          <img className="h-6 hover:h-7 m-auto" src={linkedin} alt='linkedin'/>
        </a>
      </div>
    </footer>
  )
}

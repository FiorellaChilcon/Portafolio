import github from '../assets/icons/github.svg'
import linkedin from '../assets/icons/linkedin.svg'
import phone from '../assets/icons/phone.svg';
import email from '../assets/icons/email.svg';
import clsx from 'clsx';
import SlideInAnimation from '../components/SlideInAnimation';

function ContactLink({ imgSrc, imgAlt, link, className }) {
  return (
    <a className="size-11 flex" target="_blank" href={link} rel="noreferrer">
      <img className={clsx('h-6 hover:h-7 m-auto transition-all', className)} src={imgSrc} alt={imgAlt}/>
    </a>
  );
}

export default function ContactLinks() {
  return (
    <SlideInAnimation animationType="slide-left" styleClasses="flex flex-row">
      <ContactLink imgSrc={github} imgAlt="Github" link="https://github.com/FiorellaChilcon" />
      <ContactLink imgSrc={linkedin} imgAlt="Linkedin" link="https://www.linkedin.com/in/fiorella-chilcon" />
      <ContactLink imgSrc={phone} className="!h-5 hover:!h-6" imgAlt="Mobile number" link="tel:+61406868217" />
      <ContactLink imgSrc={email} className="!h-5 hover:!h-6" imgAlt="Email address" link="mailto:fiorella_chilcon@outlook.com" />
    </SlideInAnimation>
  );
}

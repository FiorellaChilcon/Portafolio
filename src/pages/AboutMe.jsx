import me from '../assets/images/me.svg';
import SlideInAnimation from '../components/SlideInAnimation';

export default function AboutMe() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-row gap-6 sm:gap-14 flex-wrap py-9" id="about">
      <img className="w-[272px] h-[293px]" src={me} alt="Fiorella"/>
      <SlideInAnimation animationType='fade-in-bottom'  styleClasses="w-full sm:w-1/3 sm:min-w-80 sm:p-0 p-8">
        <h2 className="text-2xl mb-9">Hola! I’m Fiorella 👋</h2>
        <p className="text-base text-justify">
          I’m a passionate front-end developer from Perú.
          My tech journey took off with a coding bootcamp, and now I’m exploring the vibrant tech scene in Australia while pursuing a Bachelor’s in IT majoring in Cybersecurity.
          <br/> <br/>
          With over 4 years of experience, I’m driven to push the boundaries of design and technology to deliver outstanding results.
          I thrive on collaborating with teams and embracing new challenges.
          <br/> <br/>
          Feel free to connect with me for opportunities or collaborations!
        </p>
      </SlideInAnimation>
    </div>
  )
}

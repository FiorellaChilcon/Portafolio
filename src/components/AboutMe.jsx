import me from '../assets/images/me.svg';

export default function AboutMe() {
  return (
    <div id="about" className="min-h-screen flex justify-center items-center flex-row gap-6 sm:gap-14 flex-wrap my-9">
      <img className="my-9 w-[272px] h-[293px]" src={me} alt="Fiorella"/>
      <div className="w-full sm:w-1/3 sm:min-w-80 sm:p-0 p-8">
        <h2 className="text-2xl mb-6">Hola! I’m Fiorella 👋</h2>
        <p className="text-base text-justify">
          I'm a front-end developer from Perú, and my journey in tech began with a bootcamp that ignited my passion for programming. Over the past 4 years, I've dedicated myself to creating dynamic and visually appealing user interfaces that showcase my creativity and problem-solving skills. Currently, I'm making my way from the vibrant culture of Peru to the bustling tech scene in Australia, pursuing a Bachelor's degree in IT and Cybersecurity to deepen my knowledge and expertise.
          <br/> <br/>
          Feel free to connect with me for opportunities or collaborations!
        </p>
      </div>
    </div>
  )
}

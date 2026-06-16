import { NavLink } from 'react-router-dom'


function Hero() {


    return(
        
<div className="mt-16 w-[95%] mx-auto">
  <section
    className="flex flex-col items-center justify-center gap-8 lg:gap-12
    min-h-[400px] mb-16 rounded-md
    shadow-[0_0_30px_rgba(0,0,0,0.25)]
    hover:shadow-[0_0_45px_rgba(56,189,248,0.35)]
    transition-all duration-300 p-6 md:p-10"
  >
    <h2
      className="font-bold text-5xl sm:text-5xl 
      text-white text-center
      hover:text-sky-300 transition-all duration-300"
    >
      Muhammad Kabeer
    </h2>

    <p
      className="text-white text-center
      max-w-3xl text-base md:text-lg lg:text-xl
      leading-relaxed hover:text-sky-300
      transition-all duration-300"
    >
      MERN Stack Developer focused on building modern,
      responsive, and high-performance web applications
      using frontend, backend, and database technologies.
    </p>

    <div
      className="flex flex-col  md:flex-row sm:flex-row
      gap-4 sm:gap-8 md:gap-16"
    >
      <button
        className="bg-sky-500 text-white font-bold
        px-6 py-3 rounded-md
        transition-all duration-500
        hover:translate-y-2"
      >
        Contact Me
      </button>

      <button
        className="bg-sky-500 text-white font-bold
        px-6 py-3 rounded-md
        transition-all duration-500
        hover:translate-y-2"
      >
        Portfolio
      </button>
    </div>
  </section>
</div>
        

    );
}
export default Hero;
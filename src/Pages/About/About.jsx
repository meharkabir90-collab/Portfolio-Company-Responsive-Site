import { NavLink } from "react-router-dom";



function About() {
    return(
<section
  className="lg:mt-16 w-[95%] mx-auto mb-32 rounded-md
  shadow-[0_0_10px_rgba(0,0,0,0.25)]
  hover:shadow-[0_0_45px_rgba(56,189,248,0.3)]
  transition-all duration-300"
>
  <div
    className="flex flex-col justify-center items-center
    text-white font-bold gap-4 px-4"
  >
    <h1
      className="mt-12 md:mt-16
      text-4xl md:text-5xl lg:text-6xl
      hover:text-sky-300 transition-all duration-300"
    >
      About Me
    </h1>

    <h2
      className="font-bold leading-normal text-center
      text-2xl md:text-3xl lg:text-4xl
      max-w-4xl mt-6 md:mt-8
      transition-all duration-300
      hover:text-sky-300 hover:scale-105"
      style={{ fontFamily: "Times New Roman" }}
    >
      MERN Stack Developer | React.js Enthusiast |
      WordPress & SEO Specialist
    </h2>
  </div>

  <div
    className="mt-12 md:mt-16 text-white
    flex flex-col items-center gap-6 px-4"
  >
    <p
      className="text-base md:text-lg lg:text-xl
      max-w-4xl text-center leading-relaxed
      hover:text-yellow-500 transition-all duration-300"
    >
      I am an IT undergraduate with an academic background
      in Computer Science and ICS. I focus on MERN Stack
      Development and modern web technologies.
    </p>

    <p
      className="text-base md:text-lg lg:text-xl
      max-w-4xl text-center leading-relaxed
      hover:text-yellow-500 transition-all duration-300"
    >
      I have practical skills in React.js, Node.js,
      Express.js, MongoDB and Devops fundamentals including
      Git/GitHub, Vercel, Docker and CI/CD Automation,
       WordPress development, responsive web design, and SEO-optimized websites.
      I enjoy building clean, scalable, and user-friendly
      web applications.
    </p>

    <p
      className="text-base md:text-lg lg:text-xl
      max-w-4xl text-center leading-relaxed
      hover:text-yellow-500 transition-all duration-300"
    >
      I am passionate about creating modern, responsive,
      and user-friendly web applications. With experience
      in HTML, CSS, JavaScript, React, WordPress, and the
      MERN stack, I enjoy turning ideas into practical
      digital solutions.
    </p>

    <p
      className="text-base md:text-lg lg:text-xl
      max-w-4xl text-center leading-relaxed mb-12 md:mb-16
      hover:text-yellow-500 transition-all duration-300"
    >
      As a MERN Stack developer, I am dedicated to building
      scalable and efficient web applications. I have
      experience developing responsive front-end interfaces
      and integrating back-end services to create complete
      solutions.
    </p>
  </div>
</section>



    );
}

    export default About;

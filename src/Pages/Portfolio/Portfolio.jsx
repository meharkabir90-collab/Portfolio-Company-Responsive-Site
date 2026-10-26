import Ecommerce from '../../assets/ecom mern.webp'
import blogReact from '../../assets/react blog.webp'
import weatherReact from '../../assets/weather react.webp'
import EcommerceStore from '../../assets/ecommerce.png'
import HRMS from '../../assets/HRMS.png'


function Portfolio() {
    return(
       <div
  className="lg:mt-16 mb-32 w-[95%] mx-auto rounded-md
  shadow-[0_0_10px_rgba(0,0,0,0.25)]
  hover:shadow-[0_0_45px_rgba(56,189,248,0.3)]
  transition-all duration-300"
>
  {/* Heading */}
  <section className="flex flex-col items-center px-4 py-12">
    <h1
      className="text-4xl md:text-5xl lg:text-6xl
      font-bold text-white
      hover:text-sky-300 transition-all duration-300"
    >
      Portfolio
    </h1>

    <p
      className="mt-8 max-w-4xl text-center
      text-base md:text-lg lg:text-xl
      text-white leading-relaxed
      hover:text-sky-300 transition-all duration-300 hover:scale-110"
      style={{ fontFamily: "Times New Roman" }}
    >
      My portfolio includes React.js applications, a full-stack
      MERN eCommerce platform with frontend, backend, and database
      integration, WordPress business websites, blog platforms,
      and SEO-optimized eCommerce solutions.
    </p>
  </section>

  {/* Projects Grid */}
  <section
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
    gap-8 p-4 lg:p-8"
  >

    
     {/* Project 1 */}
    <div
      className=" rounded-xl p-6
      flex flex-col items-center text-center
      shadow-lg hover:shadow-sky-500/30
      transition-all duration-300"
    >
      <h2 className="text-2xl font-bold text-sky-300">
        Full-Stack Ecommerce Platform
      </h2>

      <img
        className="w-full max-w-[100px] h-[120px] mt-4 rounded-md"
        src={EcommerceStore}
        alt="MERN Ecommerce"
      />

      <p
        className="mt-4 text-white leading-relaxed"
        style={{ fontFamily: "Times New Roman" }}
      >
        A Full-stack e-commerce platform featuring a responsive frontend design, backend API's
        user authentication and authorization, an admin panel, and database integration for a complete
        complete online shopping experience.
      </p>

      <a
        href="https://github.com/meharkabir90-collab/Ecommerce-Full-Stack-Store-Architecture"
        target="_blank"
        rel="noreferrer"
        className="mt-4 bg-sky-500 text-white
        px-4 py-2 rounded-lg font-semibold
        hover:translate-y-1 transition-all duration-300"
      >
        GitHub
      </a>
      <a
        href="https://ecommerce-system-architecture.vercel.app/"
        className='text-white mt-6 bg-sky-500 rounded-lg 
        px-4 py-2'
      >
        View Live Project
      </a>
    </div>

     {/* Project 2 */}
    <div
      className=" rounded-xl p-6
      flex flex-col items-center text-center
      shadow-lg hover:shadow-sky-500/30
      transition-all duration-300"
    >
      <h2 className="text-2xl font-bold text-sky-300">
        Full-Stack Human Resource Management System (HRMS) Platform
      </h2>

      <img
        className="w-full max-w-[100px] h-[120px] mt-4 rounded-md"
        src={HRMS}
        alt="HRMS"
      />

      <p
        className="mt-4 text-white leading-relaxed"
        style={{ fontFamily: "Times New Roman" }}
      >
        A Full-stack Human Resource Management System (HRMS) platform featuring a responsive frontend design, backend API's
        user authentication and authorization, an admin panel, and database integration for a complete
        complete human resource management experience.
      </p>

      <a
        href="https://github.com/meharkabir90-collab/hr-system"
        target="_blank"
        rel="noreferrer"
        className="mt-4 bg-sky-500 text-white
        px-4 py-2 rounded-lg font-semibold
        hover:translate-y-1 transition-all duration-300"
      >
        GitHub
      </a>
      <a
        href="https://hr-system-beta-ochre.vercel.app/"
        className='text-white mt-6 bg-sky-500 rounded-lg 
        px-4 py-2'
      >
        View Live Project
      </a>
    </div>
    {/* Project 5 */}
    <div
      className=" rounded-xl p-6
      flex flex-col items-center text-center
      shadow-lg hover:shadow-sky-500/30
      transition-all duration-300"
    >
      <h2 className="text-2xl font-bold text-sky-300">
        React Development
      </h2>

      <img
        className="w-full max-w-[100px] h-[120px] mt-4 rounded-md"
        src={blogReact}
        alt="React Blog"
      />

      <p
        className="mt-4 text-white leading-relaxed"
        style={{ fontFamily: "Times New Roman" }}
      >
        Frontend applications developed using React.js
        with responsive UI and API integration.
      </p>

      <a
        href="https://github.com/meharkabir90-collab/Custom-Blogging-App"
        target="_blank"
        rel="noreferrer"
        className="mt-4 bg-sky-500 text-white
        px-4 py-2 rounded-lg font-semibold
        hover:translate-y-1 transition-all duration-300"
      >
        GitHub
      </a>
    </div>

    {/* Project 6 */}
    <div
      className=" rounded-xl p-6
      flex flex-col items-center text-center
      shadow-lg hover:shadow-sky-500/30
      transition-all duration-300"
    >
      <h2 className="text-2xl font-bold text-sky-300">
        Weather App
      </h2>

      <img
        className="w-full max-w-[100px] h-[120px] mt-4 rounded-md"
        src={weatherReact}
        alt="Weather App"
      />

      <p
        className="mt-4 text-white leading-relaxed"
        style={{ fontFamily: "Times New Roman" }}
      >
        Weather forecasting application with API
        integration and responsive interface.
      </p>

      <a
        href="https://github.com/meharkabir90-collab/Weather-App"
        target="_blank"
        rel="noreferrer"
        className="mt-4 bg-sky-500 text-white
        px-4 py-2 rounded-lg font-semibold
        hover:translate-y-1 transition-all duration-300"
      >
        GitHub
      </a>
    </div>

    {/* Project 3 */}
    <div
      className=" rounded-xl p-6
      flex flex-col items-center text-center
      shadow-lg hover:shadow-sky-500/30
      transition-all duration-300"
    >
      <h2 className="text-2xl font-bold text-sky-300">
        MERN Stack Development
      </h2>

      <img
        className="w-full max-w-[100px] h-[120px] mt-4 rounded-md"
        src={Ecommerce}
        alt="MERN Ecommerce"
      />

      <p
        className="mt-4 text-white leading-relaxed"
        style={{ fontFamily: "Times New Roman" }}
      >
        Full-stack web application with backend APIs,
        authentication, and MongoDB integration.
      </p>

      <a
        href="https://github.com/meharkabir90-collab/coin-bounce"
        target="_blank"
        rel="noreferrer"
        className="mt-4 bg-sky-500 text-white
        px-4 py-2 rounded-lg font-semibold
        hover:translate-y-1 transition-all duration-300"
      >
        GitHub
      </a>
    </div>

  </section>
</div>




    );
}

export default Portfolio;
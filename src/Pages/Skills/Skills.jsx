


function Skills() {
    return(
<div
  className="mt-16 mb-32 w-[95%] mx-auto rounded-md
  shadow-[0_0_10px_rgba(0,0,0,0.25)]
  hover:shadow-[0_0_45px_rgba(56,189,248,0.3)]
  transition-all duration-300"
>
  {/* Heading */}
  <section className="flex flex-col justify-center items-center gap-8 px-4">
    <h1
      className="mt-12 md:mt-16 font-bold
      text-4xl md:text-5xl lg:text-6xl
      text-white transition-all duration-300
      hover:text-sky-300"
    >
      My Skillset
    </h1>

    <h2
      className="max-w-4xl text-center text-white
      text-base md:text-lg lg:text-xl
      leading-relaxed transition-all duration-300
      hover:text-sky-300"
      style={{ fontFamily: "Times New Roman" }}
    >
      My technical expertise includes MERN Stack development,
      React.js frontend applications, backend API development,
      MongoDB database management, WordPress website development,
      and SEO-optimized web solutions.
    </h2>
  </section>

  {/* Frontend */}
  <section
    className="grid grid-cols-1 lg:grid-cols-[220px_1fr]
    mt-12 mx-4 md:mx-8 p-4 md:p-6 lg:p-8
    rounded-xl bg-red-500 shadow-lg
    gap-6 lg:gap-16"
  >
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-white bg-red-500">
        FrontEnd
      </h2>
    </div>

    <div className="flex flex-wrap gap-4 md:gap-6 text-white bg-red-500">
      <span className="px-3 py-1 rounded-2xl bg-white text-black font-bold">
        HTML
      </span>

      <span className="px-3 py-1 rounded-2xl bg-white text-black font-bold">
        CSS
      </span>

      <span className="px-3 py-1 rounded-2xl bg-white text-black font-bold">
        JavaScript
      </span>

      <span className="px-3 py-1 rounded-2xl bg-white text-black font-bold">
        Tailwind CSS
      </span>

      <span className="px-3 py-1 rounded-2xl bg-white text-black font-bold">
        React.js
      </span>
    </div>
  </section>

  {/* Backend */}
  <section
    className="grid grid-cols-1 lg:grid-cols-[220px_1fr]
    mt-8 mx-4 md:mx-8 p-4 md:p-6 lg:p-8
    rounded-xl bg-red-500 shadow-lg
    gap-6 lg:gap-16"
  >
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-white bg-red-500">
        BackEnd
      </h2>
    </div>

    <div className="flex flex-wrap gap-4 md:gap-6 bg-red-500">
      <span className="px-3 py-1 rounded-2xl bg-white text-black font-bold">
        Node.js
      </span>

      <span className="px-3 py-1 rounded-2xl bg-white text-black font-bold">
        Express.js
      </span>

      <span className="px-3 py-1 rounded-2xl bg-white text-black font-bold">
        REST API
      </span>
    </div>
  </section>
</div>
        



    );
}

export default Skills;
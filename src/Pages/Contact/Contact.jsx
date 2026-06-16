import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'



function Contact() {

    return(
        <div className="mt-16 lg:h-[800px] h-[700px] gap-16 px-4">
            <section className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white mt-16
                 transition-all duration-300
                hover:text-sky-300">Contact me</h1>
                <p className="text-white max-w-4xl px-4 text-base md:text-lg lg:text-xl text-center
                 transition-all duration-300 leading-relaxed mt-8
                 hover:text-sky-300   hover:scale-110"
               style={{ fontFamily: ' Times New Roman' }}>
                    I am open to internship opportunities, freelance work, and collaboration on modern
                    web development projects. Feel free to reach out for professional
                    inquiries or project discussions. You can contact me through the links below.
                </p>
            </section>
            <section className="mt-16 flex flex-col justify-center items-center
             gap-10 md:gap-16">
                <div className='text-center'>
                    <h2 className='text-white text-2xl lg:text-3xl font-semibold mb-4'>Email</h2>
                    <div className="flex flex-row justify-center items-center gap-3">
                        <FaEnvelope className='text-white mt-4 relative bottom-[7px]' /> {"   "}
                       <a  className='text-white transition-all duration-300
                       hover:text-sky-300 text-xl '
                         href="mailto:meharkabir90@gmail.com">
                             meharkabir90@gmail.com
                       </a>

                    </div>
                    
                </div>
                <div className='text-center'>
                    <h2 className='text-white text-2xl lg:text-3xl font-semibold mb-4"'>Github</h2>
                     <div className="flex flex-row justify-center items-center gap-3">
                        <FaGithub className='text-white  mt-4 relative bottom-[7px]' /> {"   "}
                       <a  className='text-white transition-all duration-300
                       hover:text-sky-300 text-xl'
                         href="https://github.com/meharkabir90-collab/coin-bounce"
                            target="_blank"
                             rel="noreferrer">
                             Github
                       </a>

                    </div>
                </div>
                <div className='text-center'>
                    <h2 className='text-white text-2xl lg:text-3xl font-semibold mb-4'>Linkedin</h2>
                     <div className="flex flex-row justify-center items-center gap-3">
                        <FaLinkedin className='text-white mt-4 relative bottom-[7px]' /> {"   "}
                       <a  className='text-white transition-all duration-300
                       hover:text-sky-300 text-xl'
                            href="https://www.linkedin.com/in/muhammad-kabeer-5432a328a/"
                            target="_blank"
                             rel="noreferrer">
                             Linkedin
                       </a>

                    </div>
                </div>
            </section>
        </div>



    );
}

export default Contact;
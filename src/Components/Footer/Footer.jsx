import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter,  FaInstagram,
  FaFacebook, } from "react-icons/fa";


function Footer() {
    return(
        <div className="flex flex-col md:flex-row
             bg-black w-full
             items-center justify-center
             gap-2 md:gap-8
             py-4 text-sm md:text-base">
            
            <section className="bg-black text-white text-center">
                Copyright © 2026 Portfolio App
            </section>
            <section className="flex flex-row bg-black gap-4 md:gap-6 mt-4 lg:ml-32">
                <a href="https://github.com/meharkabir90-collab/" 
                   className="text-white text-2xl bg-black" >
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/muhammad-kabeer-5432a328a/" 
                   className="text-[#0A66C3] text-2xl   ">
                    <FaLinkedin />
                </a>
                <a  className="text-[#E4405F] text-2xl ">
                    <FaInstagram />
                </a>
                <a  className="text-[#1877F2] text-2xl ">
                    <FaFacebook />
                </a>
            </section>
        </div>


    )
}

export default Footer;
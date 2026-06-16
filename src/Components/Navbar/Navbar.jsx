import { NavLink } from 'react-router-dom';
import image from '../../assets/KA.png'

function Navbar() {

    return(
        <div className="flex flex-col md:flex-row justify-center
             items-center w-full py-6 bg-black
             gap-6 md:gap-20 lg:gap-80">
            <section className=" ml-16 lg:ml-16">
                <img src={image} alt="logo" className="w-14 md:w-16 lg:w-20 h-auto"/>

            </section>
            <section className="flex flex-wrap justify-center
              text-white text-lg md:text-xl lg:text-2xl
              gap-8  lg:gap-10 bg-black">
                <NavLink className="bg-black transition-all duration-300
                 hover:text-sky-300" to="/hero">Hero</NavLink>
                <NavLink className="bg-black transition-all duration-300 hover:text-sky-300" to="/about">About me</NavLink>
                <NavLink className="bg-black transition-all duration-300 hover:text-sky-300"  to="/skill">Skills</NavLink>
                <NavLink className="bg-black transition-all duration-300 hover:text-sky-300" to="/portfolio">Portfolio</NavLink>
                <NavLink className="bg-black transition-all duration-300 hover:text-sky-300" to="/contact">Contact</NavLink>

            </section>
                
            
        </div>  
    )  
}            
export default Navbar;
import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Hero from './Pages/Hero/Hero'
import About from './Pages/About/About'
import Skills from './Pages/Skills/Skills'
import Portfolio from './Pages/Portfolio/Portfolio'
import Contact from './Pages/Contact/Contact'
import Error from './Pages/Error/Error'

function App() {
  

  return (
    <>
    <Navbar />

    <Routes>
      <Route
          path= '/'
          element={
          <Hero />
        }
      
      />
      <Route
         path= '/about'
         element={
              <About />
         }

      
      />
      <Route
         path= '/skill'
         element={
              <Skills />
         }
      />

       <Route
         path= '/portfolio'
         element={
              <Portfolio />
         }
        />

         <Route
         path= '/contact'
         element={
              <Contact />
         }
        />

         <Route
         path= '*'
         element={
              <Error />
         }
        />

    </Routes>

      



    <Footer />
    </>
  )
}

export default App;

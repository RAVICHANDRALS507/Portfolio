import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Education from './components/Education/Education'
import Certification from './components/Certification/Certification'
// import Links from './components/Links/Links'


const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      {/* <Links></Links> */}
      <Education></Education>
      <Certification></Certification>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App

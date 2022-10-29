import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Courses from './components/Courses';
import Feedback from './components/Feedback';
import About from './components/About';
import Footer from './components/Footer';



const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Courses/>
      <Feedback/>
      <About/>
      <Footer/>
    </>
  )
}

export default App
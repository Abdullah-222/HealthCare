import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Experience from './components/Experience'

const App = () => {
  return (
    <>
    <div className="app w-screen overflow-hidden">
    <Navbar/>
    <Hero/>
    <Card/>
    <Experience/>
    <Testimonials/>
    <Footer/>
    </div>
    </>
  )
}

export default App
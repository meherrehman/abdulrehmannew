import React from 'react'
import About from '../Components/About';
import Footer from '../Components/Footer';
import MainArea from '../Components/MainArea';
import Navbar from "../Components/Navbar";
import Project from '../Components/Project';
import Skills from '../Components/Skills';

const Homepage = () => {
  return (
    <>
        <Navbar />
        <MainArea />
        <About />
        <Skills />
        <Project />
        <Footer />
    </>
  )
}

export default Homepage;
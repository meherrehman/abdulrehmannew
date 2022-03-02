import React from 'react'
import Footer from '../Components/Footer';
import Navbar from "../Components/Navbar";
import ProjectComponent from '../Components/ProjectComponent';
import videos_data from '../videos_data';

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="container project-container">
        <div className="row">
          <div className="col">
            <h1 className='text-center my-3'>My Projects !</h1>
          </div>
        </div>
        <div className="row">
            {videos_data.map((currVideo)=>(
                <ProjectComponent title={currVideo.title} vid_src={currVideo.vid_src} description={currVideo.description}/>
            ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Projects;
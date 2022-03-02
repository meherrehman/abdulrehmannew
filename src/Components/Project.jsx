import React from 'react'
import { NavLink } from 'react-router-dom';
import "../index.css";
import ProjectComponent from './ProjectComponent';

const Project = () => {
  return (
    <>
        <div className="container project-container">
        <div className="row">
          <div className="col">
            <h1 className='text-center my-3'>My Projects !</h1>
          </div>
        </div>
        <ProjectComponent title="Netflix Clone" vid_src="/videos/netflix_clone.mp4" description="This netflix clone is created using react Js and TMDB API IS USED"/>
        <div className="row my-5">
          <div className="col text-center">
            <NavLink to="/Projects" className="more_project_btn">See More Projects</NavLink>
          </div>
        </div>
        </div>
    </>
  )
}

export default Project;
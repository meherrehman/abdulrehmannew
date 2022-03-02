import React, { useState } from 'react'
import "../index.css";

const ProjectComponent = ({title,vid_src,description}) => {

  const[likeReact,setlikeReact] = useState("none");


  const UpdateReact = () =>{
    setlikeReact("block");
  }

  const UpdatedReact = () =>{
    setlikeReact("none");
  }

  return (
    <>
        <div className="col my-2">
        <div class="card" style={{width: "18rem;"}}>
        <video src={vid_src} controls></video>
        <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text"><b>Description :</b> {description}</p>
            <button type="button" class=" position-relative" style={{border:"none",backgroundColor:"transparent",outline:"none"}}>
            <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/38/000000/external-like-feedback-those-icons-lineal-color-those-icons.png" style={{cursor:"pointer"}} className="like-react" onClick={UpdateReact} onDoubleClick={UpdatedReact}/>
          <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle" style={{display:likeReact}}>
              <span class="visually-hidden">New alerts</span>
            </span>
          </button>
        </div>
        </div>
        </div>
    </>
  )
}

export default ProjectComponent;
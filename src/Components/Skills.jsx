import React from 'react'
import "../index.css"

const Skills = () => {
  return (
    <>
      <div className="container Skills-container ">
        <div className="row">
          <div className="col">
            <h1 className='text-center my-3'>My Skills !</h1>
          </div>
        </div>
        <div className="row mt-5 align-items-center">
          <div className="col-lg-4 col-12 text-center">
          <img src="/images/skills_side.gif" alt="SkillsSide" className='skills-side-img'/>
          </div>
          <div className="col-lg-8 col-12 text-center">
            <div className="skills-box">
                <h4 style={{fontWeight:"bolder",fontSize:"2em"}}>Frontend</h4>
                <p>Html5 , Css3 , JavaScript , jQuery , Bootstrap 4/5 , ReactJs , NextJs , Redux</p>
            </div>
            <div className="skills-box">
                <h4 style={{fontWeight:"bolder",fontSize:"2em"}}>Backend</h4>
                <p>NodeJs , ExpressJs</p>
            </div>
            <div className="skills-box">
                <h4 style={{fontWeight:"bolder",fontSize:"2em"}}>DataBase</h4>
                <p>MongoDB</p>
            </div>
            <div className="skills-box">
                <h4 style={{fontWeight:"bolder",fontSize:"2em"}}>Designing</h4>
                <p>Figma , AdobeXd</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
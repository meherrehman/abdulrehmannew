import React from 'react'
import "../index.css"

const About = () => {
  return (
    <>
      <div className="container about-container ">
        <div className="row">
          <div className="col">
            <h1 className='text-center my-3'>About Me !</h1>
          </div>
        </div>
        <div className="row mt-5 align-items-center about-container-content">
          <div className="col-lg-8 col-12">
          <p><img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-code-coding-kiranshastry-lineal-color-kiranshastry.png" className='about-img'/> Mern Stack Developer</p>
          <p><img src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-book-office-stationery-justicon-lineal-color-justicon.png" className='about-img'/> Studid BSIT From National Textile University Faisalabad , Pakistan</p>
          <p><img src="https://img.icons8.com/external-parzival-1997-flat-parzival-1997/64/000000/external-work-worklife-balance-and-stress-management-parzival-1997-flat-parzival-1997.png" className='about-img'/> FreeLancer At Upwork and Fiverr</p>
          <p><img src="https://img.icons8.com/office/64/000000/worldwide-location--v1.png" className='about-img'/> I am from Faisalabad , Pakistan</p>
          </div>
          <div className="col-lg-4 col-12 text-center">
          <a href="/images/resume.png" download>Download My Resume <img src="/images/download.gif" alt="Download_GIF" width="50px"/></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
import React from 'react'
import "../index.css";

const Footer = () => {

  let year = new Date();
  year = year.getFullYear();

  return (
  <>
    <div className="container-fluid footer-container">
      <div className="row">
        <div className="col text-center">
        <a href="https://github.com/meherrehman" target="_blank"><img src="https://img.icons8.com/fluency/48/000000/github.png"/></a>
        <a href="https://www.linkedin.com/in/ar-builds-437019220/" target="_blank"><img src="https://img.icons8.com/glyph-neue/48/000000/linkedin.png"/></a>
        <a href="#" target="_blank"><img src="https://img.icons8.com/stickers/48/000000/instagram-new--v2.png"/></a>
        <a href="https://twitter.com/arbuilds786" target="_blank"><img src="https://img.icons8.com/color/48/000000/twitter--v1.png"/></a>
        </div>
      </div>
      <div className="row">
        <div className="col text-center my-3">
          <p> <img src="/images/logo.png" alt="Logo" width="80px" style={{borderRadius:"50%",margin:"0px 5px"}} className="footer-img"/> Design And Developed By AR Builds || {year}</p>
        </div>
      </div>
    </div>
  </>
  )
}

export default Footer;
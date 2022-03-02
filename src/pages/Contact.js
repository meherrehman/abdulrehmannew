import React, { useState } from 'react'
import Footer from '../Components/Footer';
import Navbar from "../Components/Navbar";
import Alert from '@mui/material/Alert';
import "../index.css";


const Contact = () => {

  const[msgAlert,setmsgAlert] = useState("none");

  const sndMsg = () =>{
    setmsgAlert("block")
  }


  return (
    <>
      <Navbar />
      <div className="container">
      <div className='whatsApp-div'><a href="https://wa.me/+923076008905/" target="_blank"><img src="/images/whatsapp.gif" alt="WhatsApp" style={{width:"50px"}}/></a></div>
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <img src="/images/contact.png" alt="Contact Me" className='img-fluid'/>
          </div>
          <div className="col-lg-6 col-12">
          <form>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput1" placeholder="name" style={{borderRadius:"30px"}} required/>
            <label for="floatingInput1">Enter Name</label>
          </div>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput2" placeholder="email" style={{borderRadius:"30px"}} required/>
            <label for="floatingInput2">Enter Email</label>
          </div>
          <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px",borderRadius:"30px"}} required></textarea>
            <label for="floatingTextarea2">Plz enter your message ..</label>
          </div>
          <button className='btn btn-warning my-3' type='submit' onClick={sndMsg}>Send <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/32/000000/external-send-dating-app-flaticons-lineal-color-flat-icons.png"/></button>
          </form>
          <Alert severity="success" style={{display:msgAlert}}>Message Sent Successfully <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/28/000000/external-emoji-emoji-justicon-lineal-color-justicon-9.png"/></Alert>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
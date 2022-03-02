import React from 'react'
import "../index.css";

const MainArea = () => {
  return (
    <>
        <div className="container main-area-container">
            <div className="row">
                <div className="col">
                <img src="/images/bg_2.gif" alt="bg_GIF" width="100%" height="470px"/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img src="/images/user1.jpg" alt="myImage" className='myImage'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default MainArea;
import React from 'react'
import { NavLink } from 'react-router-dom';
import "../index.css";
import Tooltip from '@mui/material/Tooltip';

const Navbar = () => {
  return (
    <>
        <div className="container-fluid navbar-container position-sticky top-0">
            <div className="row my-2">
                <div className="col text-center ">
                    <NavLink to="/" className="navbar-items">
                    <Tooltip disableFocusListener disableTouchListener title="Home">
                    <img src="https://img.icons8.com/fluency/48/000000/home.png"/>
                    </Tooltip>
                    </NavLink>
                    <NavLink to="/Projects" className="navbar-items">
                    <Tooltip disableFocusListener disableTouchListener title="Projects">
                    <img src="https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/48/000000/external-double-content-bottom-horizontal-bars-with-split-screen-grid-tritone-tal-revivo.png"/>
                    </Tooltip>
                    </NavLink>
                    <NavLink to="/Contact" className="navbar-items">
                    <Tooltip disableFocusListener disableTouchListener title="Contact">
                    <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/48/000000/external-contact-contact-us-flaticons-lineal-color-flat-icons.png"/>
                    </Tooltip>
                    </NavLink>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar;
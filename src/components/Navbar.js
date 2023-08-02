import React from 'react'
import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'
import logo from "../images/logo.png"
import "../App.css"

const Navbar = () => {
    const isMobileView = () => {
        return window.innerWidth <= 500;
    };
    return (
        <nav className="navbar navbar-expand-lg shadow_general">
            {isMobileView() ? (
                <div className="container-fluid">
                    <div className='mobile-options'>
                        <div className="pos-f-t">
                            <div className="brand">
                                <div className=''>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" >
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                </div>
                                <div className='brand'>
                                    <div className=''>
                                        <img src={logo} id="logo_image" />
                                    </div>
                                    <NavLink className="brand_name_home" to="/"><b id="brand_name1">art.of.flavours</b></NavLink>
                                </div>
                                <div className="">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link active" aria-current="page" to="/signup"><div className="button_signup">Signup</div></NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="collapse" id="navbarToggleExternalContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" aria-current="page" to="/"><div className="button_home">Home</div></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" aria-current="page" to="/about"><div className="button_about">About</div></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" aria-current="page" to="/signin"><div className="button_sigin">Login</div></NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container-fluid">
                    <div className='brand'>
                        <div className=''>
                            <img src={logo} id="logo_image" />
                        </div>
                        <NavLink className="brand_name_home" to="/"><b id="brand_name1">art.of.flavours</b></NavLink>
                    </div>
                    <div className="collapse navbar-collapse" >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item" style={{ paddingLeft: 40 }}>
                                <NavLink className="nav-link active" aria-current="page" to="/"><div className="button_home">Home</div></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/about"><div className="button_about">About</div></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/signin"><div className="button_sigin">Login</div></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/signup"><div className="button_signup">Signup</div></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </nav >
    )
}

export default Navbar
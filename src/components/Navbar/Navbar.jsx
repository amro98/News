import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="w-75 mx-auto my-2 ">
            <nav className='navbar navbar-expand-md navbar-dark bg-dark  rounded ' >


            <div className="container-fluid ">
          
          <button
            className="navbar-toggler my-2 mx-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav  d-flex justify-content-around   w-100">
              <li className="nav-item px-2 py-1">
                  <NavLink to='/'>General</NavLink>
                </li>
                <li className="nav-item px-2 py-1">
                  <NavLink to='/business'>Business</NavLink>
                </li>
                <li className="nav-item px-2 py-1">
                  <NavLink to='/entertainment'>Entertainment</NavLink>
                </li>
                
                <li className="nav-item px-2 py-1">
                  <NavLink to='/health'>Health</NavLink>
                </li>
                <li className="nav-item px-2 py-1">
                  <NavLink to='/science'>Science</NavLink>
                </li>
                <li className="nav-item px-2 py-1">
                  <NavLink to='/sports'>Sports</NavLink>
                </li>
                <li className="nav-item px-2 py-1">
                  <NavLink to='/technology'>Technology</NavLink>
                </li>
              </ul>
            
            
          </div>
        </div>




                {/* <ul className="rounded list-unstyled d-flex justify-content-around bg-dark text-white py-2">
                    <li>
                      <NavLink to='/business'>business</NavLink>
                    </li>
                    <li><NavLink to='/entertainment'>entertainment</NavLink></li>
                    <li><NavLink to='/'>general</NavLink></li>
                    <li><NavLink to='/health'>health</NavLink></li>
                    <li><NavLink to='/science'>science</NavLink></li>
                    <li><NavLink to='/sports'>sports</NavLink></li>
                    <li><NavLink to='/technology'>technology</NavLink></li>
                </ul> */}
            </nav>
        </div>
  )
}

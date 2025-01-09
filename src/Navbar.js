import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
    return (
      <header className="header">
        <nav className="nav container">
          
   
          <div
            className={"nav__menu"}
            id="nav-menu"
          >
            <ul className="nav__list">
            <li className="nav__item">
                <a href="#about" className="nav__link">
                About
              </a>
              </li>
            <li className="nav__item">
                <a href="#projects" className="nav__link">
                Projects
              </a>
              </li>
              <li className="nav__item">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav__link">
                Resume
              </a>
              </li>
              <li className="nav__item">
                 <a href="https://github.com/deogadepallavi" target="_blank" rel="noopener noreferrer" className="nav__link">
                 Github
              </a>
              </li>
              <li className="nav__item">
                {/* <NavLink
                  to="/favorite"
                  className="nav__link"
                >
                  LinkedIn
                </NavLink> */}
                <a href="https://www.linkedin.com/in/pallavideogade/" target="_blank" rel="noopener noreferrer" className="nav__link">
                 LinkedIn
              </a>
              </li>
            
            </ul>
          </div>
   
          
        </nav>
      </header>
    );
   };
   
   export default Navbar;
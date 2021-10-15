import React from "react";
import {Link} from 'react-router-dom';

function Nav(props)  {
  


    return (
      <React.Fragment>
        <header className="header-section">
          <div className="container">
            <div className="header-wrapper">
              <div className="logo">
                <Link to="/">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/images/logo/logo.png"}
                    alt="logo"
                  />
                </Link>
              </div>
              <ul className="menu">
                <li>
                  <Link to="/" className="active">
                    Home
                  </Link>
                </li>
                <li>
                  
                  <Link to="/movies">
                    Movies
                  </Link>
                
                </li>
                <li>
                  
                  <Link to="/cinemas">
                    Cinemas
                  </Link>
                
                </li>

                <li>
                  <a href="contact.html">contact</a>
                </li>
                <li className="header-button pr-0">
                  <a href="sign-up.html">join us</a>
                </li>
              </ul>
              <div className="header-bar d-lg-none">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }

export default Nav;

import React, { useState } from 'react';
import './Header.css';
const Header = () => {
const [active, setActive] = useState(false)


const toggleBurger = () => {
   setActive(!active)
}


  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrap">
            <img src="https://logodownload.org/wp-content/uploads/2014/04/mercedes-benz-logo-1-1.png" alt="" className="logo" />
            <div className={`header__menu ${active ? 'active' : ''}`}>
              <a href="">Lorem</a>  
              <a href="">Lorem</a>
              <a href="">Lorem</a>
            </div>

            <div onClick={toggleBurger} className={`burger ${active ? 'active' : ''}`}>
               <span></span>
               <span></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

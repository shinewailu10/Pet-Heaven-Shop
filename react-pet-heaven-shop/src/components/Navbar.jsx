import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
    // if(window.matchMedia("max-width:660px").matches){
    //   setButton(false);
    // }else{
    //   setButton(true);
    // }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);



  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src='/image/logo.png' alt='logo'></img>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Pets'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Pets
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Releasing'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Releasing
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Adoption'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Adoption
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/About'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to='/Register'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Register
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' ><Link to='/Register' className='reg'>REGISTER</Link></Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
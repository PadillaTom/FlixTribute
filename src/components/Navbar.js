import React, { useEffect, useState } from 'react';

function Navbar() {
  //State:
  const [show, handleShow] = useState(false);

  // Scroll to Fixed:
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);
  return (
    <React.Fragment>
      <nav className={`navbar-container ${show && 'nav-fixed'} `}>
        <div className='navbar-logo'>
          <h1>
            <a href='/'>
              <span>Flix </span>Tribute
            </a>
          </h1>
        </div>
        <div className='nav-avatar'>
          <img
            src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png'
            alt='Nav Avatar'
          />
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;

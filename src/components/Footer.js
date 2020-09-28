import React from 'react';
import {
  FaFacebook,
  FaAppStoreIos,
  FaGooglePlay,
  FaTwitter,
  FaInstagram,
  FaRegCopyright,
} from 'react-icons/fa';

function Footer() {
  return (
    <React.Fragment>
      <footer className='footer-container'>
        <ul className='social-icons-container'>
          <li>
            <a href='/'>
              <FaGooglePlay className='social-icon-footer'></FaGooglePlay>
            </a>
          </li>
          <li>
            <a href='/'>
              <FaAppStoreIos className='social-icon-footer'></FaAppStoreIos>
            </a>
          </li>
          <li>
            <a href='/'>
              <FaTwitter className='social-icon-footer'></FaTwitter>
            </a>
          </li>
          <li>
            <a href='/'>
              <FaFacebook className='social-icon-footer'></FaFacebook>
            </a>
          </li>
          <li>
            <a href='/'>
              <FaInstagram className='social-icon-footer'></FaInstagram>
            </a>
          </li>
        </ul>
        <div className='copy-container'>
          <p>
            <FaRegCopyright className='footer-copy'></FaRegCopyright>
            all rights reserved
            <span>Flix tribute</span>
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;

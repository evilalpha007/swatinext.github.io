import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin,faYoutube, faInstagram,faFacebook,faTwitter } from '@fortawesome/free-brands-svg-icons';

const SideNav = ()=>{
    return (
<>
      
      <div className='card flex flex-col justify-end w-32 h-screen px-4 py-8 bg-white border-r fixed  left-0 bottom-0 z-0 

'>
        <ul className='grid gap-2 grid-cols-1  justify-items-center content-end '>
           <li>
            <a href='#'>
              <FontAwesomeIcon icon={faLinkedin} size='2x' />
            </a>
          </li>
          <li>
            <a href='#'>
              <FontAwesomeIcon icon={faYoutube} size='2x'  />
            </a>
          </li> 
          <li>
            <a href='#'>
              <FontAwesomeIcon icon={faInstagram} size='2x'  />            </a>
          </li>
          <li>
            <a href='
            3'>
              <FontAwesomeIcon icon={faFacebook} size='2x' />
            </a>
          </li>
          <li>
            <a href='#'>
              <FontAwesomeIcon icon={faTwitter} size='2x' />
            </a>
          </li>
        </ul>
      </div>
      </>
    );
}

export default SideNav;
import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'; 

function Socials() {
  return (
    <div className="bg-white text-gray-900 flex flex-col items-center py-20">
      <h1 className="text-4xl font-bold mb-12">Connect with Me</h1>
      <div className='flex space-x-8'>
        <a href='https://github.com/dipsankadariya' target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="text-5xl text-black hover:scale-110 transition-transform duration-200" />
        </a>
        <a href='https://www.facebook.com/dipsankadariya99/' target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="text-5xl text-black hover:scale-110 transition-transform duration-200" />
        </a>
        <a href='https://www.linkedin.com/in/dipsan-kadariya-95012b269/' target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="text-5xl text-black hover:scale-110 transition-transform duration-200" />
        </a>
        <a href='https://www.instagram.com/dipsan_kadariya/' target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="text-5xl text-black hover:scale-110 transition-transform duration-200" />
        </a>
      </div>
    </div>
  );
}

export default Socials;

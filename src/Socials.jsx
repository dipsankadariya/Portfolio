import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub ,faFacebook,faLinkedin,faInstagramSquare} from '@fortawesome/free-brands-svg-icons'; 

function Socials() {
  return (
  <div>
    <div className='flex flex-row justify-between m-auto w-2/5 mt-14 '>
   <a href='https://github.com/dipsankadariya'><FontAwesomeIcon icon={faGithub}  className="text-6xl hover:animate-spin"/></a>
   <a href='https://www.facebook.com/dipsankadariya99/'><FontAwesomeIcon icon={faFacebook}  className="text-6xl hover:animate-spin"/></a> 
   <a href='https://www.linkedin.com/in/dipsan-kadariya-95012b269/'><FontAwesomeIcon icon={faLinkedin}  className="text-6xl hover:animate-spin"/></a>
   <a href='https://www.instagram.com/dipsan_kadariya/'><FontAwesomeIcon icon={faInstagramSquare} className="text-6xl hover:animate-spin"/></a>

    </div>
    </div>
  );
}

export default Socials;

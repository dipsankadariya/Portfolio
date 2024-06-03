import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub ,faFacebook,faLinkedin,faInstagramSquare} from '@fortawesome/free-brands-svg-icons'; 

function Socials() {
  return (
  <div>
    <div className='flex flex-row justify-between m-auto w-2/5 mt-14 '>
    <FontAwesomeIcon icon={faGithub}  className="text-6xl"/>
    <FontAwesomeIcon icon={faFacebook}  className="text-6xl"/>
    <FontAwesomeIcon icon={faLinkedin}  className="text-6xl"/>
    <FontAwesomeIcon icon={faInstagramSquare} className="text-6xl"/>

    </div>
    </div>
  );
}

export default Socials;

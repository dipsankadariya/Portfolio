import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub ,faFacebook,faLinkedin,faInstagramSquare} from '@fortawesome/free-brands-svg-icons'; 


function Projects() {
  return (
    <div>

       <p className='text-4xl mb-32 mt-32 font-semibold text-center'>Main Projects:</p>

      <div className="flex flex-col m-8 bg-gray-100 w-11/12 rounded shadow-xl">
        <p className="text-4xl m-4 font-semibold">Guide Everest</p>
        <p className="text-2xl m-4 text-gray-700">EverestGuide is a comprehensive tourism information and reservation website crafted to empower travelers and tourists with the tools and resources essential for discovering, planning, and booking their dream vacations in Nepal.</p>
        <p className="text-2xl m-4 text-gray-700">Tools used : React ,Tailwindcss</p>
        <FontAwesomeIcon icon={faGithub}  className="text-5xl mb-4"/>

      </div>


      <div className="flex flex-col m-8 bg-gray-100 w-11/12 rounded shadow-xl">
        <p className="text-4xl m-4 font-semibold">MedGuide Pro</p>
        <p className="text-2xl m-4 text-gray-700"> A website that  uses AI to provides  information on medical conditions, treatments, medications, and preventive care.</p>
        <p className="text-2xl m-4 text-gray-700">Tools used : React,MongoDB,Nodejs</p>
        <FontAwesomeIcon icon={faGithub}  className="text-5xl mb-4"/>
      </div>
      
      <p className='text-4xl mb-16 mt-32 font-semibold text-center'>Cloned Projects:</p>
      <div className=''>
        <div >
          <title></title>
          <infos></infos>
        </div>
      </div>

    </div>
  );
}

export default Projects;

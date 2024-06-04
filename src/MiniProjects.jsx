import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function MiniProjects() {
  return (
    <div className="flex flex-row justify-center items-center mt-20 mb-20">
      <p className="text-2xl font-semibold text-center mr-4 mt-16 mb-32">More Projects on:</p>
    <a href="https://github.com/dipsankadariya"> <FontAwesomeIcon icon={faGithub} className="text-5xl mt-16 mb-32 hover:animate-spin" /></a> 
    </div>
  );
}

export default MiniProjects;

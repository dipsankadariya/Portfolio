import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { SiFlutter } from 'react-icons/si';

function Skills() {
  return (
    <div className="flex flex-col items-center mt-10 ">
      <p className="text-3xl font-semibold mb-32 mt-32">Skills</p>
      <div className="grid grid-cols-3 gap-10">
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faHtml5} className="text-6xl text-black" />
          <p className="mt-2 text-xl">HTML</p>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faCss3Alt} className="text-6xl text-black" />
          <p className="mt-2 text-xl">CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faJs} className="text-6xl text-black" />
          <p className="mt-2 text-xl">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faReact} className="text-6xl text-black" />
          <p className="mt-2 text-xl">React</p>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faNodeJs} className="text-6xl text-black" />
          <p className="mt-2 text-xl">Node.js</p>
        </div>
        <div className="flex flex-col items-center">
          <SiFlutter className="text-6xl text-black" />
          <p className="mt-2 text-xl">Flutter</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function ClonedProjects() {
  return (
    <>
      <div className="flex flex-col m-8 bg-gray-100 w-11/12 rounded shadow-xl">
        <p className="text-3xl m-4 font-semibold hover:text-gray-600">Youtube Clone</p>
        <p className="text-xl m-4 text-gray-700">Clone of a popular video streaming site called Youtube.</p>
        <p className="text-xl m-4 text-gray-700">Tools used : Html and Css.</p>
        <div className="flex justify-center"> 
          <a href="https://github.com/dipsankadariya/YoutubeClone">
            <FontAwesomeIcon icon={faGithub} className="text-5xl mb-4 hover:animate-spin" />
          </a>
        </div>
      </div>

      <div className="flex flex-col m-8 bg-gray-100 w-11/12 rounded shadow-xl">
        <p className="text-3xl m-4 font-semibold hover:text-gray-600">Amazon Clone</p>
        <p className="text-xl m-4 text-gray-700">Clone of a popular e-commerce websites called Amazon.</p>
        <p className="text-xl m-4 text-gray-700">Tools used : Html and Css And Javascript.</p>
        <div className="flex justify-center"> 
          <a href="https://github.com/dipsankadariya/AmazonClone">
            <FontAwesomeIcon icon={faGithub} className="text-5xl mb-4 hover:animate-spin" />
          </a>
        </div>
      </div>
    </>
  );
}

export default ClonedProjects;

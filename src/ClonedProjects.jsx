import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function ClonedProjects() {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col items-center py-20 px-4">
      <h1 className="text-4xl font-bold mb-16 text-center">Cloned Projects</h1>

      <div className="w-full max-w-4xl mb-12">
        <div className="bg-gray-100 rounded-lg shadow-lg p-6 mb-8 hover:shadow-xl transition duration-300">
          <h2 className="text-3xl font-semibold mb-4 hover:text-gray-600 cursor-pointer">YouTube Clone</h2>
          <p className="text-lg text-gray-700 mb-4">Clone of a popular video streaming site called YouTube.</p>
          <p className="text-lg text-gray-700 mb-4">Tools used: HTML and CSS.</p>
          <div className="flex justify-center">
            <a href="https://github.com/dipsankadariya/YoutubeClone" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="text-4xl text-gray-800 hover:text-gray-600 transition-colors duration-200" />
            </a>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
          <h2 className="text-3xl font-semibold mb-4 hover:text-gray-600 cursor-pointer">Amazon Clone</h2>
          <p className="text-lg text-gray-700 mb-4">Clone of a popular e-commerce website called Amazon.</p>
          <p className="text-lg text-gray-700 mb-4">Tools used: HTML, CSS, and JavaScript.</p>
          <div className="flex justify-center">
            <a href="https://github.com/dipsankadariya/AmazonClone" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="text-4xl text-gray-800 hover:text-gray-600 transition-colors duration-200" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClonedProjects;

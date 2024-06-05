import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Projects() {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col items-center py-20 px-4">
      <h1 className="text-4xl font-bold mb-16 text-center mt-10">Main Projects</h1>

      <div className="w-full max-w-4xl mb-12">
        <div className="bg-gray-100 rounded-lg shadow-lg p-6 mb-8 hover:shadow-xl transition duration-300">
          <h2 className="text-3xl font-semibold mb-4 hover:text-gray-600 cursor-pointer">Guide Everest</h2>
          <p className="text-lg text-gray-700 mb-4">EverestGuide is a comprehensive tourism information and reservation website crafted to empower travelers and tourists with the tools and resources essential for discovering, planning, and booking their dream vacations in Nepal.</p>
          <p className="text-lg text-gray-700 mb-4">Tools used: React, TailwindCSS</p>
          <div className="flex justify-center">
            <a href='https://github.com/dipsankadariya/Guide_Everest' target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="text-4xl text-gray-800 hover:text-gray-600 transition-colors duration-200" />
            </a>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
          <h2 className="text-3xl font-semibold mb-4 hover:text-gray-600 cursor-pointer">MedGuide Pro</h2>
          <p className="text-lg text-gray-700 mb-4">A website that uses AI to provide information on medical conditions, treatments, medications, and preventive care.</p>
          <p className="text-lg text-gray-700 mb-4">Tools used: React, MongoDB, Node.js</p>
          <div className="flex justify-center">
            <a href='https://github.com/dipsankadariya/Guide_Everest' target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="text-4xl text-gray-800 hover:text-gray-600 transition-colors duration-200" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

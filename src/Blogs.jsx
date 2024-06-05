import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlogger } from '@fortawesome/free-brands-svg-icons';

function Blogs() {
  return (
    <div className="bg-white text-gray-900 my-10 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4 text-center">Blogs & Articles on: </h1>
      <div className="flex items-center">
        <a href="https://dipsankadariya99.blogspot.com/">
          <FontAwesomeIcon icon={faBlogger} className="text-6xl hover:animate-spin text-gray-800" />
        </a>
      </div>
    </div>
  );
}

export default Blogs;

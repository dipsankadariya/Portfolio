import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlogger } from '@fortawesome/free-brands-svg-icons';

function Blogs() {
  return (
    <div className="flex flex-col  justify-center items-center ">
      <p className="text-3xl font-semiBold text-center mt-8 mb-4">Blogs and Articles:</p>
      <a href="">
      <FontAwesomeIcon icon={faBlogger} className="text-6xl hover:animate-spin" />
      </a>
    </div>
  );
}

export default Blogs;
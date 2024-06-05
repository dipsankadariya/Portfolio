import React from "react";

function AboutMe() {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col items-center py-20 px-4">
      <div className="w-full max-w-3xl text-start mb-16">
        <h1 className="text-4xl font-bold mb-6">Hello Everyone!</h1>
        <p className="text-lg leading-relaxed">
          My name is Dipsan Kadariya. I'm a 2nd-year student studying Bachelor of Science in Computer Science and Information Technology. I'm currently learning Web Applications. I am passionate about things related to web development, app development, and artificial intelligence.
        </p>
      </div>

      <div className="w-full max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">Currently I'm:</h2>
        <ul className="list-disc list-inside text-lg space-y-2 pl-5">
          <li>Working on a tourist-based web project crafted to empower travelers and tourists with the tools and resources essential for discovering, planning, and booking their dream vacations in Nepal.</li>
          <li>Researching and writing a blog on Neuralink, addressing its impact on individual life.</li>
          <li>Learning Web and App development.</li>
          <li>Looking for interesting and impactful projects/research to work on.</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;

import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20"
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-3">About Me</h1>

      <p className="text-lg text-gray-700 text-justify leading-relaxed mb-12">
        Hello, I am <span className="font-semibold">Zunair</span>, a passionate Web Designer and Developer. With a strong foundation in
        Information Technology, I aim to craft intuitive, responsive, and visually appealing
        software solutions that make an impact.
      </p>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-12 text-gray-700">
        {/* Education */}
        <div>
          <h2 className="text-xl font-semibold text-green-600 mb-2">Education</h2>
          <p className="leading-relaxed">
            <span className="font-medium">Bachelors of Science in Computer Sciences</span><br />
            University Of Management And Technology, Lahore <br />
            <span className="text-sm text-gray-500">2020 - 2024</span>
          </p>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-xl font-semibold text-green-600 mb-2">Skills & Expertise</h2>
          <p className="leading-relaxed">
            HTML, CSS, JavaScript, ReactJS, Tailwind CSS, Node.js, Express.js, MongoDB, Django, PostreSQL, Python <br />
            Tools: VS Code, GitHub, Microsoft Office <br />
            Strong analytical and problem-solving skills
          </p>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-xl font-semibold text-green-600 mb-2">Professional Experience</h2>
          <p className="leading-relaxed">
            <span className="font-medium">MERN Stack Intern</span> <br />
            IIFA Tech — <span className="text-sm text-gray-500">Jan 2025 - April 2025</span>
            <br /><br />
            <span className="font-medium">Junior Full Stack Developer</span> <br />
            CARTSMITHS — <span className="text-sm text-gray-500">May 2025 - October 2025</span> <br /> <br />
            <span className="font-medium">Full Stack Developer</span> <br />
            PROJECTZ — <span className="text-sm text-gray-500">November 2025 - Present</span>
          </p>
        </div>

        {/* Achievement */}
        <div>
          <h2 className="text-xl font-semibold text-green-600 mb-2">Achievement & Rewards</h2>
          <p className="leading-relaxed">
            MERN Stack Certificate — <span className="text-sm text-gray-500">Great Learning, 2024</span>
          </p>
        </div>

        {/* Mission */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold text-green-600 mb-2">Mission Statement</h2>
          <p className="leading-relaxed">
            I am driven by a passion for continuous learning and staying updated with industry trends.
            I strive to expand my skills across modern web technologies, and contribute to building
            efficient, elegant, and user-friendly digital solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

import React from "react";
import { FaInstagramSquare, FaLinkedin, FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-32"
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-4">
            <span className="text-lg md:text-xl font-medium">
              Welcome! In my Portfolio
            </span>

            <div className="flex flex-wrap items-center text-2xl md:text-4xl font-semibold">
              <h1 className="mr-2">I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={[
                  "Web Developer",
                  "Programmer",
                  "MERN Stack Developer",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </div>

            <p className="text-sm md:text-base text-justify leading-relaxed">
              I am a recent graduate with a degree in Software Engineering,
              currently focused on web development. My academic background and
              practical experience have equipped me with a strong foundation in
              both front-end and back-end technologies.
              <br />
              I am proficient in HTML, CSS, JavaScript, and have hands-on
              experience with frameworks such as React. As I begin my
              professional journey, I am eager to apply my knowledge to
              real-world projects, contributing to the creation of efficient and
              user-friendly web applications.
              <br />
              I am passionate about continuous learning and am committed to
              staying updated with the latest industry trends and best
              practices. My goal is to develop innovative solutions that enhance
              user experiences and drive business success.
            </p>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              {/* Social Icons */}
              <div>
                <h1 className="font-bold mb-2">Available on</h1>
                <ul className="flex space-x-4">
                  <li className="text-2xl hover:scale-110 duration-200">
                    <a
                      href="https://www.instagram.com/m_zunairr/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagramSquare />
                    </a>
                  </li>
                  <li className="text-2xl hover:scale-110 duration-200">
                    <a
                      href="https://www.linkedin.com/in/zunair-waheed/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li className="text-2xl hover:scale-110 duration-200">
                    <a
                      href="https://github.com/zunairwaheed"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h1 className="font-bold mb-2">Currently working on</h1>
                <div className="flex space-x-4">
                  <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200" />
                  <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200" />
                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200" />
                  <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200" />
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQFSynekkrgKsQ/profile-displayphoto-shrink_800_800/B4DZVB.TLzG8Ac-/0/1740568614383?e=1752105600&v=beta&t=XLuSogR_wNicMFOYbBHr7tcI7HUpQBF5H-_rvGLhpNo"
              alt="Profile"
              className="w-48 h-48 md:w-[400px] md:h-[400px] object-cover rounded-full border-4 border-gray-300 shadow-md"
            />
          </div>
        </div>
      </div>
      <hr className="mt-8" />
    </>
  );
}

export default Home;

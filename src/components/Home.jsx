import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import pic from "../../public/me.jpg";

function Home() {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 ">
        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome! In my Portfolio </span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>I'm a &nbsp;</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={[
                  "Web Developer",
                  "Programmer",
                  "MERN Stack Developer",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              I am a recent graduate with a degree in Software Engineering,
              currently focused on web development. My academic background and
              practical experience have equipped me with a strong foundation in
              both front-end and back-end technologies. <br />
              I am proficient in HTML, CSS, JavaScript, and have hands-on experience with frameworks such
              as React . As I begin my professional journey, I am
              eager to apply my knowledge to real-world projects, contributing
              to the creation of efficient and user-friendly web applications. <br />
              I am passionate about continuous learning and am committed to
              staying updated with the latest industry trends and best
              practices. My goal is to develop innovative solutions that enhance
              user experiences and drive business success.
            </p>
            <br />
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              {/* social media icons */}
              <div className="space-y-2">
                <h1 className="font-bold">Available on</h1>
                <ul className="flex space-x-5">
                  <li className="text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]">
                    <a href="https://www.instagram.com/m_zunairr/" target="_blank">
                      {<FaInstagramSquare />}
                    </a>
                  </li>
                  <li className="text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]">
                    <a href="https://www.linkedin.com/in/zunair-waheed/" target="_blank">
                      {<FaLinkedin />}
                    </a>
                  </li>
                  <li className="text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]">
                    <a href="https://github.com/zunairwaheed" target="_blank">
                      {<FaGithub />}
                    </a>
                  </li>
                </ul>
              </div>
              {/* skills */}
              <div className="space-y-2">
                <h1 className="font-bold">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 mt-8 md:mt-16 order-1">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQFSynekkrgKsQ/profile-displayphoto-shrink_800_800/B4DZVB.TLzG8Ac-/0/1740568614383?e=1752105600&v=beta&t=XLuSogR_wNicMFOYbBHr7tcI7HUpQBF5H-_rvGLhpNo"
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;

import React, { useState } from "react";
import pic from "../../public/me.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-sm fixed top-0 left-0 right-0 bg-white">
        <div className="flex justify-between h-16 items-center">
          <div className="flex space-x-2 items-center">
            <img src="https://media.licdn.com/dms/image/v2/D4D03AQFSynekkrgKsQ/profile-displayphoto-shrink_800_800/B4DZVB.TLzG8Ac-/0/1740568614383?e=1752105600&v=beta&t=XLuSogR_wNicMFOYbBHr7tcI7HUpQBF5H-_rvGLhpNo" className="h-12 w-12 rounded-full " alt="" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Zunai<span className="text-green-500 text-2xl">R</span>
              <p className="text-sm">Software Engineer</p>
            </h1>
          </div>
          {/* desktop navbar */}
          <div className="">
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>
        {/* mobile navbar */}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col justify-center items-center h-screen text-xl space-y-3">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer font-semibold"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;

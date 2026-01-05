import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import me from "../assets/me.jpeg";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menu]);

  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 flex justify-between items-center">
        {/* Logo and name */}
        <div className="flex space-x-3 items-center">
          <img
            src={me}
            className="h-12 w-12 rounded-full object-cover"
            alt="profile"
          />
          <div className="leading-tight">
            <h1 className="font-bold text-xl cursor-pointer">
              Zunai<span className="text-green-500 text-2xl">R</span>
            </h1>
            <p className="text-xs text-gray-600">Software Engineer</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {navItems.map(({ id, text }) => (
            <li
              key={id}
              className="cursor-pointer hover:text-green-500 hover:scale-105 duration-200"
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

        {/* Mobile menu icon */}
        <div className="md:hidden z-50" onClick={() => setMenu(!menu)}>
          {menu ? <IoCloseSharp size={26} /> : <AiOutlineMenu size={26} />}
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menu && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center space-y-6 text-xl font-semibold md:hidden">
          {navItems.map(({ id, text }) => (
            <Link
              key={id}
              to={text}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMenu(false)}
              className="hover:text-green-500"
            >
              {text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;

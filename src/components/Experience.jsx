import React from "react";
import javascript from "../../public/javascript.jpg";
import reactnative from "../../public/react.svg";
import tailwind from "../../public/tailwind.svg";
import html from "../../public/html.png";
import css from "../../public/css.png";
import mern from "../../public/mern.png";
import python from "../../public/python.jpg";

function Experience() {
  const cardItems = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: javascript, name: "JavaScript" },
    { id: 4, logo: reactnative, name: "ReactJS" },
    { id: 5, logo: mern, name: "MERN" },
    { id: 6, logo: tailwind, name: "TailwindCSS" },
    { id: 7, logo: python, name: "Python" },
    { id: 8, logo: python, name: "Django Framework" },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Experience</h1>
        <p className="text-base md:text-lg">
          I have experience in the following technologies.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-10">
        {cardItems.map(({ id, logo, name }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center border-2 rounded-2xl p-4 cursor-pointer hover:scale-105 duration-300 bg-white shadow-md"
          >
            <img
              src={logo}
              alt={name}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-contain"
            />
            <div className="mt-4 text-center">
              <h2 className="text-sm sm:text-base md:text-lg font-semibold">{name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;

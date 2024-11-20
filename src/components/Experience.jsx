import React from "react";
import javascript from "../../public/javascript.jpg";
import reactnative from "../../public/reactnative.png";
import tailwind from "../../public/tailwind.png";
import html from "../../public/html.png";
import css from "../../public/css.png";
import mern from "../../public/mern.png";
import python from "../../public/python.jpg"

function Experience() {
  const cardItems = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: reactnative,
      name: "React",
    },
    {
      id: 5,
      logo: mern,
      name: "MERN",
    },
    {
      id: 6,
      logo: tailwind,
      name: "Tailwind",
    },
    {
      id: 7,
      logo: python,
      name: "Python",
    },
  ];
  return (
    <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <span className="">
          I have more than 1 years of experience in below technologies.
        </span>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
        {cardItems.map(({ id, logo, name }) => (
          <div
            className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px]  p-1 cursor-pointer hover:scale-110 duration-300"
            key={id}
          >
            <img
              src={logo}
              className="w-[150px] h-[150px] rounded-full "
              alt=""
            />
            <div>
              <div className="px-2 font-bold text-xl mb-2">{name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;

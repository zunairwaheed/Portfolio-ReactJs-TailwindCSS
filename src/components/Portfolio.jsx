import React from "react";
import javascript from "../../public/javascript.jpg";
import mern from "../../public/mern.png";
import reactnative from "../../public/reactnative.png";
import tailwind from "../../public/tailwind.png";
import python from "../../public/python.jpg"



function Portfolio() {
  const cardItems = [
    {
      id: 1,
      logo: reactnative,
      name: "Event Hub",
      text: "Event Hub uses React Native, Python, Firebase, and VS Code to create a seamless interaction between customers and event planners, enabling efficient event service management and selection based on ratings and reviews.",
    },
    {
      id: 2,
      logo: mern,
      name: "E-Commerce",
      text: "I developed a dynamic web application using the MERN stack. I created a user-friendly interface with React.js, implemented RESTful APIs for authentication and data validation, and managed a MongoDB database for storing and retrieving data.",
    },
    {
      id: 3,
      logo: tailwind,
      name: "Portfolio",
      text: " I developed a portfolio usung ReactJs and Tailwind CSS website showcasing my skills, projects, experience and contact form for a dynamic and interactive online presence. Implemented responsive design for an optimal user experience",
    },
    {
      id: 4,
      logo: javascript,
      name: "Form Validator",
      text: "This is javascript website for validate the form whether all fields are filled correctly or not. Its not submit form till form is completely filled. Implemented responsive design and smooth navigation for an optimal user experience",
    }, 
    {
      id: 5,
      logo: python,
      name: "Real State Price Predictor",
      text: "This is price predictor model for predict the price using given classifier",
    },
  ];
  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
        {cardItems.map(({ id, logo, name, text }) => (
          <div
            className="md:w-[300px] md:h-[450px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
            key={id}
          >
            <img
              src={logo}
              className="w-[120px] h-[120px] p-1 rounded-full border-[px] "
              alt=""
            />
            <div>
              <div className="px-2 font-bold text-xl mb-2">{name}</div>
              <div className="px-2 text-gray-700">{text}</div>
            </div>
            <div className="px-6 py-4 space-x-3 justify-around">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded ">Video</button>
              <button className="bg-green-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">Source Code</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

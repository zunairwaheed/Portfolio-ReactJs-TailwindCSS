import React from "react";
// import javascript from "../../public/javascript.jpg";
import mern from "../../public/mern.png";
import reactnative from "../../public/react.svg";
import tailwind from "../../public/tailwind.svg";
import python from "../../public/python.jpg";

function Portfolio() {
  const cardItems = [
    {
      id: 1,
      logo: reactnative,
      name: "Event Hub",
      sourceCodeLink: "https://github.com/yourusername/event-hub",
      text: "Event Hub uses React Native, Python, Firebase, and VS Code to create a seamless interaction between customers and event planners, enabling efficient event service management and selection based on ratings and reviews.",
    },
    {
      id: 2,
      logo: mern,
      name: "E-Commerce",
      sourceCodeLink: "https://github.com/zunairwaheed/MERN-Project.git",
      text: "I developed a dynamic web application using the MERN stack. I created a user-friendly interface with React.js, implemented RESTful APIs for authentication and data validation, and managed a MongoDB database for storing and retrieving data.",
    },
    {
      id: 3,
      logo: tailwind,
      name: "Portfolio",
      sourceCodeLink: "https://github.com/zunairwaheed/Portfolio-ReactJs-TailwindCSS.git",
      text: "I developed a portfolio using ReactJs and Tailwind CSS showcasing my skills, projects, experience, and contact form. Implemented responsive design for an optimal user experience.",
    },
    {
      id: 4,
      logo: mern,
      name: "Travel Management",
      sourceCodeLink: "https://github.com/zunairwaheed/JetSetGo-TravelManagement.git",
      text: "A full-stack MERN application enabling seamless trip planning, booking, and administration. Implemented authentication, admin dashboard, bookings, and users. Integrated Stripe, Nodemailer, and Cloudinary.",
    },
    {
      id: 5,
      logo: tailwind,
      name: "Clone Landing Pages",
      sourceCodeLink: "https://github.com/yourusername/event-hub",
      text: "I recreated responsive Figma landing pages using React.js and Tailwind CSS by building reusable components and matching the design precisely with responsive layout and interactive elements.",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20"
    >
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Portfolio</h1>
        <span className="underline font-semibold text-lg">Featured Projects</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {cardItems.map(({ id, logo, name, text, sourceCodeLink }) => (
          <div
            key={id}
            className="flex flex-col border-[2px] rounded-lg shadow-lg p-4 hover:scale-105 duration-300 bg-white"
          >
            <img
              src={logo}
              alt={`${name} logo`}
              className="w-24 h-24 object-contain mx-auto rounded-full border mb-4"
            />
            <h2 className="text-xl font-semibold text-center mb-2">{name}</h2>
            <p className="text-gray-700 text-sm text-justify mb-4 px-2">
              {text}
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-auto">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded">
                Video
              </button>
              <a
                href={sourceCodeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-green-600 hover:bg-green-800 text-white font-medium px-4 py-2 rounded">
                  Source Code
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

import React from "react";

function About() {
  return (
    <>
      <div
        name="About"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 "
      >
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p className="text-justify">
          Hello, I am Zunair, a passionate Web Designer with a keen eye for MERN
          Stack. With a background in IT, I strive to create impactful and
          visually stunning software solutions that leave a lasting impression.{" "}
        </p>
        <br />
        <div>
          <h1 className="text-green-600 text-xl font-semibold">Education</h1>
          <span className="text-justify">
            Bachelors of Science in Computer Sciences | University Of Management
            And Technology, Lahore | 2020-2024
          </span>
          <br />
          <br />
          <h1 className="text-green-600 text-xl font-semibold">
            Skills & Expertise
          </h1>
          <span className="text-justify">
            MERN Stack developer | Experienced with software Tools and
            Technologies | Problem-Solving Skills.
          </span>
          <br />
          <br />
          <h1 className="text-green-600 text-xl font-semibold">
            Professional Experience
          </h1>
          <span className="text-justify">
            Built multiple MERN Stack websites which you can access by click on
            my github account icon.
          </span>
          <br />
          <br />
          <h1 className="text-green-600 text-xl font-semibold">
            Achivement & Rewards
          </h1>
          <span className="text-justify">
            MERN Stack Certificate | Great Learning | 2024
          </span>
          <br />
          <br />
          <h1 className="text-green-600 text-xl font-semibold">
            Mission Statement
          </h1>
          <span className="text-justify">
            Enthusiastic about continuous learning and keeping up with industry
            trends. I have a keen interest in learning and mastering various web
            technologies and frameworks..
          </span>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}

export default About;

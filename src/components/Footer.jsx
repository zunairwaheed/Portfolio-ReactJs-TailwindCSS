import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-5">
              <h1 className="text-sm text-center">Email: zunairwaheed125@gmail.com</h1>
              <h1 className="text-sm text-center">Phone: +92 324 0048893</h1>
            </div>
            <div className="flex space-x-4">
             
              <a href="https://www.facebook.com/muhammadzunairwaheed" target="_blank">
                {" "}
                <FaFacebook a size={24} />
              </a>
              <a href="https://www.instagram.com/m_zunairr/" target="_blank">
                {" "}
                <FaSquareInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/zunair-waheed/" target="_blank">
                {" "}
                <FaLinkedin size={24} />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; Muhammad Zunair Waheed - All rights reserved.
              </p>
              <p className="text-sm">Software Engineer - UMT, Lahore</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

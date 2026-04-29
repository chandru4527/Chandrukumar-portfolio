import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-black via-blue-950 to-black
                       border-t border-blue-900/50">

      <div className="max-w-6xl mx-auto px-6 py-8 text-center">

        {/* Name */}
        <h2 
        // data-aos="fade-up" data-aos-delay="100"
         className="text-2xl font-bold text-white mb-3">
          CHANDRUKUMAR C
        </h2>

        <p className="text-gray-400 mb-5">
          MERN Stack Developer | Building Modern Web Apps 
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">

          {/* Icon Item */}
          {[
            { icon: <FaGithub />, link: "https://github.com/chandru4527" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/chandru4527/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/ck_the_black_lover/" },
            { icon: <FiMail />, link: "mailto:chandrukumar4527@gmail.com" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="relative group p-3 rounded-full border border-blue-900/50
                         text-gray-300 hover:text-white transition duration-300 overflow-hidden"
            >
              {/* Glow effect */}
              <span className="absolute inset-0 rounded-full
                               bg-blue-500/10 opacity-0 group-hover:opacity-100
                               blur-md transition"></span>

              {/* Shine effect */}
              <span className="absolute top-0 -left-full h-full w-1/2
                               bg-linear-to-r from-transparent via-white/30 to-transparent
                               skew-x-12 group-hover:left-[150%]
                               transition-all duration-900"></span>

              <span className="relative z-10 text-xl">
                {item.icon}
              </span>
            </a>
          ))}
        </div>

        {/* Bottom Text */}
        <p className="text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} CK. All rights reserved.
        </p>

      </div>
    </footer>
  );
};
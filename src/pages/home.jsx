import React from 'react'
import animeboy from "../assets/avatar/home2.png"

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);



  return (
    <section id='home'
      className="min-h-screen flex items-center justify-center py-20 bg-linear-to-br from-black via-gray-900 to-blue-950">

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 mt-10">


          {/* left content */}
          <div data-aos="fade-right"

            className="text-center md:text-left max-w-xl p-2">

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
              Hi, I'm <span className="text-blue-500">CHANDRUKUMAR</span>
            </h1>

            <h3 className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-blue-200">
              MERN Full Stack Developer
            </h3>

            <p className="mt-5 text-sm sm:text-base text-gray-400 leading-relaxed text-justify">
              I build scalable and responsive web applications using the MERN stack (MongoDB, Express.js, React, Node.js) along with Tailwind CSS and modern JavaScript.
              I focus on writing clean, maintainable code, optimizing performance, and creating intuitive user experiences. Passionate about full-stack development,
              I enjoy transforming ideas into real-world applications and continuously learning new technologies to stay ahead in the industry.
            </p>

            {/* buttons */}
            <div data-aos="fade-up"
              data-aos-delay="200"
              className="mt-7 flex flex-col sm:flex-row justify-center md:justify-start gap-5">

              <a
                href="#contact"
                className="px-6 py-3 lg:py-2 bg-blue-600 text-white rounded-lg cursor-pointer shadow-lg hover:bg-blue-700 transition inline-block text-center"
              >
                Hire Me
              </a>

              <a
                href="/chandrukumar_resume.pdf"
                onClick={() => toast.success("CV downloaded successfully")}
                download
                className="px-6 py-3 lg:py-2 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition inline-block text-center"
              >
                Download CV
              </a>

            </div>

          </div>

          {/* right img */}
          <div data-aos="zoom-in"
            className="w-52 sm:w-64 md:w-80 lg:w-96 relative">

            {/* Blue glow background */}
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-25 rounded-full animate-pulse"></div>

            <img
              src={animeboy}
              alt="profile"
              className="relative rounded-full shadow-2xl border-4 border-blue-500 hover:scale-105 transition duration-500 w-full"
            />

          </div>

        </div>

      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
        newestOnTop
        pauseOnHover
      />

    </section>
  )
}
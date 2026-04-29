import React from 'react'

// project images
import ecommerce from "../assets/projects/ecommerce.png"
import bussiness from "../assets/projects/bussiness.png"
import music from "../assets/projects/music.png"
import weather from "../assets/projects/weather.png"
import todo from "../assets/projects/todo app.png"
import login from "../assets/projects/login.png"

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";



export const Projects = () => {

  const projects = [
    {
      name: "Shopo - E-Commerce Platform",
      img: ecommerce,
      desc: "Full-stack MERN e-commerce application with authentication, cart, and secure checkout.",
      tech: ["React", "Tailwind CSS", "Express", "MongoDB"],
      live: "https://shopsoforntend.netlify.app/",
      github: "https://github.com/chandru4527/Ecommerce-Frontend"
    },
    {
      name: "Business Website",
      img: bussiness,
      desc: "Modern responsive business website with clean UI and smooth layout design.",
      tech: ["HTML", "CSS", "Bootstrap"],
      live: "https://chandru4527.github.io/Upscale---Modern-Business-Website-Template/",
      github: "https://github.com/chandru4527/Upscale---Modern-Business-Website-Template"
    },
    {
      name: "Music Player",
      img: music,
      desc: "Interactive music player with play, pause, seek, and dynamic UI controls.",
      tech: ["HTML", "Tailwind CSS", "JavaScript"],
      live: "https://chandru4527.github.io/Glass-morphism-Music-Player/",
      github: "https://github.com/chandru4527/Glass-morphism-Music-Player"
    },
    {
      name: "Weather Application",
      img: weather,
      desc: "Real-time weather app using API integration with dynamic location-based data.",
      tech: ["HTML", "API", "CSS", "JavaScript"],
      live: "https://chandru4527.github.io/Weather-Application/",
      github: "https://github.com/chandru4527/Weather-Application"
    },
    {
      name: "Todo App",
      img: todo,
      desc: "Task management app with add, delete, and complete features using local storage.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://chandru4527.github.io/Todo-List-app/",
      github: "https://github.com/chandru4527/Todo-List-app"
    },
    {
      name: "Login Page UI",
      img: login,
      desc: "Modern login and signup UI with validation and responsive design.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://chandru4527.github.io/responsive-login-register-page/",
      github: "https://github.com/chandru4527/responsive-login-register-page"
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-linear-to-br from-black via-gray-900 to-blue-950 py-24"
    >

      <div className="container mx-auto px-6 md:px-12">

        {/* heading */}
        <h2 data-aos="fade-down"
          className="text-3xl md:text-5xl font-bold text-white text-center">
          My <span className="text-blue-500">Projects</span>
        </h2>

        <p data-aos="fade-up"
          data-aos-delay="100"
          className="text-gray-400 text-center mt-4 max-w-xl mx-auto">
          Some of my work showcasing frontend and full stack development.
        </p>

        {/* grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 120}
              className="relative group bg-linear-to-br from-black/60 via-gray-900 to-blue-950/40
               border border-blue-900/50 rounded-xl overflow-hidden
               hover:scale-105 hover:border-blue-500 
               hover:shadow-lg hover:shadow-blue-500/30
               transition-all duration-300 ease-out"
            >

              {/* 🔥 Image */}
              <div data-aos="fade-up"
                data-aos-delay="150"
                className="overflow-hidden">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* 🔥 Content */}
              <div className="p-5 relative z-10">

                <h3 className="text-white text-xl font-semibold">
                  {project.name}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  {project.desc}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-blue-900/40 text-blue-300 rounded
                       border border-blue-800/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div data-aos="fade-up"
                  data-aos-delay="300"
                  className="flex gap-3 mt-5">

                  {/* Live */}
                  <a
                    target="_blank"
                    href={project.live}
                    className="flex items-center gap-2 px-4 py-2 text-sm
                     bg-blue-600 text-white rounded-lg
                     hover:bg-blue-700 transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>

                  {/* GitHub */}
                  <a
                    target="_blank"
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 text-sm
                     border border-blue-500 text-blue-400 rounded-lg
                     hover:bg-blue-600 hover:text-white transition"
                  >
                    <FaGithub /> Code
                  </a>

                </div>
              </div>

              {/* ✨ Shine effect */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 -left-full h-full w-1/2
                      bg-linear-to-r from-transparent via-white/20 to-transparent
                      skew-x-12 group-hover:left-[150%]
                      transition-all duration-700"></div>
              </div>

            </div>
          ))}

        </div>

        <div data-aos="fade-up"
          data-aos-delay="100"
          className="flex justify-center mt-12">
          <a
            href="https://github.com/chandru4527?tab=repositories"
            target="_blank"
            className="relative flex items-center gap-3 px-6 py-3 rounded-lg
               bg-linear-to-r from-blue-600 to-blue-800 text-white font-semibold
               hover:from-blue-500 hover:to-blue-700
               transition duration-300 overflow-hidden group"
          >
            {/* Shine */}
            <span className="absolute inset-0">
              <span className="absolute top-0 -left-full h-full w-1/2
                       bg-linear-to-r from-transparent via-white/30 to-transparent
                       skew-x-12 group-hover:left-[150%]
                       transition-all duration-700"></span>
            </span>

            <FaGithub className="relative z-10 text-lg" />
            <span className="relative z-10">View All Projects</span>
          </a>
        </div>

      </div>

    </section>
  )
}
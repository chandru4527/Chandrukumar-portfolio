import React, { useState } from 'react'

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-blue-900">

      <div className="container mx-auto px-7 md:px-12">
        <div className="h-20 flex justify-between items-center">

          {/* logo */}
          <a href="#home">
            <h1 className="text-2xl md:text-3xl font-bold text-white cursor-pointer">
              <span className="text-blue-500">Portfolio</span>
            </h1>
          </a>

          {/* menu bar */}
          <nav
            className={`
                    flex flex-col lg:flex-row
                    lg:gap-8 text-gray-300 font-medium
                     items-center

                    absolute lg:relative top-0 right-0
                    h-screen lg:h-auto

                    w-1/2 lg:w-auto gap-10

                   bg-black/80 lg:bg-transparent

                        pt-30 lg:pt-0 

                     transition-transform duration-300

                  ${open ? "translate-x-0" : "translate-x-full lg:translate-x-0"}
                    `}
                     >

            <a href="#home" onClick={() => setOpen(false)} className="relative group transition duration-300 hover:text-blue-400">
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5">
                Home
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a href="#about" onClick={() => setOpen(false)} className="relative group transition duration-300 hover:text-blue-400">
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5">
                About
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a href="#skills" onClick={() => setOpen(false)} className="relative group transition duration-300 hover:text-blue-400">
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5">
                Skills
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a href="#projects" onClick={() => setOpen(false)} className="relative group transition duration-300 hover:text-blue-400">
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5">
                Projects
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a href="#contact" onClick={() => setOpen(false)} className="relative group transition duration-300 hover:text-blue-400">
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5 active:text-blue-600">
                Contact
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <span onClick={() => setOpen(false)}
              className='lg:hidden inline absolute top-10 left-10 text-3xl cursor-pointer'>
              <i className='ri-close-line'></i>
            </span>

          </nav>

          {/* mobile */}
          <div
            className="lg:hidden text-white text-3xl cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <i className="ri-menu-line"></i>

          </div>

        </div>
      </div>
    </header>
  )
}
import React from 'react'
import animeboy from "../assets/avatar/nobg.png"

export const About = () => {
    return (
        <section id='about'
            className="min-h-screen flex items-center justify-center py-20 bg-linear-to-br from-black via-gray-900 to-blue-950">

            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* left img */}
                    <div data-aos="zoom-in"
                        className="w-52 sm:w-64 md:w-80 lg:w-96 relative">

                        <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-25 rounded-full animate-pulse"></div>

                        <img
                            src={animeboy}
                            alt="profile"
                            className="relative w-full rounded-full border-4 border-blue-500 shadow-2xl hover:scale-105 transition duration-500"
                        />

                    </div>

                    {/* right content */}
                    <div className="w-full max-w-xl text-center lg:text-left">

                        <h2 data-aos="fade-down"
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                            About <span className="text-blue-500">Me</span>
                        </h2>

                        <p data-aos="fade-up"
                            data-aos-delay="100"
                            className="mt-6 text-sm sm:text-base text-gray-400 leading-relaxed text-justify">
                            I am a passionate MERN Stack Developer with experience in building modern, responsive, and scalable web applications
                            using MongoDB, Express.js, React, and Node.js. I focus on writing clean code, optimizing performance,
                            and delivering seamless user experiences.
                        </p>

                        <p
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed text-justify"
                        >
                            I enjoy developing full-stack applications, from designing intuitive user interfaces to building robust backend systems.
                            I am constantly learning new technologies and striving to create impactful real-world projects.
                        </p>

                        {/* BOXES */}
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">

                            <div data-aos="fade-up" data-aos-delay="300"
                                className="p-4 sm:p-5 bg-black/40 border border-blue-900 rounded-lg text-center
                                            transition hover:scale-105 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30">
                                <h2 className="text-2xl md:text-3xl font-bold text-blue-400">0+</h2>
                                <p className="text-gray-400 mt-2 text-sm">Experience</p>
                            </div>

                            <div data-aos="fade-up" data-aos-delay="500"
                                className="p-4 sm:p-5 bg-black/40 border border-blue-900 rounded-lg text-center
                                            transition hover:scale-105 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30">
                                <h2 className="text-2xl md:text-3xl font-bold text-blue-400">45+</h2>
                                <p className="text-gray-400 mt-2 text-sm">Projects</p>
                            </div>

                            <div data-aos="fade-up" data-aos-delay="700"
                                className="p-4 sm:p-5 bg-black/40 border border-blue-900 rounded-lg text-center
                                             transition hover:scale-105 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30">
                                <h2 className="text-2xl md:text-3xl font-bold text-blue-400">10+</h2>
                                <p className="text-gray-400 mt-2 text-sm">Technologies</p>
                            </div>

                        </div>

                        {/* BUTTON */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="500"
                            className="flex justify-center mt-12"
                        >
                            <a
                                href="#skills"
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

                                <span className="relative z-10">Learn More</span>
                            </a>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}
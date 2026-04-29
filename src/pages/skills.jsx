import React from 'react'

// images
import html from "../assets/logos/HTML5.png"
import css from "../assets/logos/CSS3.png"
import js from "../assets/logos/JavaScript.png"
import bootstrap from "../assets/logos/Bootstrap.png"
import tailwind from "../assets/logos/Tailwind CSS.png"
import react from "../assets/logos/React.png"
import node from "../assets/logos/Node.js.png"
import express from "../assets/logos/Express.png"
import mongo from "../assets/logos/MongoDB.png"
import figma from "../assets/logos/Figma.png"
import next from "../assets/logos/Next.js.png"
import ts from "../assets/logos/TypeScript.png"

// tools
import git from "../assets/logos/Git.png"
import github from "../assets/logos/GitHub.png"
import vscode from "../assets/logos/VSCode.png"
import postman from "../assets/logos/Postman.png"
import vite from "../assets/logos/Vite.js.png"
import chatgpt from "../assets/logos/chatgpt.png"


// aiTools
// import chatgpt from "../assets/logos/chatgpt.png"
// import claude from "../assets/logos/claude-ai.png"
// import cursor from "../assets/logos/cursor-ai.png"
// import copilot from "../assets/logos/github-copilot.png"
// import mscopilot from "../assets/logos/ms-copilot.png"

export const Skills = () => {


    const tools = [
        { name: "Git", img: git },
        { name: "Vite", img: vite },
        { name: "GitHub", img: github },
        { name: "VS Code", img: vscode },
        { name: "Figma", img: figma },
        { name: "Postman", img: postman },
        { name: "ChatGPT", img: chatgpt },
    ]

    // ai tools
    // const aiTools = [
    //     { name: "ChatGPT", img: chatgpt },
    //     { name: "Claude", img: claude },
    //     { name: "Cursor", img: cursor },
    //     { name: "GitHub Copilot", img: copilot },
    //     { name: "MS Copilot", img: mscopilot },
    // ]

    const skills = [
        { name: "HTML", img: html, percent: 95 },
        { name: "CSS", img: css, percent: 90 },
        { name: "JavaScript", img: js, percent: 85 },
        { name: "React", img: react, percent: 80 },
        { name: "Tailwind", img: tailwind, percent: 90 },
        { name: "Bootstrap", img: bootstrap, percent: 80 },
        { name: "Node.js", img: node, percent: 80 },
        { name: "Express", img: express, percent: 85 },
        { name: "MongoDB", img: mongo, percent: 75 },
        { name: "Next.js", img: next, percent: 50 },
        { name: "TypeScript", img: ts, percent: 40 },
    ]

    return (
        <section id='skills'
            className="min-h-screen flex items-center justify-center py-20 bg-linear-to-br from-black via-gray-900 to-blue-950">

            <div className="container mx-auto px-6 md:px-12">

                {/* heading */}
                <h2 data-aos="fade-down"
                    className="text-3xl md:text-5xl font-bold text-white text-center">
                    My <span className="text-blue-500">Skills</span>
                </h2>

                <p data-aos="fade-up"
                    data-aos-delay="100"
                    className="text-gray-400 text-center mt-4 max-w-xl mx-auto">
                    Technologies I use to build modern web applications.
                </p>


                {/* languages */}
                <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">

                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                            className="relative overflow-hidden group border border-blue-900/50 rounded-xl p-4 text-center
                                     bg-linear-to-br from-black/30 via-blue-900/30 to-blue-800/30
                                     backdrop-blur-md
                                     transition duration-300 cursor-pointer hover:scale-110 hover:border-blue-500"
                        >
                            {/* 🔥 Light sweep effect */}
                            <div className="absolute inset-0">
                                <div
                                    className="absolute top-0 -left-full h-full w-1/2 
                                         bg-linear-to-r from-transparent via-white/20 to-transparent
                                         skew-x-12
                                         group-hover:left-[150%]
                                         transition-all duration-700"
                                ></div>
                            </div>

                            {/* icon */}
                            <img
                                src={skill.img}
                                alt={skill.name}
                                className="w-12 h-12 mx-auto group-hover:scale-110 transition"
                            />

                            {/* name */}
                            <h3 className="mt-2 text-gray-300 group-hover:text-blue-400 transition text-sm">
                                {skill.name}
                            </h3>

                            {/* percentage */}
                            <p className="text-blue-400 text-xs mt-1">
                                {skill.percent}%
                            </p>

                            {/* progress bar */}
                            <div className="w-full h-2 bg-gray-800 rounded-full mt-2 overflow-hidden">
                                <div
                                    className="h-full bg-linear-to-r from-blue-500 via-indigo-600 to-violet-700 rounded-full transition-all duration-500"
                                    style={{ width: `${skill.percent}%` }}
                                ></div>
                            </div>

                        </div>
                    ))}

                </div>

                {/* tools */}
                <div className="mt-20">

                    <h3 data-aos="fade-down"
                        className="text-2xl md:text-3xl font-bold text-white text-center">
                        Tech <span className="text-blue-500">Tools</span>
                    </h3>

                    <p data-aos="fade-up"
                        data-aos-delay="100"
                        className="text-gray-400 text-center mt-3">
                        Tools I use for development workflow
                    </p>

                    <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">

                        {tools.map((tool, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="relative overflow-hidden group border border-blue-900/50 rounded-xl p-4 text-center
                                     bg-linear-to-br from-black/30 via-blue-900/30 to-blue-800/30
                                     backdrop-blur-md
                                     transition duration-300 cursor-pointer hover:scale-110 hover:border-blue-500"
                            >
                                {/* Light sweep effect */}
                                <div className="absolute inset-0">
                                    <div
                                        className="absolute top-0 -left-full h-full w-1/2 
                                         bg-linear-to-r from-transparent via-white/20 to-transparent
                                         skew-x-12
                                         group-hover:left-[150%]
                                         transition-all duration-700"
                                    ></div>
                                </div>

                                <img
                                    src={tool.img}
                                    alt={tool.name}
                                    className="w-12 h-12 mx-auto group-hover:scale-125 transition duration-300"
                                />

                                <h3 className="mt-3 text-gray-300 group-hover:text-violet-400 transition text-sm">
                                    {tool.name}
                                </h3>

                            </div>
                        ))}

                    </div>

                </div>

                {/* ai tools */}
                {/* <div className="mt-20">

                    <h3 className="text-2xl md:text-3xl font-bold text-white text-center">
                        AI <span className="text-blue-500">Tools</span>
                    </h3>

                    <p className="text-gray-400 text-center mt-3">
                        Tools I use for coding assistance & productivity
                    </p>

                    <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">

                        {aiTools.map((tool, index) => (
                            <div
                                key={index}
                                className="group bg-linear-to-br from-blue-900/20 via-black/20 to-violet-900/10
                                         backdrop-blur-md border border-blue-900/40 rounded-xl p-5 text-center
                                         hover:scale-110 hover:border-violet-500 
                                         hover:shadow-lg hover:shadow-violet-500/30
                                         transition duration-300 cursor-pointer"
                                         >

                                <img
                                    src={tool.img}
                                    alt={tool.name}
                                    className="w-12 h-12 mx-auto group-hover:scale-125 transition duration-300"
                                />

                                <h3 className="mt-3 text-gray-300 group-hover:text-blue-400 transition text-sm">
                                    {tool.name}
                                </h3>

                            </div>
                        ))}

                    </div>

                </div> */}

            </div>

        </section>
    )
}
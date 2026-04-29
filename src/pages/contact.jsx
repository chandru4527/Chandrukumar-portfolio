import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import animeboy from "../assets/avatar/contact2.png";

import { FiMail } from "react-icons/fi";

//  Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_b9gtrr4",
        "template_mzfagif",
        form.current,
        "YLPvzNUUbwKUz76aH"
      )
      .then(
        () => {
          toast.success("Message sent successfully");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          toast.error("Failed to send message");
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact">
      <div className="min-h-screen flex lg:block flex-col justify-center items-center py-20 bg-linear-to-br from-black via-gray-900 to-blue-950 px-5">

        {/* tittle */}
        <div data-aos="fade-down"
          className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white">
            Get in <span className="text-blue-500">Touch</span>
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            Have a project or question? Feel free to reach out.
          </p>
        </div>

        <div className="flex flex-col justify-center lg:flex-row gap-10 items-center">

          {/* img */}
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex justify-center items-center relative lg:w-1/2"
          >

            <img
              src={animeboy}
              alt="contact"
              className="relative z-10 w-full max-w-md lg:scale-105 rounded"
            />
          </div>

          {/* form */}
          <div
            data-aos="fade-down"
            data-aos-delay="300"
            className="flex justify-center items-center mt-10 lg:mt-0"
          >
            <div className="w-full max-w-lg p-8 rounded-2xl border 
                       bg-slate-900/80 backdrop-blur-md
                       border-blue-900/50
                       shadow-lg shadow-blue-500/10
                       h-full flex flex-col justify-center">

              {/* form here */}

              <form ref={form} onSubmit={sendEmail} className="space-y-5">

                {/* First , Last Name */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="relative">
                    <input name="first_name" type="text" required placeholder=" "
                      className="peer w-full p-3 bg-transparent border border-blue-900/50 rounded-md text-white focus:outline-none focus:border-blue-500" />
                    <label
                      className="absolute left-3 -top-2 text-sm text-blue-400 px-1
             bg-[#0f1726]
             transition-all
             
             peer-placeholder-shown:top-3 
             peer-placeholder-shown:text-base 
             peer-placeholder-shown:text-gray-400

             peer-focus:-top-3 
             peer-focus:text-sm 
             peer-focus:text-blue-400

             peer-valid:-top-3
             peer-valid:text-sm
             peer-valid:text-blue-400"
                    >
                      First Name
                    </label>
                  </div>

                  <div className="relative">
                    <input name="last_name" type="text" required placeholder=" "
                      className="peer w-full p-3 bg-transparent border border-blue-900/50 rounded-md text-white focus:outline-none focus:border-blue-500" />
                    <label
                      className="absolute left-3 -top-2 text-sm text-blue-400 px-1
            bg-[#11192b]
             transition-all
             
             peer-placeholder-shown:top-3 
             peer-placeholder-shown:text-base 
             peer-placeholder-shown:text-gray-400

             peer-focus:-top-3 
             peer-focus:text-sm 
             peer-focus:text-blue-400

             peer-valid:-top-3
             peer-valid:text-sm
             peer-valid:text-blue-400"
                    >
                      Last Name
                    </label>
                  </div>
                </div>

                {/* Mobile */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="relative"
                >
                  <input name="mobile" type="tel" required placeholder=" "
                    className="peer w-full p-3 bg-transparent border border-blue-900/50 rounded-md text-white focus:outline-none focus:border-blue-500" />
                  <label
                    className="absolute left-3 -top-2 text-sm text-blue-400 px-1
             bg-[#121a2e]
             transition-all
             
             peer-placeholder-shown:top-3 
             peer-placeholder-shown:text-base 
             peer-placeholder-shown:text-gray-400

             peer-focus:-top-3 
             peer-focus:text-sm 
             peer-focus:text-blue-400

             peer-valid:-top-3
             peer-valid:text-sm
             peer-valid:text-blue-400"
                  >
                    Mobile Number
                  </label>
                </div>

                {/* Email */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="600"
                  className="relative"
                >
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder=" "
                    className="peer w-full p-3 bg-transparent border border-blue-900/50 rounded-md text-white 
               focus:outline-none focus:border-blue-500"
                  />

                  <label
                    className="absolute left-3 -top-3 text-sm text-blue-400 px-1
             bg-[#111a30]
             transition-all
             
             peer-placeholder-shown:top-3 
             peer-placeholder-shown:text-base 
             peer-placeholder-shown:text-gray-400

             peer-focus:-top-3 
             peer-focus:text-sm 
             peer-focus:text-blue-400

             peer-valid:-top-3
             peer-valid:text-sm
             peer-valid:text-blue-400"
                  >
                    Email
                  </label>
                </div>

                {/* Message */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="relative"
                >
                  <textarea name="message" rows="4" required placeholder=" "
                    className="peer w-full p-3 bg-transparent border border-blue-900/50 rounded-md text-white focus:outline-none focus:border-blue-500"></textarea>
                  <label
                    className="absolute left-3 -top-2 text-sm text-blue-400 px-1
             bg-[#121b33]
             transition-all
             
             peer-placeholder-shown:top-3 
             peer-placeholder-shown:text-base 
             peer-placeholder-shown:text-gray-400

             peer-focus:-top-3 
             peer-focus:text-sm 
             peer-focus:text-blue-400

             peer-valid:-top-3
             peer-valid:text-sm
             peer-valid:text-blue-400"
                  >
                    Message
                  </label>
                </div>

                {/* BUTTON */}
                <button data-aos="zoom-in"
                  data-aos-delay="800"
                  type="submit"
                  disabled={loading}
                  className="relative w-full py-3 rounded-md text-white font-semibold
             bg-linear-to-r from-blue-600 to-blue-800 cursor-pointer
             hover:from-blue-500 hover:to-blue-700
             transition duration-300 overflow-hidden group disabled:opacity-60"
                >
                  {/* Shine Effect */}
                  <span className="absolute inset-0">
                    <span className="absolute top-0 -left-full h-full w-1/2
                                    bg-linear-to-r from-transparent via-white/30 to-transparent
                                    skew-x-12 group-hover:left-[150%]
                                    transition-all duration-700"></span>
                  </span>

                  {/* Content */}
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <FiMail className="text-lg" />
                    {loading ? "Sending..." : "Send Message"}
                  </span>
                </button>

              </form>

            </div>
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
  );
};
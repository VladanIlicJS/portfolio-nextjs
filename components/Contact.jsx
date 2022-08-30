import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {HiOutlineChevronDoubleUp} from "react-icons/hi"
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get in Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="col-span-3 xl:col-span-2 shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <img
                className="rounded-xl hover:scale-105 ease-in duration-300"
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                alt="/"
              />
              <div>
                <h2 className="py-2">Vladan Ilic</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I'm available for freelance of full-time positions. Contact me
                  and let's talk
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with me</p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                  <div className="rounded-full shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="col-span-2 xl:col-span-3 shadow-xl shadow-gray-400 rounded-xl p-4">
            <form className="lg:p-4">
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Name</label>
                  <input
                    type="text"
                    className="border-2 rounded-xl p-3 flex border-gray-300"
                  />
                </div>
                
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Phone Number</label>
                  <input
                    type="text"
                    className="border-2 rounded-xl p-3 flex border-gray-300"
                  />
                </div>

              </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input
                    type="email"
                    className="border-2 rounded-xl p-3 flex border-gray-300"
                    />
                </div>

                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Subject</label>
                    <input
                    type="email"
                    className="border-2 rounded-xl p-3 flex border-gray-300"
                    />
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea
                    type="text"
                    className="border-2 rounded-xl p-3 flex border-gray-300"
                    rows={10}
                    ></textarea>
                </div>
                <button className="w-full py-4 mt-4 text-gray-100">Send Message</button>
            </form>
        
          </div>
        </div>
        <div className="flex justify-center py-12">
            <Link href="/">
                <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                    <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30}/>
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

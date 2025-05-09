import React from "react";
import {
  IoCallOutline,
  IoVideocamOutline,
  IoImageOutline,
} from "react-icons/io5";
import { MdOutlineSentimentNeutral } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

const Inbox = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full sm:w-[65%] lg:w-[60%] flex flex-col bg-gradient-to-br from-pink-100/30 via-pink-50/30 to-sky-100/30 backdrop-blur-md border border-white/30 shadow-lg mt-1 self-start h-[98%] rounded-xl">
      {/* Top Header */}
      <div className="flex items-center justify-between bg-white/90 p-4 pt-9 rounded-t-xl shadow-sm">
        {/* Left Side: Back Button + Avatar + Name */}
        <div className="flex items-center gap-3">
          <button
            className="block sm:hidden text-xl text-gray-600 hover:text-pink-500 transition-colors duration-200"
            onClick={() => navigate("/home")}
          >
            <IoChevronBack />
          </button>

          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30 hover:border-pink-200 transition-all duration-300">
              <img
                src="/avatar_1.jpg"
                alt="Avatar"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="font-semibold text-gray-700">smokey_ricin</span>
          </div>
        </div>

        {/* Right Side: Call & More Options */}
        <div className="flex items-center gap-4 text-xl">
          <IoCallOutline className="cursor-pointer text-sky-500 hover:text-sky-600 transition-colors duration-200" />
          <IoVideocamOutline className="cursor-pointer text-sky-500 hover:text-sky-600 transition-colors duration-200" />
          <PiDotsThreeVerticalBold className="cursor-pointer text-pink-500 hover:text-pink-600 transition-colors duration-200" />
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg text-sm max-w-xs md:max-w-md ${
                index % 2 === 0
                  ? "bg-white/90 text-gray-800"
                  : "bg-gradient-to-r from-pink-400 to-sky-400 text-white shadow-md"
              }`}
            >
              {index % 2 === 0
                ? "Hi there! How are you doing today?"
                : "I'm great! Just working on some new features for our app."}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Input */}
      <div className="p-4 flex items-center gap-3  bg-gradient-to-br from-pink-100/50 via-pink-50/50 to-sky-100/50 backdrop-blur-md rounded-b-xl">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-200"
        />
        <div className="flex items-center gap-2 text-xl">
          <MdOutlineSentimentNeutral className="cursor-pointer text-sky-500 hover:text-sky-600 transition-colors duration-200" />
          <IoImageOutline className="cursor-pointer text-sky-500 hover:text-sky-600 transition-colors duration-200" />
          <IoMdSend className="cursor-pointer text-pink-500 hover:text-pink-600 transition-colors duration-200" />
        </div>
      </div>
    </div>
  );
};

export default Inbox;

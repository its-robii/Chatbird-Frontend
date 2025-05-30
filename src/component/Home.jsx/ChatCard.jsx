import React from "react";

const ChatCard = ({ name, avatar, message, time, isActive }) => {
  const firstLetter = name?.charAt(0).toUpperCase();

  return (
    <div className="group flex items-center justify-between hover:bg-[#f5c6f9c3] duration-100 p-4 rounded-lg cursor-pointer">
      <div className="flex items-center gap-3 relative">
        <div className="relative w-10 h-10">
          <div
            className={`w-10 h-10 rounded-full overflow-hidden flex items-center justify-center text-white font-bold text-lg ${
              avatar ? "" : "bg-pink-400"
            } ${
              isActive
                ? "ring-2 ring-green-400 ring-offset-2 ring-offset-white"
                : ""
            }`}
          >
            {avatar ? (
              <img
                src={avatar}
                alt={name}
                className="object-cover w-full h-full rounded-full"
              />
            ) : (
              firstLetter
            )}
          </div>

          {isActive && (
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-ping"></span>
          )}
        </div>

        <div className="flex flex-col">
          <span className="font-semibold text-[#222222]">{name}</span>
          <span className="text-gray-400 text-sm group-hover:text-black line-clamp-1">
            {message}
          </span>
        </div>
      </div>

      <span className="text-gray-400 text-xs">{time}</span>
    </div>
  );
};

export default ChatCard;




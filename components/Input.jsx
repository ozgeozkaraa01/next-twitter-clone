import React from "react";
import { HiOutlinePhotograph, HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineGifBox, MdOutlineSchedule } from "react-icons/md";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";

const Input = () => {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
      <img
        src="https://pbs.twimg.com/profile_images/1661801313137459201/SsWlQ5GF_400x400.jpg"
        alt="picture"
        className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"
      />
      <div className="w-full divide-y divide-gray-200">
        <div>
          <textarea
            rows="2"
            placeholder="What is happening?!"
            className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
          ></textarea>
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex">
            <HiOutlinePhotograph className="h-9 w-9 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
            <MdOutlineGifBox className="h-9 w-9 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
            <BiPoll className="h-9 w-9 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
            <BsEmojiSmile className="h-9 w-9 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
            <MdOutlineSchedule className="h-9 w-9 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
            <HiOutlineLocationMarker className="h-9 w-9 p-2 text-sky-200" />
          </div>
          <button className="bg-blue-400 text-white px-4 py-1.5 font-medium rounded-full">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;

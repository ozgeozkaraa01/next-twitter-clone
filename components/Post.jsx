import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { TbRepeat } from "react-icons/tb";
import { HiOutlineHeart } from "react-icons/hi";
import { RiChat3Line } from "react-icons/ri";
import { MdOutlineFileUpload } from "react-icons/md";

const Post = ({ post }) => {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
      {/* user image */}
      <img
        className="h-11 w-11 rounded-full mr-4"
        src={post.userImg}
        alt="image"
      />
      {/* right side */}
      <div>
        {/* header */}
        <div className="flex items-center justify-between">
          {/* post user info */}
          <div className="flex space-x-1 whitespace-nowrap items-center">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
              {post.name}
            </h4>
            <span className="text-sm sm:text-[15px]">@{post.username}</span>
            <span className="text-sm sm:text-[15px] hover:underline">
              · {post.timestamp}
            </span>
          </div>
          {/* dot icon */}
          <BsThreeDots className="h-10 w-10 hoverEffect hover:bg-sky-100 hover:text-sky-500 p-2" />
        </div>
        {/* post text */}
        <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">
          {post.text}
        </p>
        {/* post image */}
        <img className="rounded-2xl mr-2" src={post.img} alt="picture" />
        {/* icons */}
        <div className="flex justify-between text-gray-500 p-2">
          <RiChat3Line className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-50" />
          <TbRepeat className="h-9 w-9 hoverEffect p-2 hover:text-green-500 hover:bg-green-50" />
          <HiOutlineHeart className="h-9 w-9 hoverEffect p-2 hover:text-rose-500 hover:bg-rose-50" />
          <MdOutlineFileUpload className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-50" />
        </div>
      </div>
    </div>
  );
};

export default Post;

import Image from "next/image";
import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";
import { BiHomeCircle, BiSearch } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";
import { RiFileListLine } from "react-icons/ri";
import { PiBookmarkSimple } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { MdOutlineVerified } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { LuMail } from "react-icons/lu";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
      {/* Twitter Logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image
          width="50"
          height="50"
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
        />
      </div>

      {/* Menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={BiHomeCircle} active />
        <SidebarMenuItem text="Explore" Icon={BiSearch} />
        <SidebarMenuItem text="Notifications" Icon={GrNotification} />
        <SidebarMenuItem text="Messages" Icon={LuMail} />
        <SidebarMenuItem text="Lists" Icon={RiFileListLine} />
        <SidebarMenuItem text="Bookmarks" Icon={PiBookmarkSimple} />
        <SidebarMenuItem text="Communities" Icon={FiUsers} />
        <SidebarMenuItem text="Verified" Icon={MdOutlineVerified} />
        <SidebarMenuItem text="Profile" Icon={FaRegUser} />
        <SidebarMenuItem text="More" Icon={HiOutlineDotsCircleHorizontal} />
      </div>

      {/* Button */}
      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
        Tweet
      </button>

      {/* Mini-Profile */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <img
          src="https://pbs.twimg.com/profile_images/1661801313137459201/SsWlQ5GF_400x400.jpg"
          alt="user-img"
          className="h-10 w-10 rounded-full xl:mr-2"
        />
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">Özgenur Özkara</h4>
          <p className="text-gray-500">@ozkaraozgee</p>
        </div>
        <BiDotsHorizontalRounded className="h-5 xl:ml-8 hidden xl:inline" />
      </div>
    </div>
  );
};

export default Sidebar;

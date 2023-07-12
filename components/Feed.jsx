import React from "react";
import { HiOutlineSparkles } from "react-icons/hi";
import Input from "./Input";
import Post from "./Post";

const Feed = () => {
  const posts = [
    {
      id: "1",
      name: "Özgenur Özkara",
      username: "ozkaraozgee",
      userImg:
        "https://pbs.twimg.com/profile_images/1661801313137459201/SsWlQ5GF_400x400.jpg",
      img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
      text: "nice view!",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "Oğuzhan Yüksel",
      username: "codewithoguz",
      userImg: "https://avatars.githubusercontent.com/u/56235622?v=4",
      img: "https://images.unsplash.com/photo-1588032786045-59cefda005c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2088&q=80",
      text: "drummer!",
      timestamp: "2 days ago",
    },
  ];
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <HiOutlineSparkles className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;

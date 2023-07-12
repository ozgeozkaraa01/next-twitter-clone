import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import News from "./News";
import Link from "next/link";

const Widgets = ({ newsResults, randomUsersResults }) => {
  const [articleNum, setArticleNum] = useState(10);
  const [randomUserNum, setRandomUserNum] = useState(3);

  return (
    <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
      <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
        <div className="flex items-center p-3 rounded-full bg-red-300 relative">
          <FiSearch className="h-5 z-50 text-gray-500" />
          <input
            className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100 "
            type="text"
            placeholder="Search Twitter"
          />
        </div>
      </div>
      <div className="space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%] flex flex-col items-start justify-start p-2">
        <h4 className="font-bold text-xl">Get Verified</h4>
        <p className="font-bold">Subscribe to unlock new features.</p>
        <Link
          href="/"
          className="bg-black text-white py-2 px-5 rounded-full font-semibold hover:opacity-75"
        >
          Get Verified
        </Link>
      </div>
      <div className="space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
        <h4 className="font-bold text-xl px-4">Trends for you</h4>
        {newsResults.slice(0, articleNum).map((article) => (
          <News key={article.title} article={article} />
        ))}
        <button
          onClick={() => setArticleNum(articleNum + 10)}
          className="text-blue-300 pl-4 pb-3 hover:text-blue-400"
        >
          Show more
        </button>
      </div>
      <div className="sticky top-16 space-y-3 bg-gray-100 pt-2 rounded-xl w-[90%] xl:w-[75%]">
        <h4 className="font-bold text-xl px-4">Who to follow</h4>
        {randomUsersResults.slice(0, randomUserNum).map((randomUser) => (
          <div
            key={randomUser.login.username}
            className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200"
          >
            <img
              className="rounded-full"
              width="40"
              src={randomUser.picture.thumbnail}
              alt="picture"
            />
            <div className="truncate ml-4 leading-5">
              <h4 className="font-bold hover:underline text-[14px] truncate">
                {randomUser.login.username}
              </h4>
              <h5 className="text-[13px] text-gray-500 truncate">
                {randomUser.name.first + " " + randomUser.name.last}
              </h5>
            </div>
            <button className="ml-auto bg-black text-white rounded-full text-sm px-3.5 py-1.5 font-bold">
              Follow
            </button>
          </div>
        ))}
        <button
          onClick={() => setRandomUserNum(randomUserNum + 3)}
          className="text-blue-400 pl-4 pb-3"
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default Widgets;

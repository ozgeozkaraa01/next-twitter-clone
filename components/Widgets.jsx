import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import News from "./News";
import Link from "next/link";

const Widgets = ({ newsResults }) => {
  const [articleNum, setArticleNum] = useState(10);
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
    </div>
  );
};

export default Widgets;

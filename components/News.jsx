import Link from "next/link";
import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const News = ({ article }) => {
  return (
    <div>
      <Link href={article.url} target="_blank">
        {" "}
        <div className="flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-200 transition duration-200">
          <div className="space-y-0.5">
            <h6 className="text-sm font-bold">{article.title}</h6>
            <p className="text-xs font-medium text-gray-500">
              {article.source.name}
            </p>
          </div>
          <BiDotsHorizontalRounded className="h-8 w-8 text-gray-600" />
        </div>
      </Link>
    </div>
  );
};

export default News;

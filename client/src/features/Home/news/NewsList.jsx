import React from "react";
// utils
import formatDate from "../../../utils/dateUtils";
import { Link } from "react-router-dom";

export default function NewsList({ news, title }) {
  return (
    <div className="py-4">
      <span className="border-l-4 border-l-orange-500 px-3 text-xl font-semibold">
        {title}
      </span>
      <div className="mt-4 grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3 lg:gap-x-6">
        {news.map((blog) => (
          <Link to={`/storyholic/${blog.id}`} key={blog.id}>
            <img
              className="h-[180px] w-full cursor-pointer rounded-lg bg-cover bg-center bg-no-repeat object-cover transition duration-300 hover:scale-105"
              src={blog.image}
              alt="deptrai"
            />
            <div className="px-1 py-3">
              <span className="text-gray-500">
                {formatDate(blog.createdAt)}
              </span>
              <p className="text-lg truncate cursor-pointer hover:text-orange-400 transition-all duration-300 font-semibold uppercase leading-10">
                {blog.title}
              </p>
              <p className="line-clamp-3 ">{blog.content}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

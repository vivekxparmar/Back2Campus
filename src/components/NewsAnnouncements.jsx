import { useEffect, useState } from "react";
import newsData from "../data/newsdata";

const NewsAnnouncements = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(newsData);
  }, []);

  return (
    <div className="bg-gray-900 text-white my-[50px] py-3 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-[1250px] h-full flex items-center">
        <div className="bg-red-600 text-white px-4 py-2 text-sm font-bold uppercase shadow-lg z-10">
          Updates & News
        </div>
      </div>
      <div className="w-full whitespace-nowrap overflow-hidden">
        <div className="flex space-x-8 animate-scroll">
          {news.map((item, index) => (
            <div
              key={index}
              className="inline-block px-6 py-2 text-lg font-medium text-gray-200 hover:text-white transition"
            >
              {item.title} - <span className="text-gray-400">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(-100%);
            }
          }
          .animate-scroll {
            display: flex;
            animation: scroll 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default NewsAnnouncements;

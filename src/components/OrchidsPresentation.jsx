import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OrchidsPresentation = ({ orchids }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={
        isDarkMode
          ? "dark bg-gray-900 text-gray-200"
          : "light bg-white text-gray-900"
      }
    >
      <div className="container mx-auto py-12 px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-center flex-grow">
            Danh sách Hoa Lan
          </h2>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            {isDarkMode ? "🌙 Chế độ tối" : "☀️ Chế độ sáng"}
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {orchids.map((orchid) => (
            <motion.div
              key={orchid.id}
              className="bg-white shadow-md rounded-lg p-4 text-center transform transition hover:scale-105 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={orchid.image}
                alt={orchid.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-2">{orchid.name}</h3>
              <p className="text-gray-600">{orchid.origin}</p>
              <p className="text-gray-600">Đánh giá: {orchid.rating}⭐</p>
              <p className="text-gray-600">Lượt thích: {orchid.numberOfLike}❤️</p>
              <div className="mt-4 flex justify-between">
                <button
                  className="px-4 py-2 bg-red-300 text-white rounded-lg shadow-md hover:bg-red-400 transition"
                  onClick={() => alert("Đã thêm vào giỏ hàng!")}
                >
                  Thêm vào giỏ hàng
                </button>
                <Link
                  to={`/shop/${orchid.id}`}
                  className="px-4 py-2 bg-gray-400 text-white rounded-lg shadow-md hover:bg-gray-500 transition"
                >
                  Xem chi tiết
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrchidsPresentation;

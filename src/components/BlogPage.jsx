import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-6">
        {/* Tiêu đề chính */}
        <motion.h1
          className="text-4xl font-bold mb-4 text-center text-indigo-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          📝 Blog về Hoa Lan 🌿
        </motion.h1>

        {/* Mô tả ngắn */}
        <motion.p
          className="text-lg text-gray-700 text-center mb-6 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Cập nhật những bài viết mới nhất về các loại hoa lan, mẹo chăm sóc và
          xu hướng hoa lan hiện nay! 🌸✨
        </motion.p>

        {/* Danh sách bài viết */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <div
              key={id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-indigo-600">
                Bài viết {id}
              </h2>
              <p className="text-gray-600 mt-2">
                Đây là phần mô tả ngắn về bài viết {id}. Hãy đọc để khám phá
                thêm!
              </p>
              <Link
                to={`/blog/${id}`}
                className="text-indigo-500 mt-3 inline-block hover:underline"
              >
                Đọc tiếp →
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default BlogPage;

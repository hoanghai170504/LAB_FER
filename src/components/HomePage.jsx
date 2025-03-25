import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from "framer-motion";

const HomePage = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      {/* Tiêu đề chính */}
      <motion.h1
        className="text-4xl font-bold mb-4 text-center text-indigo-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🏵️ Welcome to Orchid Collection 🏵️
      </motion.h1>

      {/* Mô tả ngắn */}
      <motion.p
        className="text-lg text-gray-700 text-center mb-6 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Khám phá bộ sưu tập các loài hoa lan tuyệt đẹp trên thế giới. Hãy tìm
        hiểu về nguồn gốc, màu sắc và cách chăm sóc hoa lan ngay hôm nay! 🌿✨
      </motion.p>

      {/* Nút điều hướng */}
      <motion.div
        className="flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <Link
          to="/shop"
          className="px-6 py-3 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition"
        >
          🌸 Xem bộ sưu tập
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 bg-gray-400 text-white rounded-lg shadow-md hover:bg-gray-500 transition"
        >
          📩 Liên hệ
        </Link>
      </motion.div>

      {user && (
        <motion.div 
          className="mt-4 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Xin chào, {user.name}! 👋
        </motion.div>
      )}
    </div>
  );
};

export default HomePage;

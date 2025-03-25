import React from "react";
import { motion } from "framer-motion";

const UserInfoPage = () => {
  const user = {
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone: "0123-456-789",
    address: "123 Đường Hoa Lan, TP. Hồ Chí Minh",
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-6">
        {/* Tiêu đề */}
        <motion.h1
          className="text-4xl font-bold mb-4 text-center text-indigo-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          👤 Thông Tin Người Dùng
        </motion.h1>

        {/* Thông tin người dùng */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-lg font-semibold text-gray-800">
            Họ và Tên: {user.name}
          </p>
          <p className="text-lg text-gray-700 mt-2">📧 Email: {user.email}</p>
          <p className="text-lg text-gray-700 mt-2">
            📞 Số điện thoại: {user.phone}
          </p>
          <p className="text-lg text-gray-700 mt-2">
            🏡 Địa chỉ: {user.address}
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default UserInfoPage;

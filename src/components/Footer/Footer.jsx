import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Cột 1: Thông tin cửa hàng */}
          <div>
            <h2 className="text-lg font-semibold">🌿 Orchid Store</h2>
            <p className="text-sm mt-2">
              Chuyên cung cấp các loại lan đẹp, quý hiếm & chất lượng cao.
            </p>
          </div>

          {/* Cột 2: Liên kết nhanh */}
          <div>
            <h2 className="text-lg font-semibold">Liên kết</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Cửa hàng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Cột 3: Kết nối mạng xã hội */}
          <div>
            <h2 className="text-lg font-semibold">Kết nối với chúng tôi</h2>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <a href="#" className="hover:text-blue-400">
                <Facebook />
              </a>
              <a href="#" className="hover:text-pink-400">
                <Instagram />
              </a>
              <a href="#" className="hover:text-blue-300">
                <Twitter />
              </a>
            </div>
          </div>
        </div>

        {/* Dòng bản quyền */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Orchid Store 🌿 - Tất cả quyền được bảo
            lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

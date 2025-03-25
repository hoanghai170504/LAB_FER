import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { GoogleLogin } from '@react-oauth/google';

const Navbar = () => {
  const { user, login, logout, error } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">Orchid Collection</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/shop" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-indigo-500">
                Shop
              </Link>
              <Link to="/contact" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-indigo-500">
                Contact
              </Link>
              <Link to="/blog" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-indigo-500">
                Blog
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            {error && (
              <span className="text-red-500 mr-4 text-sm">{error}</span>
            )}
            {user ? (
              <div className="flex items-center space-x-4">
                {user.picture && (
                  <img
                    src={user.picture}
                    alt={user.name}
                    className="h-8 w-8 rounded-full"
                  />
                )}
                <span className="text-gray-700">{user.name}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                >
                  Đăng xuất
                </button>
              </div>
            ) : (
              <div className="flex items-center">
                <GoogleLogin
                  onSuccess={login}
                  onError={(error) => {
                    console.error('Đăng nhập thất bại:', error);
                  }}
                  useOneTap={false}
                  theme="outline"
                  size="large"
                  type="standard"
                  shape="rectangular"
                  text="signin_with"
                  locale="vi"
                  width={240}
                  cookiePolicy={'single_host_origin'}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

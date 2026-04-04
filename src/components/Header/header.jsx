import React, { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInout } from "../../store/authSlice";

const Header = ({ error }) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth); // to trigger re-render on auth state change

  const handleLoginLogout = () => {
    dispatch(logInout());
  };

  return (
    <header className="bg-gray-900 text-white">
      <div className="flex gap-6 p-4">
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">MyApp</h1>

        {/* Links */}
        <nav className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            About
          </a>
          <a href="#" className="hover:text-gray-300">
            Services
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </nav>

        {/* Button */}
        <button
          className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={handleLoginLogout}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </header>
  );
};

export default Header;

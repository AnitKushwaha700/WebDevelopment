import React from "react";
import { Link } from "react-router-dom";
import { FaStore } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="bg-blue-500 flex justify-between items-center p-3">
        <FaStore className="text-2xl text-white" />
        <div className="text-white flex gap-5">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/order">Orders</Link>
          <Link to="/product">Product</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="flex gap-4">
          <Link
            to="/login"
            className="border text-white px-2 py-1  rounded hover:bg-blue-700"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="border text-white px-2 py-1 rounded hover:bg-blue-700"
          >
            Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

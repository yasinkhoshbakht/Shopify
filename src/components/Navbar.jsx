import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold">
          Shopify
        </NavLink>
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/" className="hover:text-gray-200">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="hover:text-gray-200">
              Products
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

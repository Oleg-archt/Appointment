import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      {" "}
      <Link to="/">
        <img src={assets.logo} alt="" className="w-44 cursor-pointer" />
      </Link>
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">All Doctors</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>{" "}
        <NavLink to="/about">
          <li className="py-1">About</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>{" "}
        <NavLink to="/contact">
          <li className="py-1">Contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              src={assets.profile_pic}
              alt=""
              className="w-10 rounded-full"
            />
            <img src={assets.dropdown_icon} alt="" className="w-2.5" />
            <div className="absolute top-1 right-0 pt-14 text-base font-medium text-gray-500 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  className="hover:text-black cursor-pointer"
                  onClick={() => navigate("/my-profile")}
                >
                  My profile
                </p>
                <p
                  className="hover:text-black cursor-pointer"
                  onClick={() => navigate("/my-appointment")}
                >
                  My appointment
                </p>
                <p
                  className="hover:text-black cursor-pointer"
                  onClick={() => setToken(false)}
                >
                  Log out
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
            onClick={() => navigate("/login")}
          >
            Create account
          </button>
        )}
        <img
          src={assets.menu_icon}
          alt=""
          className="w-6 md:hidden"
          onClick={() => setShowMenu(true)}
        />
      </div>
      <div
        className={`${
          showMenu ? "fixed w-full" : "h-0 w-0"
        } md:hidden ring-0 top-0 bottom-0 z-20 overflow-hidden bg-white  transition-all`}
      >
        <div className="flex items-center justify-between px-5 py-6">
          <img src={assets.logo} alt="" className="w036" />
          <img
            src={assets.cross_icon}
            className="w-7"
            alt=""
            onClick={() => setShowMenu(false)}
          />
        </div>
      </div>
      {/* <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
        <NavLink
          to="/"
          onClick={() => setShowMenu(false)}
          className="px-4 py-2 rounded inline-block"
        >
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/doctors"
          onClick={() => setShowMenu(false)}
          className="px-4 py-2 rounded inline-block"
        >
          <p> All Doctors</p>
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => setShowMenu(false)}
          className="px-4 py-2 rounded inline-block"
        >
          <p>About</p>
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => setShowMenu(false)}
          className="px-4 py-2 rounded inline-block"
        >
          <p> Contact</p>
        </NavLink>
      </ul> */}
    </div>
  );
};

export default Navbar;

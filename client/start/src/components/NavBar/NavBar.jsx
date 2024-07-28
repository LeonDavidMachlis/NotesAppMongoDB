import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
const NavBar = () => {
  return (
    <div className="bg-[#212121]">
      <nav className="flex justify-between px-4 gap-4 list-none mx-auto container  h-12  items-center text-cyan-50 text-lg sticky">
        <ul className="flex gap-5">
          <li>
            <Link to="/">home</Link>
          </li>

          <li>
            <Link to="/signIn">signIn</Link>
          </li>
          <li>
            <Link to="/logIn">logIn</Link>
          </li>
        </ul>
        <ul className="flex gap-5">
          <Link to="/notes">create note</Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;

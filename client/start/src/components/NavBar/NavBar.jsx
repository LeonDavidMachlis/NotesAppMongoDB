import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <ul className="flex justify-between px-4 gap-4 list-none bg-gray-800 h-12  items-center text-cyan-50 ">
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/signIn">signIn</Link>
      </li>
      <li>log in</li>
      <li>create note</li>
      <li>asdasd</li>
      <li>asdasd</li>
    </ul>
  );
}

export default NavBar
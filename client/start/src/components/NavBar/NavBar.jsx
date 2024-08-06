import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../config/fire-base";
import { onAuthStateChanged, signOut } from "firebase/auth";

const NavBar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  return (
    <div className="bg-[#212121]">
      <nav className="flex justify-between px-4 gap-4 list-none mx-auto container h-12 items-center text-cyan-50 text-lg sticky">
        <ul className="flex gap-5">
          {user ? (
            <>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/notes">create note</Link>
              </li>
              <li>
                <button onClick={handleSignOut}>sign out</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/signIn">signIn</Link>
              </li>
              <li>
                <Link to="/logIn">logIn</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;

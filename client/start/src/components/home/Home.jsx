import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../config/fire-base";
import { onAuthStateChanged } from "firebase/auth";

export default function AppHome() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGetStarted = () => {
    if (user) {
      navigate("/notes");
    } else {
      navigate("/signIn");
    }
  };

  return (
    <div className="container mx-auto mt-16 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center">
        <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-xl border border-gray-200">
          <h1 className="text-center text-5xl font-extrabold text-gray-900 mb-8">
            Welcome to Our Exclusive Notes App
          </h1>
          <ul className="list-disc pl-6 space-y-4 text-gray-800 text-lg">
            <li>
              Make daily reminders and never forget important tasks again!
            </li>
            <li>Effortlessly mark tasks as completed</li>
            <li>Easily remove completed tasks</li>
            <li>
              Create unlimited reminder notes to stay organized and efficient
            </li>
          </ul>
          <div className="text-center mt-8">
            <button
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

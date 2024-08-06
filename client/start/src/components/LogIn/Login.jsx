import { useRef, useState, useEffect } from "react";
import { auth } from "../../../config/fire-base";
import {
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        navigate("/notes");
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const formSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      );
      navigate("/notes");
    } catch (e) {
      console.error(e);
    }
  };

  const password = useRef(null);
  const email = useRef(null);

  const logIn = () => (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <form
        className="flex flex-col gap-10 border-2 border-neutral relative bottom-12 px-24 py-36"
        onSubmit={formSubmit}
      >
        <h2 className="text-4xl font-bold dark:text-white text-center relative bottom-8">
          התחברות
        </h2>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="email"
            name="email"
            ref={email}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="password"
            name="password"
            ref={password}
          />
        </label>
        <div className="flex flex-col gap-2">
          <h1 className="link">forgot password</h1>
          <button className="btn btn-block">sign in</button>
        </div>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="text-white hover:underline absolute top-4 left-4"
        >
          חזור
        </button>
      </form>
    </div>
  );

  return (
    <>
      {user ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <button
            onClick={() => {
              signOut(auth);
              navigate("/");
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600"
          >
            Sign Out {user.email}
          </button>
        </div>
      ) : (
        logIn()
      )}
    </>
  );
};

export default Login;

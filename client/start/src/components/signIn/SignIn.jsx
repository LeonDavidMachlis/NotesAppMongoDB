import React, { useRef } from "react";
import axios from 'axios'


const SignIn = () => {
  const email = useRef(null);
  const password = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.current.value && email.current.value) {
      console.log(email.current.value);
      console.log(password.current.value);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <form
        className=" box-content w-[40svh] h-[70svh] border-2 border-yellow-300 bg-white/50 flex flex-col gap-4 "
        onSubmit={(e) => handleSubmit(e)}
      >
        <h1 className=" text-5xl mt-12 text-center text-sky-950 ">Sign in </h1>
        {/* <input type="email" ref={email} required className=' input' /> */}
        {/* <input type='password' ref={password}  required className='input '/> */}

        <h1>email</h1>
        <input
          type="email"
          name="email"
          placeholder="email"
          ref={email}
          className="input input-bordered w-full "
          required
        />

        <h1 className="mt-6">password</h1>

        <input
          name="password"
          type="password"
          placeholder="Type here"
          ref={password}
          className="input input-bordered w-full "
          required
        />

        <button className="btn mx-auto border-2 btn-block mt-24">submit</button>
      </form>
    </div>
  );
};

export default SignIn;

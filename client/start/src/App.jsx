import { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import NavBar from "./components/NavBar";
import Notes from "./components/notes/Notes";
import { Outlet } from "react-router-dom";

function App() {
  useEffect(() => {
    const f = async () => {
      const { data } = await axios.get("/api");
      console.log(data);
    };
    f();
  }, []);
  return (
    <div className="min-h-screen">
        <NavBar />
        <Outlet/>
    </div>
  );
}

export default App;

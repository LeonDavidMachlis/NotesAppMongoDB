import { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import NavBar from "./components/NavBar";

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
      <div className="container mx-auto ">
      </div>
    </div>
  );
}

export default App;

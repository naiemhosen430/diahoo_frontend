import React from "react";
import Feed from "./Components/Feed";
import "./Components/style.css";

function Home() {
  return (
    <div className="col-span-3 h-screen overflow-y-auto custom-scrollbar-hidden">
      <Feed />
    </div>
  );
}

export default Home;

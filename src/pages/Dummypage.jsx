import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "./dummypage.css";

const Dummypage = () => {
  return (
    <div className="dummypage">
      <figure id="figureMan">
        <img id="imgWalkingMan" src="https://i.imgur.com/6qHPADK.gif" />
      </figure>
      <div className="dummyTitle">
        <p>Hi! We are working on this page</p>
        <Link to="/">
          <button id="dummyBtn">Return to Dashboard</button>
        </Link>
      </div>
    </div>
  );
};

export default Dummypage;

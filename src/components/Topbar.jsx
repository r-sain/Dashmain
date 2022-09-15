import React from "react";
import "./compstyle.css";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import India from "../india.png";
import User from "../user.png";
import Email from "../email.png";
import Notify from "../active.png";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="top1">
        <p style={{ fontWeight: "bolder", color: "#6e50b3" }}>ADMIN OVERVIEW</p>
        <div className="top1inside">
          <input type="text" placeholder="Search..." />
          <span>
            <AiOutlineSearch />
          </span>
        </div>
      </div>

      <div className="top3">
        <div className="icons">
          <span>
            <img
              src={Email}
              style={{
                width: "14px",
              }}
            />
          </span>
          <span>
            <img src={Notify} style={{ width: "14px" }} />
          </span>
          <span>
            <img src={India} style={{ width: "14px" }} />
          </span>
        </div>
        <div className="user">
          <img src={User} style={{ width: "30px" }} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;

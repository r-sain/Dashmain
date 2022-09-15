import React from "react";
import "./compstyle.css";
import {
  AiOutlineDashboard,
  AiOutlineAppstore,
  AiOutlineFileAdd,
  AiOutlineDatabase,
} from "react-icons/ai";
import { RiCompassDiscoverLine, RiPagesLine } from "react-icons/ri";
import { FiUsers, FiSettings, FiLogOut } from "react-icons/fi";
import { HiOutlineSupport } from "react-icons/hi";
import { IoDocumentsOutline } from "react-icons/io5";
import { BsInboxes } from "react-icons/bs";
import Logo from "../admin.png";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="topsb">
        <span className="top">
          <p style={{ fontWeight: "bolder", color: "#895BF1" }}>ADMAIN</p>

          <img src={Logo} style={{ width: "15%" }} />
        </span>
      </div>

      <div className="centersb">
        <p className="mainsb">MAIN</p>
        <ul>
          <Link to="/">
            <li>
              <AiOutlineDashboard />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/dummy">
            <li>
              <RiCompassDiscoverLine />
              <span>Discover</span>
            </li>
          </Link>
          <Link to="/dummy">
            <li>
              <FiUsers />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/dummy">
            <li>
              <AiOutlineAppstore />
              <span>Applications</span>
            </li>
          </Link>
          <Link to="/dummy">
            <li>
              <IoDocumentsOutline />
              <span>Documents</span>
            </li>
          </Link>
          <Link to="/dummy">
            <li>
              <RiPagesLine />
              <span>Pages</span>
            </li>
          </Link>
        </ul>
        <p className="secondarysb">SECONDARY</p>
        <ul>
          <Link to="/dummy">
            <li>
              <HiOutlineSupport />
              <span>Support Centre</span>
            </li>
          </Link>
          <Link to="/dummy">
            <li>
              <BsInboxes />
              <span>Inbox</span>
            </li>
          </Link>
          <Link to="/dummy">
            <li>
              <AiOutlineFileAdd />
              <span>File Manager</span>
            </li>
          </Link>
          <Link to="/dummy">
            <li>
              <AiOutlineDatabase />
              <span>Data List</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottomsb">
        <ul>
          <Link to="/dummy">
            <li>
              <FiSettings />
              <span>Settings</span>
            </li>
          </Link>
          <Link to="/dummy">
            <li>
              <FiLogOut />
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

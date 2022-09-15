import React from "react";
import Chart from "../components/Chart";
import InfoCards from "../components/InfoCards";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "./homepage.css";
import { amtData } from "../dummydata";
import { gridData } from "../dummyGrid";
import Grid from "../components/Grid";

const Homepage = () => {
  return (
    <div className="home">
      <div className="sidebarCont">
        <Sidebar />
      </div>
      <div className="homeContainer">
        <div className="topbarContainer">
          <Topbar />
        </div>
        <div className="nonstick">
          <div className="homeBody">
            <InfoCards />
            <Chart data={amtData} />
            <div className="recentTransactions">
              <h3
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "10px",
                  marginTop: "20px",
                }}
              >
                Recent Transactions Data
              </h3>
              <Grid data={gridData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

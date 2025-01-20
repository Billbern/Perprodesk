import React from "react";
import "./dashboard.css";
import Header from "../partials/Header";
import Sidebar from "../partials/SideBar";
import Report from "../partials/Report";


class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard w-100">
        <Sidebar />
        <div className="main-content d-flex flex-column w-100">
            <Header />
            <Report />
        </div>
      </div>
    );
  }
}

export default Dashboard;
import React from "react";
import Dashboard from "@/src/pages/Dashboard";
import Loader from "@/src/elements/Loader";

const DashboardPage = () => {
  return <Dashboard><Loader/></Dashboard>;
};

export default DashboardPage;

DashboardPage.auth = true;
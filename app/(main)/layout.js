import React from "react";
import DashboardProvider from "./provider";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <DashboardProvider>
        <div className="p-10 bg-gray-100">{children}</div>
      </DashboardProvider>
    </div>
  );
};

export default DashboardLayout;

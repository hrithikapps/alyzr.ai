import React from "react";
import { AppSidebar } from "./_components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/ui/sidebar";
import WelcomeContainer from "./dashboard/_components/WelcomeContainer";

const DashboardProvider = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        {/* <SidebarTrigger /> */}
        <WelcomeContainer />
        {children}
      </div>
    </SidebarProvider>
  );
};

export default DashboardProvider;

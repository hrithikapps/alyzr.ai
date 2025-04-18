import React from "react";
import { AppSidebar } from "./_components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/ui/sidebar";

const DashboardProvider = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div>
        <SidebarTrigger/>
        {children}</div>
    </SidebarProvider>
  );
};

export default DashboardProvider;

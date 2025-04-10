import React from "react";
import { AppSidebar } from "./_components/AppSidebar";
import { SidebarProvider } from "@/ui/sidebar";

const DashboardProvider = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div>{children}</div>
    </SidebarProvider>
  );
};

export default DashboardProvider;

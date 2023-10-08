"use client"
import { AppHeader } from "@/components/appHeader";
import { SideBar } from "@/components/sideBar";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="DashboardLayout flex max-w-screen min-h-screen">
      <AppHeader />
      <div className={`flex w-full pt-16`}>
        <SideBar open={open} setOpen={setOpen} />
        {children}
      </div>
    </div>
  );
}
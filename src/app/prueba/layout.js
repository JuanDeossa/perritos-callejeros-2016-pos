"use client";
export default function DashboardLayout({ children }) {
  return (
    <div className="w-full min-h-screen bg-slate-500">
      <div className="h-16 bg-emerald-500 w-full fixed"></div>
      <div className="flex w-full">
        <div className="w-60 bg-indigo-700 fixed left-0 top-0 h-full"></div>
        {/* <div className="w-60 bg-indigo-700 h-screen"></div> */}
        {children}
      </div>
    </div>
  );
}

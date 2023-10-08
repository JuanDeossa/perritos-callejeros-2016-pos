import React from "react";
import { DropDown1 } from "./dropDown1";

export const AppHeader = () => {
  return (
    <header className={`AppHeader fixed z-10 h-16 w-full  flex gap-8 pr-10 items-center justify-end bg-jt1-gray1 pl-10 text-lg font-bold text-gray-100`}>
      <DropDown1/>
    </header>
  );
};

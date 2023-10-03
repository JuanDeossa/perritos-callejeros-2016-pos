import React from "react";
import { DropDown1 } from "./dropDown1";

export const AppHeader = () => {
  return (
    <header className={`AppHeader z-10 h-16 w-full fixed flex gap-8 pr-10 items-center justify-end bg-t1-blue-300 pl-10 text-lg font-bold text-gray-100`}>
      <DropDown1/>
    </header>
  );
};

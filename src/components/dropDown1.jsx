"use client";
import React, { useState } from "react";

import LogOutIcon from "@/assets/icons/logout.svg";
import UserIcon from "@/assets/icons/user-circle.svg";
import { logoutAction } from "@/firebase/auth";

export const DropDown1 = () => {
  const [open, setOpen] = useState(false);
  const options = [
    {
      label: "Logout",
      icon: <LogOutIcon />,
      action: () => {logoutAction()},
    },
    {
      label: "ususarios",
      icon: <UserIcon />,
      action: () => {},
    },
  ];
  return (
    <div data-dial-init className="">
      <button
        onClick={() => setOpen((prev) => !prev)}
        onMouseEnter={() => setOpen(true)}
        // onMouseLeave={() => setOpen(false)}
        type="button"
        data-dial-toggle="speed-dial-menu-dropdown"
        aria-controls="speed-dial-menu-dropdown"
        aria-expanded="false"
        className="flex items-center justify-center ml-auto text-white  rounded-xl w-10 h-10 hover:bg-t1-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700  focus:outline-none dark:focus:ring-blue-800"
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 3"
        >
          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
        </svg>
        <span className="sr-only">Open actions menu</span>
      </button>
      {open && (
        <div
          id="speed-dial-menu-dropdown"
          className="absolute right-24 top-2 flex flex-col justify-end py-1 mb-4 space-y-2 bg-white border border-gray-100 rounded-lg shadow-sm dark:border-gray-600 dark:bg-gray-700"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <ul className="text-sm text-gray-500 dark:text-gray-300">
            {options.map((option) => (
              <li
                key={option.id}
                className="flex items-center px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white cursor-pointer gap-2"
                onClick={option.action}
              >
                {option.icon}
                <span className="text-sm font-medium">{option.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

import { routes } from "@/routes";
import Link from "next/link";
import React from "react";

export const LayoutTypeA = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-t1-gray-100">
      <header className="w-full h-20 fixed flex items-center bg-t1-blue-300 pl-10">
        <nav className="w-full h-full">
          <ul className="w-full h-full flex gap-8 text-gray-100">
            <li className="flex items-center text-lg font-bold cursor-pointer ">
              <Link href={routes.DASHBOARD}>Nueva Orden</Link>
            </li>
            <li className="flex items-center text-lg font-bold cursor-pointer">
              <Link href={routes.PRODUCTS}>Gestion de productos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div>{children}</div>
    </div>
  );
};

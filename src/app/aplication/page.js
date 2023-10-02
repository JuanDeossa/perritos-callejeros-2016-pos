"use client";
import { MainAppPage } from "@/subPages/mainAppPage";
import { NotFountPage } from "@/subPages/notFountPage";
import { useSelector } from "react-redux";
import { DashBoardPage } from "@/components/dashBoardPage";
import { ProductsPage } from "@/subPages/productsPage";

export const AplicationPage = ({ open }) => {
  const { pageID, sideNavOpen } = useSelector(
    (state) => state.currentPage.value
  );

  const pagesObj = {
    0: <MainAppPage />,
    1: <DashBoardPage />,
    2: <ProductsPage />,
  };

  return (
    <div
      id="AplicationPage"
      className={`w-full pt-8 pl-${sideNavOpen ? "sideNavWB" : "sideNavWL"}`}
    >
      {pagesObj[pageID] || <NotFountPage />}
    </div>
  );
};

export default AplicationPage;

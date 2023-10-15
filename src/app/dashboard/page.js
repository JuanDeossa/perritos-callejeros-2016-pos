"use client";
import { NotFountPage } from "@/components/subPages/notFound404/notFountPage";
import { useSelector } from "react-redux";
import { subPagesRouter } from "@/utils/routes";

export const DashboardPage = () => {
  const { pageID, sideNavOpen } = useSelector(
    (state) => state.currentPage.value
  );

  return (
    <div className={`SubPagesContainer bg-jt1-gray2 w-full pt-6 ${sideNavOpen?"pl-48" : "pl-20 "} duration-300`}>
      {subPagesRouter[pageID] || <NotFountPage />}
    </div>
  );
};

export default DashboardPage;

// const z = () => {
//   return (
//     <div
//       className={`DashboardPage pl- w-full pt-8 ${
//         sideNavOpen ? "pl-sideNavWB" : "pl-sideNavWL"
//       } duration-300`}
//     ></div>
//   );
// };

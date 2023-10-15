import { InfoIcon } from "@/components/common/iconsProvider";
import { fillArray } from "@/utils";
import { getOrdersArray } from "@/utils/backend";
import React, { useState } from "react";

const tableHeaders = [
  { id: "Fecha", label: "Fecha" },
  { id: "Número de recibo", label: "Número de recibo" },
  { id: "Cliente", label: "Cliente" },
  { id: "Empleado", label: "Empleado" },
  { id: "Total", label: "Total" },
  { id: "Estado", label: "Estado" },
  { id: "Detalle", label: "Detalle" },
];

export const OrdesTable = () => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const [ordersArray, setOrdersArray] = useState([...getOrdersArray()]);
  const [ordersArrayToShow, setOrdersArrayToShow] = useState(
    fillArray({
      arr: ordersArray.slice(currentPage, currentPage + itemsPerPage),
      itemsPerPage: itemsPerPage,
    })
  );
  const totalPages = Math.ceil(ordersArray.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      const indiceInicio = (currentPage + 1) * itemsPerPage;
      const indiceFin = (currentPage + 1) * itemsPerPage + itemsPerPage;
      const newArr = ordersArray.slice(indiceInicio, indiceFin);
      setOrdersArrayToShow(
        fillArray({ arr: newArr, itemsPerPage: itemsPerPage })
      );
    }
  };
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setCurrentPage(currentPage - 1);
      const indiceInicio = (currentPage - 1) * itemsPerPage;
      const indiceFin = (currentPage - 1) * itemsPerPage + itemsPerPage;
      const newArr = ordersArray.slice(indiceInicio, indiceFin);
      setOrdersArrayToShow(newArr);
    }
  };

  return (
    <div className="OrdesTable w-full max-w-6xl mx-auto overflow-x-auto shadow-md sm:rounded-lg bg-gray-50 dark:bg-gray-700">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase  dark:text-gray-400">
          <tr>
            {tableHeaders.map((header) => (
              <OrderHeader key={header?.id} header={header} />
            ))}
          </tr>
        </thead>
        <tbody>
          {ordersArrayToShow.map((order, index) => (
            <OrderRow key={`${order.id}-${index}`} order={order} />
          ))}
        </tbody>
      </table>
      {ordersArray.length > 10 && (
        <div className="py-2 flex gap-5 justify-center items-center">
          <span>{`Total de ordenes: ${ordersArray.length},  Pagina ${
            currentPage + 1
          } de ${totalPages}`}</span>
          <PaginationWrapper
            currentPage={currentPage}
            totalPages={totalPages}
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
        </div>
      )}
    </div>
  );
};

const PaginationWrapper = ({
  currentPage,
  totalPages,
  handlePrev,
  handleNext,
}) => {
  return (
    <ul className="PaginationWrapper flex items-center -space-x-px h-8 text-sm">
      <li className="PaginationWrapper-prev" onClick={handlePrev}>
        <svg
          className={`w-2.5 h-2.5 ${currentPage === 0 && "opacity-30"}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
      </li>
      <li
        value={currentPage + 1}
        className={`PaginationWrapper-item bg-indigo-300`}
      >
        {currentPage + 1}
      </li>
      <li value={currentPage + 2} className={`PaginationWrapper-item`}>
        {currentPage === totalPages - 1 ? "" : currentPage + 2}
      </li>
      <li value={currentPage + 3} className={`PaginationWrapper-item`}>
        {currentPage === totalPages - 1 || currentPage === totalPages - 2
          ? ""
          : currentPage + 3}
      </li>
      <li className="PaginationWrapper-next" onClick={handleNext}>
        <svg
          className={`w-2.5 h-2.5 ${
            currentPage === totalPages - 1 && "opacity-30"
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </li>
    </ul>
  );
};

const OrderHeader = ({ header }) => {
  return (
    <th
      scope="col"
      className="px-3 py-3 max-md:text-center max-md:align-text-top"
    >
      {header?.label}
    </th>
  );
};

const OrderRow = ({ order = null }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="px-3 py-2">{order?.date || "-"}</td>
      <td className="px-3 py-2">{order?.id || "-"}</td>
      <td className="px-3 py-2">{order?.client || "-"}</td>
      <td className="px-3 py-2">{order?.employee || "-"}</td>
      <td className="px-3 py-2 font-semibold">
        {order?.total ? `$${order?.total}` : "-"}
      </td>
      <td className="px-3 py-2">
        <StatusIndicator status={order?.state} />
      </td>
      <td className="px-7 py-2">
        {order?.state ? (
          <InfoIcon className="cursor-pointer stroke-jt1-gray3" />
        ) : (
          "-"
        )}
      </td>
    </tr>
  );
};

const StatusIndicator = ({ status }) => {
  const getBackgroundColor = (id = status?.id) => {
    switch (id) {
      case 1:
        return "bg-blue-600";
      case 2:
        return "bg-emerald-500";
      case 3:
        return "bg-red-500";
      default:
        return "bg-none text-transparent";
    }
  };
  return (
    <p
      className={`py-1 px-2 whitespace-nowrap rounded-lg max-w-[120px] text-white text-center font-bold ${getBackgroundColor()}`}
    >
      {status?.label || "-"}
    </p>
  );
};

import { InfoIcon } from "@/components/common/iconsProvider";
import { getFormatoCOP } from "@/utils";
import React from "react";

const tableHeaders = [
  { id: "Fecha", label: "Fecha" },
  { id: "Número de recibo", label: "Número de recibo" },
  { id: "Cliente", label: "Cliente" },
  { id: "Empleado", label: "Empleado" },
  { id: "Total", label: "Total" },
  { id: "Estado", label: "Estado" },
  { id: "Detalle", label: "Detalle" },
];

const ordersArray = [
  {
    id: "00094-001-0097",
    date: "14/10/2023-10.33PM ",
    client: "Ricardo",
    employee: "Duvan",
    total: getFormatoCOP(40000),
    state: {
      id: 2,
      label: "Completed",
    },
  },
  {
    id: "00094-001-0098",
    date: "14/10/2023-04.28PM ",
    client: "Cesar",
    employee: "Duvan",
    total: getFormatoCOP(32500),
    state: {
      id: 3,
      label: "Cancelado",
    },
  },
  {
    id: "00094-001-0097",
    date: "14/10/2023-08.03PM ",
    client: "Ricardo",
    employee: "Duvan",
    total: getFormatoCOP(40000),
    state: {
      id: 1,
      label: "En progreso",
    },
  },
  {
    id: "00094-001-0097",
    date: "14/10/2023-10.33PM ",
    client: "Ricardo",
    employee: "Duvan",
    total: getFormatoCOP(40000),
    state: {
      id: 2,
      label: "Completed",
    },
  },
  {
    id: "00094-001-0097",
    date: "14/10/2023-10.33PM ",
    client: "Ricardo",
    employee: "Duvan",
    total: getFormatoCOP(40000),
    state: {
      id: 2,
      label: "Completed",
    },
  },
  {
    id: "00094-001-0098",
    date: "14/10/2023-04.28PM ",
    client: "Cesar",
    employee: "Duvan",
    total: getFormatoCOP(32500),
    state: {
      id: 3,
      label: "Cancelado",
    },
  },
  {
    id: "00094-001-0097",
    date: "14/10/2023-08.03PM ",
    client: "Ricardo",
    employee: "Duvan",
    total: getFormatoCOP(40000),
    state: {
      id: 1,
      label: "En progreso",
    },
  },
  {
    id: "00094-001-0097",
    date: "14/10/2023-10.33PM ",
    client: "Ricardo",
    employee: "Duvan",
    total: getFormatoCOP(40000),
    state: {
      id: 2,
      label: "Completed",
    },
  },
  {
    id: "00094-001-0097",
    date: "14/10/2023-10.33PM ",
    client: "Ricardo",
    employee: "Duvan",
    total: getFormatoCOP(40000),
    state: {
      id: 2,
      label: "Completed",
    },
  },
  {
    id: "00094-001-0098",
    date: "14/10/2023-04.28PM ",
    client: "Cesar",
    employee: "Duvan",
    total: getFormatoCOP(32500),
    state: {
      id: 3,
      label: "Cancelado",
    },
  },
  {
    id: "00094-001-0097",
    date: "14/10/2023-08.03PM ",
    client: "Ricardo",
    employee: "Duvan",
    total: getFormatoCOP(40000),
    state: {
      id: 1,
      label: "En progreso",
    },
  },
  {
    id: "00094-001-0097",
    date: "14/10/2023-10.33PM ",
    client: "Ricardo",
    employee: "Duvan",
    total: getFormatoCOP(40000),
    state: {
      id: 2,
      label: "Completed",
    },
  },
];

export const OrdesTable = () => {
  return (
    <div className="OrdesTable w-full max-w-6xl mx-auto overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {tableHeaders.map((header) => (
              <OrderHeader key={header?.id} header={header} />
            ))}
          </tr>
        </thead>
        <tbody>
          {ordersArray.length < 5
            ? [...ordersArray, {}, {}, {}].map((order) => (
                <OrderRow key={order.id} order={order} />
              ))
            : [...ordersArray].map((order) => (
                <OrderRow key={order.id} order={order} />
              ))}
        </tbody>
      </table>
    </div>
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
        {order?.state ? <StatusIndicator status={order?.state} /> : "-"}
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
        return "bg-jt1-gray3";
    }
  };
  return (
    <p
      className={`py-1 px-2 whitespace-nowrap rounded-lg max-w-[120px] text-white text-center font-bold ${getBackgroundColor()}`}
    >
      {status?.label}
    </p>
  );
};

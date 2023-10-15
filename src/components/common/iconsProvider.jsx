export const LogoutIcon = ({
  width = 24,
  height = 24,
  color = "#ffffffff",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="LogoutIcon"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      strokeWidth="2"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
      <path d="M9 12h12l-3 -3"></path>
      <path d="M18 15l3 -3"></path>
    </svg>
  );
};
export const UserIcon = ({ width = 24, height = 24, color = "#ffffffff" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="UserIcon"
      width={width}
      height={height}
      viewBox={`0 0 24 24`}
      strokeWidth="2"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
      <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
      <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
    </svg>
  );
};
export const StoreIcon = ({ width = 24, height = 24, color = "#ffffffff" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="StoreIcon"
      width={width}
      height={height}
      viewBox={`0 0 24 24`}
      strokeWidth="2"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
      <path d="M9 8a3 3 0 0 0 6 0"></path>
    </svg>
  );
};
export const PlusIcon = ({ width = 24, height = 24, color = "#ffffffff" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="AddIcon"
      width={width}
      height={height}
      viewBox={`0 0 24 24`}
      strokeWidth="2"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 5l0 14"></path>
      <path d="M5 12l14 0"></path>
    </svg>
  );
};
export const MinusIcon = ({ width = 24, height = 24, color = "#ffffffff" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="MinusIcon"
      width={width}
      height={height}
      viewBox={`0 0 24 24`}
      strokeWidth="2"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M5 12l14 0"></path>
    </svg>
  );
};
export const TrashIcon = ({ width = 24, height = 24, color = "#ffffffff" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="TrashIcon"
      width={width}
      height={height}
      viewBox={`0 0 24 24`}
      strokeWidth="2"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 7l16 0"></path>
      <path d="M10 11l0 6"></path>
      <path d="M14 11l0 6"></path>
      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
    </svg>
  );
};
export const InfoIcon = ({ width = 24, height = 24, color = "#ffffffff",className="" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`InfoIcon ${className}`}
      width={width}
      height={height}
      viewBox={`0 0 24 24`}
      strokeWidth="2"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
      <path d="M11 14h1v4h1"></path>
      <path d="M12 11h.01"></path>
    </svg>
  );
};
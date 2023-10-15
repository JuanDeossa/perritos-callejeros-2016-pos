export const fillArray = ({ arr = [], itemsPerPage = 10 }) => {
  const longitud = arr.length;
  if (longitud < itemsPerPage) {
    const relleno = itemsPerPage - longitud;
    const nuevoArray = new Array(relleno).fill({});
    return [...arr, ...nuevoArray];
  } else {
    return arr;
  }
};
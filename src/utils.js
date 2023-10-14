export const getFormatoCOP = (amount) =>
  new Intl.NumberFormat("es-CO", {
    currency: "COP",
  }).format(amount);

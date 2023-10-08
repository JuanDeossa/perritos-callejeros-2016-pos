import { addNewProduct } from "./services";

const arr = [
  {
    name: "Perrito",
    price: 4000,
    description: "perrito1 description",
    category_id: "lhRODYPxFdthKTWtSvsq",
  },
  {
    name: "Queso",
    price: 4000,
    description: "perrito1 description",
    category_id: "SI0E2rLM5GUKlOOg7U4G",
  },
  {
    name: "Tocineta",
    price: 4000,
    description: "perrito1 description",
    category_id: "SI0E2rLM5GUKlOOg7U4G",
  },
  {
    name: "Salchicha",
    price: 4000,
    description: "perrito1 description",
    category_id: "SI0E2rLM5GUKlOOg7U4G",
  },
  {
    name: "Coca cola original",
    price: 4000,
    description: "perrito1 description",
    category_id: "kg9UEnhvCSzhWdiU6PGp",
  },
  {
    name: "Coca cola sin Azucar",
    price: 4000,
    description: "perrito1 description",
    category_id: "kg9UEnhvCSzhWdiU6PGp",
  },
  {
    name: "Pepsi",
    price: 4000,
    description: "perrito1 description",
    category_id: "kg9UEnhvCSzhWdiU6PGp",
  },
  {
    name: "Manzana",
    price: 4000,
    description: "perrito1 description",
    category_id: "kg9UEnhvCSzhWdiU6PGp",
  },
  {
    name: "Colombiana",
    price: 4000,
    description: "perrito1 description",
    category_id: "kg9UEnhvCSzhWdiU6PGp",
  },
  {
    name: "Heineken",
    price: 3500,
    description: "perrito1 description",
    category_id: "uhxsXLyRv7alvVTNMEfM",
  },
  {
    name: "Andina",
    price: 3000,
    description: "perrito1 description",
    category_id: "uhxsXLyRv7alvVTNMEfM",
  },
  {
    name: "Budweizer",
    price: 3500,
    description: "perrito1 description",
    category_id: "uhxsXLyRv7alvVTNMEfM",
  },
  {
    name: "Hatsu rosa",
    price: 3000,
    description: "Soda description",
    category_id: "fE0gIRzHMgTrFI7IIIHn",
  },
  {
    name: "Hatsu verde",
    price: 3000,
    description: "Soda description",
    category_id: "fE0gIRzHMgTrFI7IIIHn",
  },
  {
    name: "CM Mangostino",
    price: 3000,
    description: "Soda description",
    category_id: "fE0gIRzHMgTrFI7IIIHn",
  },
  {
    name: "CM Kiwi",
    price: 3000,
    description: "Soda description",
    category_id: "fE0gIRzHMgTrFI7IIIHn",
  },
  {
    name: "CM Granada",
    price: 3000,
    description: "Soda description",
    category_id: "fE0gIRzHMgTrFI7IIIHn",
  },
  {
    name: "CM Manzana verde",
    price: 3000,
    description: "Soda description",
    category_id: "fE0gIRzHMgTrFI7IIIHn",
  },
  {
    name: "CM Maracuya",
    price: 3000,
    description: "Soda description",
    category_id: "fE0gIRzHMgTrFI7IIIHn",
  },
];

export const migrateProducts = () => {
  arr.forEach((prod) => {
    addNewProduct(prod);
  });
};

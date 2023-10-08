import { addNewProduct } from "./services";

const arr = [
  {
    name: "Perrito",
    price: 4000,
    description: "perrito description",
    category_id: "lhRODYPxFdthKTWtSvsq",
    image: {
      url: null,
      file: null,
    },
  },
  {
    name: "Queso",
    price: 1500,
    description: "Queso description",
    category_id: "SI0E2rLM5GUKlOOg7U4G",
    image: {
      url: null,
      file: null,
    },
  },
  {
    name: "Tocineta",
    price: 1500,
    description: "Tocineta description",
    category_id: "SI0E2rLM5GUKlOOg7U4G",
    image: {
      url: null,
      file: null,
    },
  },
  {
    name: "Salchicha",
    price: 1500,
    description: "Salchicha description",
    category_id: "SI0E2rLM5GUKlOOg7U4G",
    image: {
      url: null,
      file: null,
    },
  },
  {
    name: "Coca cola original",
    price: 3000,
    description: "Coca cola original description",
    category_id: "kg9UEnhvCSzhWdiU6PGp",
    image: {
      url: null,
      file: null,
    },
  },
  {
    name: "Coca cola sin Azucar",
    price: 3000,
    description: "Coca cola sin Azucar description",
    category_id: "kg9UEnhvCSzhWdiU6PGp",
    image: {
      url: null,
      file: null,
    },
  },
  {
    name: "Pepsi",
    price: 3000,
    description: "Pepsi description",
    category_id: "kg9UEnhvCSzhWdiU6PGp",
    image: {
      url: null,
      file: null,
    },
  },
  {
    name: "Manzana",
    price: 3000,
    description: "Manzana description",
    category_id: "kg9UEnhvCSzhWdiU6PGp",
    image: {
      url: "https://www.capitalfoodservices.com/wp-content/uploads/2019/12/Postobon_Manzana_Lata_355mL.jpg",
      file: null,
    },
  },
  {
    name: "Colombiana",
    price: 3000,
    description: "Colombiana description",
    category_id: "kg9UEnhvCSzhWdiU6PGp",
    image: {
      url: null,
      file: null,
    },
  },
  {
    name: "Heineken",
    price: 3500,
    description: "Heineken description",
    category_id: "uhxsXLyRv7alvVTNMEfM",
    image: {
      url: null,
      file: null,
    },
  },
  {
    name: "Andina",
    price: 3000,
    description: "Andina description",
    category_id: "uhxsXLyRv7alvVTNMEfM",
    image: {
      url: null,
      file: null,
    },
  },
  {
    name: "Budweizer",
    price: 3500,
    description: "Budweizer description",
    category_id: "uhxsXLyRv7alvVTNMEfM",
    image: {
      url: null,
      file: null,
    },
  },
  {
    name: "Soda Hatsu rosa",
    price: 3000,
    description: "Soda Hatsu rosa description",
    category_id: "fE0gIRzHMgTrFI7IIIHn",
    image: {
      url: null,
      file: null,
    },
  },
  {
    name: "Soda Hatsu verde",
    price: 3000,
    description: "Soda Hatsu verde description",
    category_id: "fE0gIRzHMgTrFI7IIIHn",
    image: {
      url: null,
      file: null,
    },
  },
  {
    name: "Soda CM Mangostino",
    price: 3000,
    description: "Soda CM Mangostino description",
    category_id: "fE0gIRzHMgTrFI7IIIHn",
    image: {
      url: null,
      file: null,
    },
  },
  {
    name: "Soda CM Kiwi",
    price: 3000,
    description: "Soda CM Kiwi description",
    category_id: "fE0gIRzHMgTrFI7IIIHn",
    image: {
      url: null,
      file: null,
    },
  },
  {
    name: "Soda CM Granada",
    price: 3000,
    description: "Soda CM Granada description",
    category_id: "fE0gIRzHMgTrFI7IIIHn",
    image: {
      url: null,
      file: null,
    },
  },
  {
    name: "Soda CM Manzana verde",
    price: 3000,
    description: "Soda CM Manzana verde description",
    category_id: "fE0gIRzHMgTrFI7IIIHn",
    image: {
      url: null,
      file: null,
    },
  },
  {
    name: "Soda CM Maracuya",
    price: 3000,
    description: "Soda CM Maracuya description",
    category_id: "fE0gIRzHMgTrFI7IIIHn",
    image: {
      url: null,
      file: null,
    },
  },
];


const arr2 = [
  {
    name: "Perrito",
    price: 4000,
    description: "perrito description",
    category_id: "lhRODYPxFdthKTWtSvsq",
    image: {
      url: null,
      file: null,
    },
  },
  {
    name: "Manzana",
    price: 3000,
    description: "Manzana description",
    category_id: "kg9UEnhvCSzhWdiU6PGp",
    image: {
      url: "https://www.capitalfoodservices.com/wp-content/uploads/2019/12/Postobon_Manzana_Lata_355mL.jpg",
      file: null,
    },
  },
];

export const migrateProducts = () => {
  arr2.forEach((prod) => {
    addNewProduct(prod);
  });
};
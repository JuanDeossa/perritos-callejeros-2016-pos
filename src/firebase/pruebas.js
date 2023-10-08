import { addNewProduct } from "./services";

const arr = [
  {
    name: "Perrito",
    price: 4000,
    description: "perrito description",
    category_id: "lhRODYPxFdthKTWtSvsq",
    image: {
      url: "https://img.freepik.com/vector-gratis/diseno-etiqueta-comida-rapida-hot-dog-aislado_1308-67129.jpg?w=2000",
      file: null,
    },
  },
  {
    name: "Queso",
    price: 1500,
    description: "Queso description",
    category_id: "SI0E2rLM5GUKlOOg7U4G",
    image: {
      url: "https://png.pngtree.com/png-vector/20211111/ourlarge/pngtree-chesse-cartoon-illustration-png-image_4028492.png",
      file: null,
    },
  },
  {
    name: "Tocineta",
    price: 1500,
    description: "Tocineta description",
    category_id: "SI0E2rLM5GUKlOOg7U4G",
    image: {
      url: "https://static.vecteezy.com/system/resources/previews/016/765/984/original/bacon-fast-food-cartoon-png.png",
      file: null,
    },
  },
  {
    name: "Salchicha",
    price: 1500,
    description: "Salchicha description",
    category_id: "SI0E2rLM5GUKlOOg7U4G",
    image: {
      url: "https://shinobi-stickers.com/cdn/shop/products/Happy_Silly_Party_Sausage_Hotdog_Cartoon_Emoji_6_660938854_1024x1024@2x.jpg?v=1536505009",
      file: null,
    },
  },
  {
    name: "Coca cola original",
    price: 3000,
    description: "Coca cola original description",
    category_id: "kg9UEnhvCSzhWdiU6PGp",
    image: {
      url: "https://carulla.vtexassets.com/arquivos/ids/201727/Coca-Cola-330-Ml-Lata-1054389_a.jpg?v=1782132521",
      file: null,
    },
  },
  {
    name: "Coca cola sin Azucar",
    price: 3000,
    description: "Coca cola sin Azucar description",
    category_id: "kg9UEnhvCSzhWdiU6PGp",
    image: {
      url: "https://tofuu.getjusto.com/orioneat-prod-resized/Ymn7xk2LSfpFswXkG-1200-1200.webp",
      file: null,
    },
  },
  {
    name: "Pepsi",
    price: 3000,
    description: "Pepsi description",
    category_id: "kg9UEnhvCSzhWdiU6PGp",
    image: {
      url: "https://m.media-amazon.com/images/I/51h232yC+zL.jpg",
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
      url: "https://cdn1.totalcommerce.cloud/homesentry/product-zoom/es/lata-gaseosa-colombiana-269ml-1.webp",
      file: null,
    },
  },
  {
    name: "Heineken",
    price: 3500,
    description: "Heineken description",
    category_id: "uhxsXLyRv7alvVTNMEfM",
    image: {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL14Ulpyw72h3arZwRUBxme1wq6XUrvhWFSA&usqp=CAU",
      file: null,
    },
  },
  {
    name: "Andina",
    price: 3000,
    description: "Andina description",
    category_id: "uhxsXLyRv7alvVTNMEfM",
    image: {
      url: "https://www.jarris.co/app_data_archivos/jarris.soomi.co/productos/producto_7ec0fbce1180cd79291ad9eca4ec59c838a752b81678922619.jpg",
      file: null,
    },
  },
  {
    name: "Budweizer",
    price: 3500,
    description: "Budweizer description",
    category_id: "uhxsXLyRv7alvVTNMEfM",
    image: {
      url: "https://copservir.vtexassets.com/arquivos/ids/767077-800-auto?v=637950284422930000&width=800&height=auto&aspect=true",
      file: null,
    },
  },
  {
    name: "Soda Hatsu rosa",
    price: 3000,
    description: "Soda Hatsu rosa description",
    category_id: "fE0gIRzHMgTrFI7IIIHn",
    image: {
      url: "https://vaquitaexpress.com.co/media/catalog/product/cache/e89ece728e3939ca368b457071d3c0be/7/7/7702090063462_28.jpg",
      file: null,
    },
  },
  {
    name: "Soda Hatsu verde",
    price: 3000,
    description: "Soda Hatsu verde description",
    category_id: "fE0gIRzHMgTrFI7IIIHn",
    image: {
      url: "https://jumbocolombiaio.vtexassets.com/arquivos/ids/417327/7702090063479.jpg?v=637998944909030000",
      file: null,
    },
  },
  {
    name: "Soda CM Mangostino",
    price: 3000,
    description: "Soda CM Mangostino description",
    category_id: "fE0gIRzHMgTrFI7IIIHn",
    image: {
      url: "https://i0.wp.com/cooldrink.cool/wp-content/uploads/2022/10/mangostino-1.png?fit=341%2C627&ssl=1",
      file: null,
    },
  },
  {
    name: "Soda CM Kiwi",
    price: 3000,
    description: "Soda CM Kiwi description",
    category_id: "fE0gIRzHMgTrFI7IIIHn",
    image: {
      url: "https://tofuu.getjusto.com/orioneat-local/resized2/jS4fyA2pYQJJrW8GG-1200-1200.webp",
      file: null,
    },
  },
  {
    name: "Soda CM Granada",
    price: 3000,
    description: "Soda CM Granada description",
    category_id: "fE0gIRzHMgTrFI7IIIHn",
    image: {
      url: "https://i0.wp.com/cooldrink.cool/wp-content/uploads/2022/10/granada-2.png?fit=336%2C616&ssl=1",
      file: null,
    },
  },
  {
    name: "Soda CM Manzana verde",
    price: 3000,
    description: "Soda CM Manzana verde description",
    category_id: "fE0gIRzHMgTrFI7IIIHn",
    image: {
      url: "https://i0.wp.com/cooldrink.cool/wp-content/uploads/2022/10/Botella-cool-drink-verde-man-frente-sinsombra.png?fit=417%2C747&ssl=1",
      file: null,
    },
  },
  {
    name: "Soda CM Maracuya",
    price: 3000,
    description: "Soda CM Maracuya description",
    category_id: "fE0gIRzHMgTrFI7IIIHn",
    image: {
      url: "https://i0.wp.com/cooldrink.cool/wp-content/uploads/2022/10/latas-maracuya-solas-1200-min.png?fit=1200%2C1200&ssl=1",
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
  arr.forEach((prod) => {
    addNewProduct(prod);
  });
};
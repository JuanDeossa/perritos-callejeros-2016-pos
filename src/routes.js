import { DashboardSubPage} from "./subPages/dashboardSubPage";
import { NewOrderSubPage } from "./subPages/newOrderSubPage";
import { ProductsSubPage } from "./subPages/productsPage";

export const modalKeys = {
  confirmDeleteModal: "confirmDeleteModal",
};

export const pages = {
  HOME: "/",
  DASHBOARD: "/dashboard",
};

export const subPages = {
  DASHBOARD: "DASHBOARD",
  NEW_ORDER: "NEW_ORDER",
  PRODUCTS: "PRODUCTS",
};

export const subPagesRouter = {
  [subPages.DASHBOARD]: <DashboardSubPage />,
  [subPages.NEW_ORDER]: <NewOrderSubPage />,
  [subPages.PRODUCTS]: <ProductsSubPage />,
};
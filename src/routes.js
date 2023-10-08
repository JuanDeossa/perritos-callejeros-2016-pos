import { DashboardSubPage} from "./components/subPages/dashboard/dashboardSubPage";
import { NewOrderSubPage } from "./components/subPages/newOrder/newOrderSubPage";
import { ProductsSubPage } from "./components/subPages/productsPage/productsPage";

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
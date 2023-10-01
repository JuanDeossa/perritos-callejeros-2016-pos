import { getAllProducts } from "@/firebase/services";
import { setProducts } from "@/redux/productsSlice";
import { useDispatch } from "react-redux";

export const useRefreshProductsListFromFB = async () => {
  const dispatch = useDispatch();
  dispatch(setProducts(await getAllProducts()));
  sessionStorage.removeItem("products")
};
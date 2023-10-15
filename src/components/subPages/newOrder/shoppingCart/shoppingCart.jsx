import { useSelector } from "react-redux";
import "./shoppingCart.css";
import { getFormatoCOP } from "@/utils/dataFormat";
import { OrderItemCard } from "./orderItemCard";

export const ShoppingCart = () => {
  const { productsList, total } = useSelector((state) => state.orderData.value);
  return (
    <div className="ShoppingCart fixed top-0 right-0 pt-16  flex pl-10 h-screen">
      <div className="flex h-full flex-col bg-jt1-gray1 shadow-xl">
        <h2 className="text-lg font-bold text-gray-200 p-4">Shopping cart</h2>
        <div className="flex-1 overflow-y-scroll px-4 mr-2 py-6 sm:px-6">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {productsList.map((item) => (
              <OrderItemCard key={item?.id} product={item} />
            ))}
          </ul>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p className="text-base text-gray-100 font-semibold">Total</p>
            <p className="text-xl text-gray-100 font-bold">
              ${getFormatoCOP(total)}
            </p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-transparent bg-jt1-green1 px-6 py-3 text-base font-medium text-white shadow-sm hover:opacity-80"
            >
              Checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
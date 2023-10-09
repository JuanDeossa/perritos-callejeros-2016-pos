import { deleteItem } from "@/redux/orderDataSlice";
import { useDispatch, useSelector } from "react-redux";
import "./shoppingCart.css";
import { QuantityButton } from "../QuantityButton";

export const ShoppingCart = () => {
  const { productsList, total } = useSelector((state) => state.orderData.value);
  return (
    // <div></div>
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
            <p className="text-base text-gray-100 font-semibold">Subtotal</p>
            <p className="text-xl text-gray-100 font-bold">${total}</p>
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
          {/* <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const OrderItemCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <li className="OrderItemCard flex py-3">
      {/* <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
          className="h-full w-full object-cover object-center"
        />
      </div> */}

      <div className="pl-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-semibold text-gray-300">
            <h3>
              <a href="#">{product.name}</a>
            </h3>
            <p className="ml-4">${product.price*product.units}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">${product.price}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-300">
            Unidades: <b className="text-lg">{product.units}</b>
          </p>
          <div className="flex gap-3">
            <QuantityButton id={product?.id} add={false} />
            <QuantityButton id={product?.id} />
          </div>
          <button
            type="button"
            className="font-medium text-jt1-green1 hover:opacity-60"
            onClick={() => dispatch(deleteItem(product.id))}
          >
            🗑️
          </button>
          {/* <div className="flex gap-14"></div> */}
        </div>
      </div>
    </li>
  );
};
import { deleteItem } from "@/redux/orderDataSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const ShoppingCart = () => {
  const { productsList, total } = useSelector((state) => state.orderData.value);
  return (
    // <div></div>
    <div className="ShoppingCart fixed top-0 right-0 pt-16  flex pl-10 h-screen">
      <div className="flex h-full flex-col bg-jt1-gray1 shadow-xl">
        <h2 className="text-lg font-bold text-gray-200 p-4">
          Shopping cart
        </h2>
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
    <li className="flex py-3">
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
            <p className="ml-4">${product.price}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{product.description}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">
            Unidades: <b>{product.units}</b>
          </p>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-jt1-green1 hover:opacity-60"
              onClick={() => dispatch(deleteItem(product.id))}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

const OriginalCart = () => {
  return (
    <div className="pt-16 pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
      <div className="pointer-events-auto w-screen max-w-md">
        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <div className="flex items-start justify-between">
              <h2
                className="text-lg font-medium text-gray-900"
                id="slide-over-title"
              >
                Shopping cart
              </h2>
              <div className="ml-3 flex h-7 items-center">
                <button
                  type="button"
                  className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                >
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Close panel</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {[0, 0, 0, 0, 0, 0, 0, 0].map((item) => (
                    <OrderItemCard key={item?.id} />
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>$262.00</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Checkout
              </a>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

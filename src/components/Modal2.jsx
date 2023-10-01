import { deleteProductByID, getAllProducts } from "@/firebase/services";
import { closeModal } from "@/redux/modalStatesSlice";
import { setProducts } from "@/redux/productsSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { NewProductForm } from "./newProductForm";
import { EditProductForm } from "./editProductForm";

export const Modal2 = () => {
  const modalProps = useSelector((state) => state.modalStates.value.openModal2);
  // console.log(modalProps);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal("openModal2"));
  };

  const successNotify = () =>
    toast.success("Producto eliminado con éxito!", {
      position: "top-left",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const errorNotify = () =>
    toast.error("No fue posible eliminar el producto", {
      position: "top-left",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const handleDelete = async () => {};

  return (
    <div>
      {modalProps.isOpen && (
        <div
          id="authentication-modal"
          tabindex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full grid place-content-center bg-cs_tr1"
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-gray-500 rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
                onClick={handleClose}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  Sign in to our platform
                </h3>
                <EditProductForm
                  id={modalProps.productID}
                  name={modalProps.name}
                  price={modalProps.price}
                  description={modalProps.description}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

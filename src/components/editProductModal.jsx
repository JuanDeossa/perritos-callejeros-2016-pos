import { closeModal } from "@/redux/modalStatesSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditProductForm } from "./editProductForm";

export const EditProductModal = () => {
  const modalProps = useSelector((state) => state.modalStates.value.openModal2);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal("openModal2"));
  };

  return (
    <div>
      {modalProps.isOpen && (
        <div
          tabindex="-1"
          aria-hidden="true"
          className="EditProductModal fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full grid place-content-center bg-cs_tr1"
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
                <EditProductForm
                  id={modalProps.productID}
                  name={modalProps.name}
                  price={modalProps.price}
                  description={modalProps.description}
                  categoryID={modalProps.category}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

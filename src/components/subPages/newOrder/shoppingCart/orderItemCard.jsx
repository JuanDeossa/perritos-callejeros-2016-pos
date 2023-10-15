import { deleteItem } from "@/redux/orderDataSlice";
import { useDispatch } from "react-redux";
import { QuantityButton } from "../QuantityButton";
import { getFormatoCOP } from "@/utils/dataFormat";
import { TrashIcon } from "@/components/common/iconsProvider";
import { useState } from "react";

export const OrderItemCard = ({ product }) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  return (
    <li className="OrderItemCard relative flex py-3">
      {openModal && (
        <div className="ConfirmDeleteItemModal absolute w-full h-full bg-jt1-modalBg1 flex justify-center items-center gap-2">
          <button
            className="absolute top-2 right-2 cursor-pointer bg-white text-jt1-gray2 font-bold px-2 rounded-md"
            onClick={handleCloseModal}
          >
            X
          </button>
          <button
            className="cursor-pointer bg-red-500 text-white font-bold px-2 py-1 rounded-md"
            onClick={() => dispatch(deleteItem(product.id))}
          >
            Eliminar
          </button>
        </div>
      )}
      <div className="pl-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-semibold text-gray-300">
            <h3>
              <a href="#">{product.name}</a>
            </h3>
            <p className="ml-4">
              ${getFormatoCOP(product.price * product.units)}
            </p>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            ${getFormatoCOP(product.price)}
          </p>
        </div>
        <div className="flex items-center justify-between text-sm">
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
            onClick={handleOpenModal}
          >
            <TrashIcon width={20} height={20} />
          </button>
        </div>
      </div>
    </li>
  );
};

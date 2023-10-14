import { deleteItem } from "@/redux/orderDataSlice";
import { useDispatch } from "react-redux";
import { QuantityButton } from "../QuantityButton";
import { getFormatoCOP } from "@/utils";
import { TrashIcon } from "@/components/iconsProvider";


export const OrderItemCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <li className="OrderItemCard flex py-3">
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
            onClick={() => dispatch(deleteItem(product.id))}
          >
            <TrashIcon width={20} height={20}/>
          </button>
        </div>
      </div>
    </li>
  );
};
/* eslint-disable @next/next/no-img-element */
import Counter from "../Counter";
import getDiscountedPrice from "app/additionalModule/productDiscount";
import useAppDispatch from "app/hooks/useAppDispatch";
import { IBasketProduct } from "app/store/slices/basket/types";
import { deleteFromBasket } from "app/store/slices/basket";
import TrashBinIcon from "public/icons/TrashBinIcon";

interface TProps {
  item: IBasketProduct;
}

const BasketItem = ({ item }: TProps) => {
  const dispatch = useAppDispatch();
  const deleteItem = () => dispatch(deleteFromBasket({ id: item.id }));

  const currentPrice = getDiscountedPrice(
    item.product.price,
    item.product.discount
  );

  return (
    <section className="grid grid-cols-[1fr_3fr_2fr] grid-flow-col-dense gap-4 w-full p-[15px_10px] bg-white rounded-[30px] shadow-md">
      <div className="flex flex-col items-center">
        <div className="flex w-[150px] h-[150px] box-border mb-4">
          <img src={item.product.img} alt="фото" className="w-[90%] m-auto" />
        </div>
        <Counter itemId={item.id}>{item.quantity}</Counter>
      </div>

      <div className="flex flex-col justify-center">
        <span className="font-medium font-montserrat text-[17px]">
          {item.product.name}
        </span>
        <span className="font-semibold font-montserrat text-[15px] text-gray-500">
          {currentPrice} ₽
        </span>
      </div>

      <div className="flex flex-col justify-between items-end font-montserrat font-semibold text-[15px] pr-[10px]">
        <div
          className="flex w-[20px] h-[20px] cursor-pointer"
          onClick={deleteItem}
        >
          <TrashBinIcon />
        </div>
        <span>{item.sum} ₽</span>
      </div>
    </section>
  );
};

export default BasketItem;

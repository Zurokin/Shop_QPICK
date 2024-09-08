import * as React from "react";
import AsidesRow from "../сardText";
import { IProduct } from "app/store/slices/products/types";
import { addToBasket } from "app/store/slices/basket";
import useAppDispatch from "app/hooks/useAppDispatch";
import { FaEye } from "react-icons/fa";
import Image from "next/image";
import ProductModal from "../ProductModal";
import RateIcon from "public/icons/RateIcon";

interface TProps {
  item: IProduct;
}

const GridItem = ({ item }: TProps) => {
  const dispatch = useAppDispatch();
  const addProductToBasket = () => dispatch(addToBasket(item));

  const [isModalOpen, setModalOpen] = React.useState(false);
  const currentPrice = item.discount
    ? Math.round(item.price * (1 - item.discount))
    : item.price;

  const discounted = item.discount ? true : false;

  return (
    <section className="relative flex flex-col min-h-[400px] p-7 font-semibold text-lg bg-white rounded-[30px] shadow-md">
      {/* Иконка для открытия модального окна */}
      <button
        className="absolute top-2 right-2 px-6 py-6 text-gray-600"
        onClick={() => setModalOpen(true)}
      >
        <FaEye size={24} />
      </button>

      <div className="flex flex-1">
        <Image
          width={220}
          height={100}
          src={item.img}
          alt="фото"
          className="max-w-[250px] min-w-[100px] m-auto"
        />
      </div>

      <AsidesRow>
        <span className="font-montserrat font-semibold">{item.name}</span>
        <span className="text-[#FFA542] font-montserrat font-semibold">
          {currentPrice} ₽
        </span>
        {discounted && (
          <del className="absolute pt-10 right-0 font-montserrat font-semibold text-sm text-[#FFCE7F]">
            {item.price} ₽
          </del>
        )}
      </AsidesRow>

      <AsidesRow>
        <div className="flex items-center text-gray-600">
          <RateIcon />
          <span className="ml-2 font-montserrat font-semibold">
            {item.rate}
          </span>
        </div>
        <button
          className="bg-transparent border-none font-montserrat font-semibold font-inherit cursor-pointer"
          onClick={addProductToBasket}
        >
          Купить
        </button>
      </AsidesRow>

      {/* Модальное окно */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        product={item}
      />
    </section>
  );
};

export default GridItem;

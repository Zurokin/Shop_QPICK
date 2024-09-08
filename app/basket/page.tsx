"use client";

import Link from "next/link";
import BasketForm from "../../components/BasketComponents/BasketForm";
import BasketItem from "../../components/BasketComponents/BasketItem";
import useAppSelector from "../hooks/useAppSelector";
import { useEffect } from "react";

const BasketPage = () => {
  const basketData = useAppSelector((state) => state.basket);

  useEffect(() => {
    document.title = "Корзина";
  }, []);

  return (
    <main className="flex flex-col items-center justify-center">
      {basketData.basketProductsList.length > 0 ? (
        <>
          <h1 className="text-xl py-3 text-black font-montserrat font-semibold w-full">
            Корзина
          </h1>
          <div className="flex flex-wrap justify-between items-start w-full">
            <section className="flex flex-col gap-4 w-[60%] mb-96">
              {basketData.basketProductsList.map((basketProduct) => (
                <BasketItem
                  key={basketProduct.id + Date.now()}
                  item={basketProduct}
                />
              ))}
            </section>

            <div className="w-[30%]">
              <BasketForm sum={basketData.totalSum} />
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full bg-white rounded-[30px] font-montserrat font-semibold shadow-md p-5 text-[15px]">
          <span className="mb-4">Ваша корзина пуста, скорее наполните её</span>
          <Link href="/" passHref>
            <button className="bg-black text-white rounded-[20px] py-2 px-4">
              Вперёд к покупкам!
            </button>
          </Link>
        </div>
      )}
    </main>
  );
};

export default BasketPage;

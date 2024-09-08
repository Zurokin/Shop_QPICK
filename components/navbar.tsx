import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Хук для получения текущего пути
import classNames from "classnames"; // Для удобного управления классами
import useAppSelector from "app/hooks/useAppSelector";
import BasketIcon from "public/icons/BasketIcon";
import FavoritesIcon from "public/icons/FavoritesIcon";

const Navbar = () => {
  const pathname = usePathname(); // Получаем текущий путь
  const basketProductsList = useAppSelector(
    (state) => state.basket.basketProductsList
  );

  const quantity = React.useMemo(
    () => basketProductsList.length,
    [basketProductsList]
  );

  // Функция для определения активного пути
  const isActive = (route: string) => pathname === route;

  return (
    <nav className="flex items-center pt-6 h-15">
      <Link href="/">
        <span className="font-montserrat font-bold text-2xl cursor-pointer">
          QPICK
        </span>
      </Link>

      <div className="flex ml-auto">
        {/* Ссылка на избранное */}
        <Link href="/" className="relative flex w-6 h-6 mx-5">
          <FavoritesIcon
            className={classNames({
              "fill-[#585858]": isActive("/"),
              "fill-[#838383]": !isActive("/"),
            })}
          />
        </Link>

        {/* Ссылка на корзину с количеством товаров */}
        <Link href="/basket" className="relative flex w-6 h-6 mx-5">
          {quantity > 0 && (
            <div className="absolute flex items-center justify-center w-4 h-4 bg-[#FFA542] text-xs font-medium text-white rounded-full top-[-5px] right-[-5px]">
              {quantity}
            </div>
          )}
          <BasketIcon
            className={classNames({
              "fill-[#585858]": isActive("/basket"),
              "fill-[#838383]": !isActive("/basket"),
            })}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";

import {
  decreaseProductQuantity,
  increaseProductQuantity,
} from "app/store/slices/basket";

import useAppDispatch from "app/hooks/useAppDispatch";
import Minus from "public/icons/CounterIcons/Minus";
import Plus from "public/icons/CounterIcons/Plus";

interface TProps {
  itemId: number;
  children: React.ReactNode;
}

const Counter = ({ itemId, children }: TProps) => {
  const dispatch = useAppDispatch();

  const increase = () => dispatch(increaseProductQuantity({ id: itemId }));
  const decrease = () => dispatch(decreaseProductQuantity({ id: itemId }));

  return (
    <div className="grid grid-cols-[30px_1fr_30px] auto-rows-auto gap-2 w-[80%] min-h-[30px]">
      <button
        className="flex justify-center items-center bg-[#FFCE7F] rounded-full border-none cursor-pointer"
        onClick={decrease}
      >
        <Minus className="w-[50%] h-[50%]" />
      </button>

      <span className="flex justify-center items-center font-montserrat font-semibold text-[17px]">
        {children}
      </span>

      <button
        className="flex justify-center items-center bg-[#FFCE7F] rounded-full border-none cursor-pointer"
        onClick={increase}
      >
        <Plus className="w-[50%] h-[50%]" />
      </button>
    </div>
  );
};

export default Counter;

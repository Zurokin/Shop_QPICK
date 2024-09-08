import Modal from "@/components/modal";
import React, { useState } from "react";

interface TProps {
  sum: number;
}

const BasketForm = ({ sum }: TProps) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <form className="flex flex-col h-fit bg-white rounded-[30px] font-montserrat font-semibold shadow-md">
        <div className="flex flex-row h-[60px] px-5 justify-between items-center text-[15px]">
          <span>ИТОГО</span>
          <span>₽ {sum}</span>
        </div>
        <button
          className="bg-black h-[60px] border-none rounded-[20px] text-white text-[17px] cursor-pointer"
          onClick={handleOpenModal}
        >
          Перейти к оформлению
        </button>
      </form>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-xl font-montserrat font-bold mb-4">
          Оформление заказа
        </h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Введите имя"
            className="border font-montserrat p-2 rounded"
          />
          <input
            type="email"
            placeholder="Введите email"
            className="border font-montserrat p-2 rounded"
          />
          <input
            type="text"
            placeholder="Номер карты"
            className="border font-montserrat p-2 rounded"
          />
          <button className="bg-black font-montserrat text-white py-2 rounded">
            Оплатить
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default BasketForm;

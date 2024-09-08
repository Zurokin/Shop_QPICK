import React from "react";
import { IProduct } from "app/store/slices/products/types";
import Image from "next/image";
import RateIcon from "public/icons/RateIcon";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: IProduct;
}

const ProductModal = ({ isOpen, onClose, product }: ProductModalProps) => {
  if (!isOpen) return null;

  const currentPrice = product.discount
    ? Math.round(product.price * (1 - product.discount))
    : product.price;

  const originalPrice = product.discount ? product.price : null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex font-montserrat items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-lg w-full">
        <button className="absolute top-2 right-2 text-black" onClick={onClose}>
          ✕
        </button>
        <div className="flex flex-col items-center">
          <Image
            width={220}
            height={100}
            src={product.img}
            alt={product.name}
            className="w-48 h-48 object-cover mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-700 text-center mb-4">
            {product.description}
          </p>
          <div className="text-xl font-semibold text-[#FFA542] mb-2">
            {currentPrice} ₽
          </div>
          {originalPrice && (
            <div className="text-sm text-[#FFCE7F] line-through">
              {originalPrice} ₽
            </div>
          )}
          <div className="flex pt-2 items-center text-gray-600">
            <RateIcon />
            <span className="ml-2 font-montserrat font-semibold">
              {product.rate}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

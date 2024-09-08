// components/Modal.tsx
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 font-montserrat flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg relative">
        <button className="absolute top-2 right-2 text-black" onClick={onClose}>
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

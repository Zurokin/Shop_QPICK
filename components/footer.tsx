import React from "react";
import Link from "next/link";
import LanguageIcon from "public/icons/LanguageIcon";
import VkIcon from "public/icons/SocialIcons/VkIcon";
import TelegramIcon from "public/icons/SocialIcons/TelegramIcon";
import WhatsappIcon from "public/icons/SocialIcons/WhatsappIcon";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-8 gap-4 min-h-[150px] py-5 bg-white rounded-t-[30px]  shadow-md text-[17px]">
      <div className="flex flex-col pt-4 items-start pl-7">
        <Link href="">
          <span className="text-[25px] font-montserrat font-bold scursor-pointer text-black">
            QPICK
          </span>
        </Link>
      </div>

      <div className="flex flex-col items-center pt-4 font-montserrat font-regular text-[17px]">
        <ul className="flex flex-col list-none p-0">
          <li className="cursor-pointer text-black">Избранное</li>
          <Link href="">
            <li className="cursor-pointer text-black">Корзина</li>
          </Link>
          <li className="cursor-pointer text-black">Контакты</li>
        </ul>
      </div>

      <div className="flex flex-col items-center pt-4 font-montserrat font-regular text-[15px]">
        <div>
          <span className="cursor-pointer">Условия сервиса</span>
          <div className="flex items-center mt-6">
            <LanguageIcon className="fill-[#838383]" />
            <span className="text-[#FFA542] font-montserrat font-bold mx-2">
              Рус
            </span>
            <span>Eng</span>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4 space-x-2 pr-7">
        <VkIcon className="w-7 h-7 cursor-pointer" />
        <TelegramIcon className="w-7 h-7 cursor-pointer" />
        <WhatsappIcon className="w-7 h-7 cursor-pointer" />
      </div>
    </footer>
  );
};

export default Footer;

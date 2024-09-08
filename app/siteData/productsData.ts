import { IProduct } from "../store/slices/products/types";
import mockCategories from "./categoriesData";

const mockProducts: IProduct[] = [
  {
    id: 1,
    categoryId: mockCategories[0].id,
    name: "Apple BYZ S852I",
    img: "/assets/Apple-BYZ-S852I.png",
    description:
      "Премиум беспроводные наушники с высоким качеством звука и отличной шумоизоляцией.",
    price: 3527,
    discount: 0.17,
    rate: 4.7,
  },
  {
    id: 2,
    categoryId: mockCategories[0].id,
    name: "Apple EarPods",
    img: "/assets/Apple-EarPods.png",
    description:
      "Удобные проводные наушники с чистым и качественным звуком. Идеальны для ежедневного использования.",
    price: 2327,
    rate: 4.5,
  },
  {
    id: 3,
    categoryId: mockCategories[0].id,
    name: "Apple EarPods",
    img: "/assets/Apple-EarPods-2.png",
    description:
      "Проводные наушники с улучшенной эргономикой и высоким качеством звука. Подходят для длительного прослушивания.",
    price: 2327,
    rate: 4.5,
  },
  {
    id: 4,
    categoryId: mockCategories[0].id,
    name: "Apple BYZ S852I",
    img: "/assets/Apple-BYZ-S852I.png",
    description:
      "Беспроводные наушники с современными функциями и стильным дизайном. Обеспечивают отличное звучание и комфорт.",
    price: 2927,
    rate: 4.7,
  },
  {
    id: 5,
    categoryId: mockCategories[0].id,
    name: "Apple EarPods",
    img: "/assets/Apple-EarPods.png",
    description:
      "Классические проводные наушники Apple с хорошей шумоизоляцией и качественным звуком. Идеальны для использования в дороге.",
    price: 2327,
    rate: 4.5,
  },
  {
    id: 6,
    categoryId: mockCategories[0].id,
    name: "Apple EarPods",
    img: "/assets/Apple-EarPods-2.png",
    description:
      "Наушники с кабелем и эргономичным дизайном для комфортного прослушивания музыки. Отличное качество звука и удобство.",
    price: 2327,
    rate: 4.5,
  },

  // Беспроводные наушники
  {
    id: 7,
    categoryId: mockCategories[1].id,
    name: "Apple EarPods",
    img: "/assets/Apple-AirPods-3.png",
    description:
      "Новые беспроводные наушники Apple с улучшенной акустикой и удобной посадкой. Идеальны для активного образа жизни.",
    price: 9527,
    rate: 4.7,
  },
  {
    id: 8,
    categoryId: mockCategories[1].id,
    name: "GERLAX GH-04",
    img: "/assets/GERLAX-GH-04.png",
    description:
      "Беспроводные наушники с хорошим качеством звука и длительным временем работы от аккумулятора. Отличный выбор для путешествий.",
    price: 6527,
    rate: 4.7,
  },
  {
    id: 9,
    categoryId: mockCategories[1].id,
    name: "BOROFONE BO4",
    img: "/assets/BOROFONE-BO4.png",
    description:
      "Элегантные беспроводные наушники с мощным звуком и хорошей шумоизоляцией. Подходят для любого музыкального жанра.",
    price: 7527,
    rate: 4.7,
  },
];

export default mockProducts;

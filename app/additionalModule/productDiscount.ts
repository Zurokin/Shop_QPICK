const getDiscountedPrice = (
  price: number,
  discount: number = 0 // задаем значение по умолчанию
): number => {
  // Проверка на отрицательные значения
  if (price < 0 || discount < 0) {
    throw new Error("Price and discount must be non-negative numbers.");
  }

  // Проверка на корректный диапазон скидки
  if (discount > 1) {
    throw new Error("Discount must be a value between 0 and 1.");
  }

  const discountedPrice = Math.round(price * (1 - discount));
  return discountedPrice;
};

export default getDiscountedPrice;

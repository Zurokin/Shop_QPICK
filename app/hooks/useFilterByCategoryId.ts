interface IArrayWithCategoryId {
  categoryId: number;
}

interface IParams<T extends IArrayWithCategoryId> {
  array: T[];
  id: number;
}

const useFilterByCategoryId = <T extends IArrayWithCategoryId>({
  array,
  id,
}: IParams<T>): T[] => {
  return array.filter((element) => element.categoryId === id);
};

export default useFilterByCategoryId;

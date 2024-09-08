interface IArrayWithCategoryId {
	categoryId: number;
}

interface IParams {
	array: IArrayWithCategoryId[];
	id: number;
}

const useFilterByCategoryId = ({ array, id }: IParams): Array<any> => {
	return array.filter(element => element.categoryId === id);
};

export default useFilterByCategoryId;

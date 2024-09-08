export interface ICategory {
	id: number;
	name: string;
}

export interface ICategoriesState {
	categoriesList: ICategory[] | null;
}

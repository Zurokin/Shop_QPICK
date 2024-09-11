export interface IProduct {
  quantity: 0;
  id: number;
  categoryId: number;
  name: string;
  img: string;
  description: string;

  price: number;
  discount?: number;
  rate: number;
}

export interface IProductsState {
  productsList: IProduct[];
}

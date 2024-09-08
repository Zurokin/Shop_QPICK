import GridItem from "../GridItem";
import useFilterByCategoryId from "app/hooks/useFilterByCategoryId";
import useAppSelector from "app/hooks/useAppSelector";
import { IProduct } from "app/store/slices/products/types";
import { RootState } from "app/store";

interface TProps {
  categoryId: number;
}

const Grid = ({ categoryId }: TProps) => {
  const productsList = useAppSelector(
    (state: RootState) => state.products.productsList
  );
  const filteredList: IProduct[] = useFilterByCategoryId({
    array: productsList,
    id: categoryId,
  });

  return (
    <div className="grid grid-cols-auto-fit min-w-[300px] gap-6 w-full sm:grid-cols-2 sm:justify-center md:grid-cols-3">
      {filteredList.map((product) => (
        <GridItem key={product.id} item={product} />
      ))}
    </div>
  );
};

export default Grid;

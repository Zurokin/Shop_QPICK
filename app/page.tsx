"use client";

import * as React from "react";

import useAppSelector from "./hooks/useAppSelector";
import Grid from "@/MainShopComponents/Grid";

const ShopPage = () => {
  const categoriesList = useAppSelector(
    (state) => state.categories.categoriesList
  );

  React.useEffect(() => {
    document.title = "QPICK";
  }, []);

  return (
    <>
      <main className="flex flex-col">
        {categoriesList &&
          categoriesList.map((category) => (
            <React.Fragment key={category.id}>
              <h1 className="text-xl font-montserrat font-semibold text-gray-500 mb-4 text-center pt-5 sm:text-left">
                {category.name}
              </h1>
              <Grid categoryId={category.id} />
            </React.Fragment>
          ))}
      </main>
    </>
  );
};

export default ShopPage;

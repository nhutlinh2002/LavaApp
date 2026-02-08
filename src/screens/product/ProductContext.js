import React, { useState, createContext } from "react";
import { getProductById, getProducts } from "./ProductSevice";

export const ProductContext = createContext();

export const ProductContextProvider = (props) => {
  const { children } = props;
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);

  const onGetProducts = async () => {
    try {
      const res = await getProducts();
      setProducts(res);
      console.log("asd", res)
    } catch (error) {
      console.log("onProducts error", error);
    }
  };

  const onGetProductById = async (id) => {
    try {
      const res = await getProductById(id);
      setProduct(res);
    } catch (error) {
      console.log("onProductById error", error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        onGetProductById,
        onGetProducts,
        product,
        products,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};



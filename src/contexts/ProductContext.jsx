import React, {createContext, useState, useEffect} from 'react';

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setProducts(data);
        });
    };
    fetchProducts();
  }, [])
  return (
    <ProductContext.Provider value={{products}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
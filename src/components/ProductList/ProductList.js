import React from "react";
import { Product } from "..";

const ProductList = ({ products, compare, nameSearch }) => {
  const renderProducts = () => {
    return (nameSearch.length > 0) ? products.filter(x => {
      console.log(x['price'].slice(1));
      let price = parseFloat(x['price'].slice(1));
      let priceSearch = parseFloat(nameSearch);
      return price <= priceSearch;
    }) : products;
  };

  return (
    <div className="row mt-3">
      {renderProducts().map((product) => (
        <Product key={product.id} product={product} compare={compare} />
      ))}
    </div>
  );
};

export default ProductList;

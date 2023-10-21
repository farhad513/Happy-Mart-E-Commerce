import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import ProductHeader from "../components/ProductHeader/ProductHeader";
import ProductDeatils from "../components/ProductDeatils/ProductDeatils";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";
import RelatedProduct from "../components/RelatedProduct/RelatedProduct";
const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((p) => p.id === Number(productId));

  return (
    <div>
      <ProductHeader product={product} />
      <ProductDeatils product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  );
};

export default Product;

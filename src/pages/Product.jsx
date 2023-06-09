import { useContext } from "react";
import { useMatch } from "react-router-dom";
import { AppContext } from "../App";
import NotFound from "./NotFound";
import AddToCart from "../components/AddToCart/AddToCart";

import "./Product.css";

export default function Product() {
  const { params } = useMatch("/product/:path");
  const { products } = useContext(AppContext); 

  const product = products.find(product => product.path === params.path);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="Product">
      <h2>{product.name}</h2>
      <img src={product.picture} alt={product.name} />
      <span>{product.price} som</span>
      <p>{product.description}</p>
      <AddToCart product={product} />
    </div>
  );
}
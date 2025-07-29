import { useParams } from "react-router-dom";
import products from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{product.name}</h2>
      <p>Price: ₹{product.price}</p>
      <p>Description: Lorem ipsum dolor sit amet...</p>
    </div>
  );
}

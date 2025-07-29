// Shop.jsx
import { Link } from "react-router-dom";
import products from "../data/products";

export default function Shop() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Shop Now</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              width: "200px",
              textAlign: "center",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "auto" }}
            />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <Link to={`/product/${product.id}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

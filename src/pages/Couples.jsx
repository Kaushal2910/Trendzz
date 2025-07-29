import React from "react";

const navLinks = [
  "New Arrivals",
  "Women's",
  "Men's",
  "Couple's",
  "Sale",
  "About Us",
];

const footerLinks = [
  ["About Us", "#about"],
  ["Contact", "#contact"],
  ["Privacy Policy", "#privacy"],
  ["Terms", "#terms"],
  ["FAQ", "#faq"],
];

const couplesProducts = [
  {
    name: "Matching Linen Co‑Ord Set",
    sale: "₹1,799",
    regular: "₹3,599",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2lCYo1jLfRQEKiXlmvka2cDwSr2SrVp8jYw&s",
  },
  {
    name: "Pastel Couple Hoodie Combo",
    sale: "₹2,499",
    regular: "₹4,999",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStv5S_xqxnBlxj2ydNHqglt4fMFqBefxcnSg&s",
  },
  {
    name: "Summer Couple Kurta Set",
    sale: "₹1,999",
    regular: "₹3,999",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXdu3RURKrhOeEqsAS-0YNnbPCNeEIPdx_YA&s",
  },
  {
    name: "Royal Wedding Co‑Ord Outfit",
    sale: "₹3,199",
    regular: "₹6,499",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNwEoG4PlwuYmOzn4OGUMSV5km2lAeIwv2QQ&s",
  },
];

export default function App() {
  return (
    <div style={styles.container}>
      {/* Top Announcement Bar */}
      <div style={styles.announcement}>
        End of Session Sale | FOR HIM & HER
      </div>

      {/* Navbar */}
      <header style={styles.navbar}>
        <h1 style={styles.logo}>Yashnira</h1>
        <ul style={styles.navList}>
          {navLinks.map((l) => (
            <li key={l} style={styles.navItem}>
              <a
                href={`#${l.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                style={styles.navLink}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </header>

      {/* Page Title */}
      <h2 style={styles.heading}>Couple's Collection</h2>

      {/* Product Grid */}
      <section style={styles.products}>
        {couplesProducts.map((p) => (
          <div key={p.name} style={styles.card}>
            <img src={p.img} alt={p.name} style={styles.image} />
            <h3 style={styles.cardTitle}>{p.name}</h3>
            <p style={styles.price}>
              <span style={styles.sale}>{p.sale}</span>{" "}
              <span style={styles.regular}>{p.regular}</span>
            </p>
            <button style={styles.button}>Choose Options</button>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerLinks}>
          {footerLinks.map(([label, href]) => (
            <a key={label} href={href} style={styles.footerLink}>
              {label}
            </a>
          ))}
        </div>
        <div style={styles.newsletter}>
          <p style={styles.footerNewsletterText}>Subscribe to Our Newsletter</p>
          <form style={styles.footerForm}>
            <input
              type="email"
              placeholder="Email address"
              style={styles.footerInput}
            />
            <button type="submit" style={styles.footerBtn}>
              Subscribe
            </button>
          </form>
        </div>
        <p style={styles.copyright}>
          © 2025 Yashnira. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    color: "#333",
    margin: 0,
    padding: 0,
  },
  announcement: {
    background: "#f1e9e0",
    textAlign: "center",
    padding: "0.5rem",
    fontSize: "0.9rem",
    letterSpacing: "1px",
  },
  navbar: {
    padding: "1rem 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #ddd",
    position: "sticky",
    top: 0,
    background: "#fff",
    zIndex: 100,
  },
  logo: {
    margin: 0,
    fontSize: "1.6rem",
    letterSpacing: "2px",
    fontWeight: 700,
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "1.5rem",
    margin: 0,
    padding: 0,
  },
  navItem: {},
  navLink: {
    textDecoration: "none",
    color: "#333",
    fontWeight: 500,
    fontSize: "0.95rem",
  },
  heading: {
    textAlign: "center",
    margin: "2rem 0 1rem",
    fontSize: "1.8rem",
    fontWeight: "bold",
  },
  products: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1.5rem",
    padding: "2rem",
    maxWidth: "1240px",
    margin: "0 auto",
  },
  card: {
    border: "1px solid #eee",
    padding: "1rem",
    textAlign: "center",
    background: "#fff",
  },
  image: {
    width: "100%",
    objectFit: "cover",
  },
  cardTitle: {
    fontSize: "1.1rem",
    margin: "0.8rem 0",
  },
  price: {
    margin: "0.5rem 0",
  },
  sale: {
    color: "#c0392b",
    fontWeight: 600,
  },
  regular: {
    marginLeft: "0.5rem",
    textDecoration: "line-through",
    color: "#aaa",
  },
  button: {
    background: "#333",
    color: "#fff",
    border: "none",
    padding: "0.6rem 1.2rem",
    cursor: "pointer",
    fontSize: "0.9rem",
  },
  footer: {
    background: "#f8f8f8",
    color: "#555",
    padding: "2rem 1rem",
    textAlign: "center",
    fontSize: "0.9rem",
  },
  footerLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "1rem",
    flexWrap: "wrap",
  },
  footerLink: {
    color: "#555",
    textDecoration: "none",
    fontSize: "0.9rem",
  },
  newsletter: {
    marginBottom: "1rem",
  },
  footerNewsletterText: {
    marginBottom: "0.5rem",
    fontWeight: 500,
  },
  footerForm: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
  },
  footerInput: {
    padding: "0.6rem",
    width: "200px",
    border: "1px solid #ccc",
  },
  footerBtn: {
    padding: "0.6rem 1rem",
    background: "#333",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  copyright: {
    marginTop: "1rem",
    fontSize: "0.85rem",
    color: "#999",
  },
};

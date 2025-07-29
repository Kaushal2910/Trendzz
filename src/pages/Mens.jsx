



import React from "react";

const navLinks = [
  "End of Session Sale",
  "New Arrivals",
  "Women's",
  "Men's",
  "Couple's",
  "About Us",
];

const footerLinks = [
  ["Track Your Order", "#track"],
  ["About Us", "#about"],
  ["Privacy Policy", "#privacy"],
  ["Return & Refund Policy", "#returns"],
  ["Contact Us", "#contact"],
];

const products = [
  {
    name: "Grey Checked Shirt",
    sale: "₹500",
    regular: "₹999",
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQJZTMeJZFno2W5aemIvzu57R2PZSWgX2Wc3kpSKAEqZb8jWIRKQJhQ_VO_Jea_j7YR6eWbdlI-MeJSu7KX2yCU25bLEiIpvai49Lvvg20",
  },
  {
    name: "Blue Tropical Shirt",
    sale: "₹599",
    regular: "₹1199",
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQJZTMeJZFno2W5aemIvzu57R2PZSWgX2Wc3kpSKAEqZb8jWIRKQJhQ_VO_Jea_j7YR6eWbdlI-MeJSu7KX2yCU25bLEiIpvai49Lvvg20",
  },
  {
    name: "Solid Grey Mandarin Collar",
    sale: "₹500",
    regular: "₹999",
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQJZTMeJZFno2W5aemIvzu57R2PZSWgX2Wc3kpSKAEqZb8jWIRKQJhQ_VO_Jea_j7YR6eWbdlI-MeJSu7KX2yCU25bLEiIpvai49Lvvg20",
  },
  {
    name: "Grey Checked Shirt",
    sale: "₹500",
    regular: "₹999",
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQJZTMeJZFno2W5aemIvzu57R2PZSWgX2Wc3kpSKAEqZb8jWIRKQJhQ_VO_Jea_j7YR6eWbdlI-MeJSu7KX2yCU25bLEiIpvai49Lvvg20",
  },
  {
    name: "Blue Tropical Shirt",
    sale: "₹599",
    regular: "₹1199",
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQJZTMeJZFno2W5aemIvzu57R2PZSWgX2Wc3kpSKAEqZb8jWIRKQJhQ_VO_Jea_j7YR6eWbdlI-MeJSu7KX2yCU25bLEiIpvai49Lvvg20",
  },
  {
    name: "Solid Grey Mandarin Collar",
    sale: "₹500",
    regular: "₹999",
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQJZTMeJZFno2W5aemIvzu57R2PZSWgX2Wc3kpSKAEqZb8jWIRKQJhQ_VO_Jea_j7YR6eWbdlI-MeJSu7KX2yCU25bLEiIpvai49Lvvg20",
  },
  {
    name: "Grey Checked Shirt",
    sale: "₹500",
    regular: "₹999",
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQJZTMeJZFno2W5aemIvzu57R2PZSWgX2Wc3kpSKAEqZb8jWIRKQJhQ_VO_Jea_j7YR6eWbdlI-MeJSu7KX2yCU25bLEiIpvai49Lvvg20",
  },
  {
    name: "Blue Tropical Shirt",
    sale: "₹599",
    regular: "₹1199",
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQJZTMeJZFno2W5aemIvzu57R2PZSWgX2Wc3kpSKAEqZb8jWIRKQJhQ_VO_Jea_j7YR6eWbdlI-MeJSu7KX2yCU25bLEiIpvai49Lvvg20",
  },
  {
    name: "Solid Grey Mandarin Collar",
    sale: "₹500",
    regular: "₹999",
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQJZTMeJZFno2W5aemIvzu57R2PZSWgX2Wc3kpSKAEqZb8jWIRKQJhQ_VO_Jea_j7YR6eWbdlI-MeJSu7KX2yCU25bLEiIpvai49Lvvg20",
  },
  {
    name: "Grey Checked Shirt",
    sale: "₹500",
    regular: "₹999",
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQJZTMeJZFno2W5aemIvzu57R2PZSWgX2Wc3kpSKAEqZb8jWIRKQJhQ_VO_Jea_j7YR6eWbdlI-MeJSu7KX2yCU25bLEiIpvai49Lvvg20",
  },
  {
    name: "Blue Tropical Shirt",
    sale: "₹599",
    regular: "₹1199",
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQJZTMeJZFno2W5aemIvzu57R2PZSWgX2Wc3kpSKAEqZb8jWIRKQJhQ_VO_Jea_j7YR6eWbdlI-MeJSu7KX2yCU25bLEiIpvai49Lvvg20",
  },
  {
    name: "Solid Grey Mandarin Collar",
    sale: "₹500",
    regular: "₹999",
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQJZTMeJZFno2W5aemIvzu57R2PZSWgX2Wc3kpSKAEqZb8jWIRKQJhQ_VO_Jea_j7YR6eWbdlI-MeJSu7KX2yCU25bLEiIpvai49Lvvg20",
  }
  ];

export default function App() {
  return (
    <div style={styles.container}>
      {/* Announcement */}
      <div style={styles.announcement}>
        End of Session Sale | FOR HIM & HER
      </div>

      {/* Navbar */}
      <header style={styles.navbar}>
        <h1 style={styles.logo}>Yashnira</h1>
        <ul style={styles.navList}>
          {navLinks.map((l) => (
            <li key={l}>
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

      {/* Hero */}
      <section style={styles.hero}>
        <h2 style={styles.heroTitle}>Men's Collection</h2>
      </section>

      {/* Products */}
      <section style={styles.products}>
        {products.map((p) => (
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
        <div style={styles.footerInfo}>
          <p>
            Made In India • Free Shipping • Easy Return & Secure Payments
          </p>
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
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    borderBottom: "1px solid #ddd",
    position: "sticky",
    top: 0,
    background: "#fff",
    zIndex: 100,
  },
  logo: {
    fontSize: "1.6rem",
    fontWeight: 700,
    letterSpacing: "2px",
    margin: 0,
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "1.2rem",
    margin: 0,
    padding: 0,
  },
  navLink: {
    textDecoration: "none",
    color: "#333",
    fontWeight: 500,
    fontSize: "0.95rem",
  },
  hero: {
    textAlign: "center",
    padding: "2rem 1rem",
  },
  heroTitle: {
    fontSize: "2rem",
    margin: "0",
  },
  products: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1.5rem",
    padding: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  card: {
    border: "1px solid #eee",
    padding: "1rem",
    background: "#fff",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "auto",
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
    textDecoration: "line-through",
    color: "#aaa",
    marginLeft: "0.5rem",
  },
  button: {
    background: "#333",
    color: "#fff",
    border: "none",
    padding: "0.6rem 1.2rem",
    fontSize: "0.9rem",
    cursor: "pointer",
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
    flexWrap: "wrap",
    marginBottom: "1rem",
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
    fontWeight: 500,
    marginBottom: "0.5rem",
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
  footerInfo: {
    marginBottom: "0.8rem",
    fontSize: "0.9rem",
  },
  copyright: {
    fontSize: "0.85rem",
    color: "#999",
  },
};

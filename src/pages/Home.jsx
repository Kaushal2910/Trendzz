import React from 'react';

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

const products = [
   {
    name: "Lemon Bloom Flared Dress",
    sale: "₹799",
    regular: "₹1999",
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSTFar5EbxP9AEPAdy5VuvzWI67bnh8-7dOJE4U3qtlcRGB_l0xfHlWuQlOGEJd80LAoCxGiQcF9d0ndAW9wk0Vk56b8dG3U0Ja9qtvPguwxTtlC7TX0oRbNg",
  },
  {
    name: "Aqua Swirl Co‑Ord Set",
    sale: "₹999",
    regular: "₹1999",
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQClnnbUCCLXen44IQVXi735G2x4UCqoO0clTEQmHlAQ7hD6HQpb6R4CDHPOlYkOQVw7uzY9_ttgNwIUuXGWsxCBZUPKMlAFq5D4P_ThIY",
  },
  {
    name: "Aqua Bloom Dress",
    sale: "₹1200",
    regular: "₹2199",
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSZ05sGgBwTNmc0LcswiuLeU0_-Zj8sR6iE0hIjP282SsGfo4Xkbz1aKEBT04qxZ5fdNoMSTOQYeqYKa_LRCN4F6C6A_iflwPl-MsLsrs6pg0bWurrcvHO7",
  },
   {
    name: "Lemon Bloom Flared Dress",
    sale: "₹799",
    regular: "₹1999",
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSTFar5EbxP9AEPAdy5VuvzWI67bnh8-7dOJE4U3qtlcRGB_l0xfHlWuQlOGEJd80LAoCxGiQcF9d0ndAW9wk0Vk56b8dG3U0Ja9qtvPguwxTtlC7TX0oRbNg",
  },
  {
    name: "Aqua Swirl Co‑Ord Set",
    sale: "₹999",
    regular: "₹1999",
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQClnnbUCCLXen44IQVXi735G2x4UCqoO0clTEQmHlAQ7hD6HQpb6R4CDHPOlYkOQVw7uzY9_ttgNwIUuXGWsxCBZUPKMlAFq5D4P_ThIY",
  },
  {
    name: "Aqua Bloom Dress",
    sale: "₹1200",
    regular: "₹2199",
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSZ05sGgBwTNmc0LcswiuLeU0_-Zj8sR6iE0hIjP282SsGfo4Xkbz1aKEBT04qxZ5fdNoMSTOQYeqYKa_LRCN4F6C6A_iflwPl-MsLsrs6pg0bWurrcvHO7",
  },
   {
    name: "Lemon Bloom Flared Dress",
    sale: "₹799",
    regular: "₹1999",
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSTFar5EbxP9AEPAdy5VuvzWI67bnh8-7dOJE4U3qtlcRGB_l0xfHlWuQlOGEJd80LAoCxGiQcF9d0ndAW9wk0Vk56b8dG3U0Ja9qtvPguwxTtlC7TX0oRbNg",
  },
  {
    name: "Aqua Swirl Co‑Ord Set",
    sale: "₹999",
    regular: "₹1999",
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQClnnbUCCLXen44IQVXi735G2x4UCqoO0clTEQmHlAQ7hD6HQpb6R4CDHPOlYkOQVw7uzY9_ttgNwIUuXGWsxCBZUPKMlAFq5D4P_ThIY",
  },
  {
    name: "Aqua Bloom Dress",
    sale: "₹1200",
    regular: "₹2199",
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSZ05sGgBwTNmc0LcswiuLeU0_-Zj8sR6iE0hIjP282SsGfo4Xkbz1aKEBT04qxZ5fdNoMSTOQYeqYKa_LRCN4F6C6A_iflwPl-MsLsrs6pg0bWurrcvHO7",
  },
   {
    name: "Lemon Bloom Flared Dress",
    sale: "₹799",
    regular: "₹1999",
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSTFar5EbxP9AEPAdy5VuvzWI67bnh8-7dOJE4U3qtlcRGB_l0xfHlWuQlOGEJd80LAoCxGiQcF9d0ndAW9wk0Vk56b8dG3U0Ja9qtvPguwxTtlC7TX0oRbNg",
  },
  {
    name: "Aqua Swirl Co‑Ord Set",
    sale: "₹999",
    regular: "₹1999",
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQClnnbUCCLXen44IQVXi735G2x4UCqoO0clTEQmHlAQ7hD6HQpb6R4CDHPOlYkOQVw7uzY9_ttgNwIUuXGWsxCBZUPKMlAFq5D4P_ThIY",
  },
  {
    name: "Aqua Bloom Dress",
    sale: "₹1200",
    regular: "₹2199",
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSZ05sGgBwTNmc0LcswiuLeU0_-Zj8sR6iE0hIjP282SsGfo4Xkbz1aKEBT04qxZ5fdNoMSTOQYeqYKa_LRCN4F6C6A_iflwPl-MsLsrs6pg0bWurrcvHO7",
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
              <a href={`#${l.toLowerCase().replace(/[^a-z]+/g, '-')}`} style={styles.navLink}>
                {l}
              </a>
            </li>
          ))}
        </ul>
      </header>

      {/* Product Grid */}
      <section style={styles.products}>
        {products.map((p) => (
          <div key={p.name} style={styles.card}>
            <img src={p.img} alt={p.name} style={styles.image} />
            <h3 style={styles.cardTitle}>{p.name}</h3>
            <p style={styles.price}>
              <span style={styles.sale}>{p.sale}</span>{' '}
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
            <input type="email" placeholder="Email address" style={styles.footerInput} />
            <button type="submit" style={styles.footerBtn}>Subscribe</button>
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
    color: '#333',
    margin: 0,
    padding: 0,
  },
  announcement: {
    background: '#f1e9e0',
    textAlign: 'center',
    padding: '0.5rem',
    fontSize: '0.9rem',
    letterSpacing: '1px',
  },
  navbar: {
    padding: '1rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #ddd',
    position: 'sticky',
    top: 0,
    background: '#fff',
    zIndex: 100,
  },
  logo: {
    margin: 0,
    fontSize: '1.6rem',
    letterSpacing: '2px',
    fontWeight: 700,
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  },
  navItem: {},
  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 500,
    fontSize: '0.95rem',
  },
  products: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1.5rem',
    padding: '2rem',
    maxWidth: '1240px',
    margin: '0 auto',
  },
  card: {
    border: '1px solid #eee',
    padding: '1rem',
    textAlign: 'center',
    background: '#fff',
  },
  image: {
    width: '100%',
    objectFit: 'cover',
  },
  cardTitle: {
    fontSize: '1.1rem',
    margin: '0.8rem 0',
  },
  price: {
    margin: '0.5rem 0',
  },
  sale: {
    color: '#c0392b',
    fontWeight: 600,
  },
  regular: {
    marginLeft: '0.5rem',
    textDecoration: 'line-through',
    color: '#aaa',
  },
  button: {
    background: '#333',
    color: '#fff',
    border: 'none',
    padding: '0.6rem 1.2rem',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },
  footer: {
    background: '#f8f8f8',
    color: '#555',
    padding: '2rem 1rem',
    textAlign: 'center',
    fontSize: '0.9rem',
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '1rem',
    flexWrap: 'wrap',
  },
  footerLink: {
    color: '#555',
    textDecoration: 'none',
    fontSize: '0.9rem',
  },
  newsletter: {
    marginBottom: '1rem',
  },
  footerNewsletterText: {
    marginBottom: '0.5rem',
    fontWeight: 500,
  },
  footerForm: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
  },
  footerInput: {
    padding: '0.6rem',
    width: '200px',
    border: '1px solid #ccc',
  },
  footerBtn: {
    padding: '0.6rem 1rem',
    background: '#333',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  copyright: {
    marginTop: '1rem',
    fontSize: '0.85rem',
    color: '#999',
  },
};












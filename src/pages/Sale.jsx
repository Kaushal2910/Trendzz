import React from "react";

export default function SalePage() {
  const navLinksSale = [
    "New Arrivals",
    "Women's",
    "Men's",
    "Couple's",
    "Sale",
    "About Us",
  ];

  const footerLinksSale = [
    ["About Us", "#about"],
    ["Contact", "#contact"],
    ["Privacy Policy", "#privacy"],
    ["Terms", "#terms"],
    ["FAQ", "#faq"],
  ];

  const saleProducts = [
    {
      name: "Summer Floral Dress",
      sale: "₹799",
      regular: "₹1999",
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSTFar5EbxP9AEPAdy5VuvzWI67bnh8-7dOJE4U3qtlcRGB_l0xfHlWuQlOGEJd80LAoCxGiQcF9d0ndAW9wk0Vk56b8dG3U0Ja9qtvPguwxTtlC7TX0oRbNg",
    },
    {
      name: "Pastel Co-Ord Set",
      sale: "₹999",
      regular: "₹2299",
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQClnnbUCCLXen44IQVXi735G2x4UCqoO0clTEQmHlAQ7hD6HQpb6R4CDHPOlYkOQVw7uzY9_ttgNwIUuXGWsxCBZUPKMlAFq5D4P_ThIY",
    },
    {
      name: "Retro Maxi Dress",
      sale: "₹1299",
      regular: "₹2599",
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSZ05sGgBwTNmc0LcswiuLeU0_-Zj8sR6iE0hIjP282SsGfo4Xkbz1aKEBT04qxZ5fdNoMSTOQYeqYKa_LRCN4F6C6A_iflwPl-MsLsrs6pg0bWurrcvHO7",
    },
  ];

  return (
    <div
      style={{
        fontFamily: '"Helvetica Neue", Arial, sans-serif',
        color: "#333",
      }}
    >
      {/* Announcement */}
      <div
        style={{
          background: "#f1e9e0",
          textAlign: "center",
          padding: "0.5rem",
          fontSize: "0.9rem",
          letterSpacing: "1px",
        }}
      >
        MEGA SALE - Up to 70% OFF | LIMITED STOCK
      </div>

      {/* Navbar */}
      <header
        style={{
          padding: "1rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #ddd",
          position: "sticky",
          top: 0,
          background: "#fff",
          zIndex: 100,
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "1.6rem",
            letterSpacing: "2px",
            fontWeight: 700,
          }}
        >
          Yashnira
        </h1>

        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "1.5rem",
            margin: 0,
            padding: 0,
          }}
        >
          {navLinksSale.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                style={{
                  textDecoration: "none",
                  color: "#333",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                }}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </header>

      {/* Banner */}
      <section
        style={{
          background: "#ffe4e1",
          textAlign: "center",
          padding: "3rem 1rem",
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: 700, margin: 0 }}>
          Exclusive Sale Collection
        </h2>
        <p style={{ fontSize: "1rem", marginTop: "0.5rem", color: "#555" }}>
          Grab your favorites now before they’re gone!
        </p>
      </section>

      {/* Products */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
          padding: "2rem",
          maxWidth: "1240px",
          margin: "0 auto",
        }}
      >
        {saleProducts.map((p) => (
          <div
            key={p.name}
            style={{
              border: "1px solid #eee",
              padding: "1rem",
              textAlign: "center",
              background: "#fff",
            }}
          >
            <img
              src={p.img}
              alt={p.name}
              style={{ width: "100%", objectFit: "cover" }}
            />
            <h3 style={{ fontSize: "1.1rem", margin: "0.8rem 0" }}>{p.name}</h3>
            <p style={{ margin: "0.5rem 0" }}>
              <span style={{ color: "#c0392b", fontWeight: 600 }}>{p.sale}</span>{" "}
              <span
                style={{
                  marginLeft: "0.5rem",
                  textDecoration: "line-through",
                  color: "#aaa",
                }}
              >
                {p.regular}
              </span>
            </p>
            <button
              style={{
                background: "#333",
                color: "#fff",
                border: "none",
                padding: "0.6rem 1.2rem",
                cursor: "pointer",
                fontSize: "0.9rem",
              }}
            >
              Shop Now
            </button>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#f8f8f8",
          color: "#555",
          padding: "2rem 1rem",
          textAlign: "center",
          fontSize: "0.9rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "1rem",
            flexWrap: "wrap",
          }}
        >
          {footerLinksSale.map(([label, href]) => (
            <a
              key={label}
              href={href}
              style={{
                color: "#555",
                textDecoration: "none",
                fontSize: "0.9rem",
              }}
            >
              {label}
            </a>
          ))}
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <p style={{ marginBottom: "0.5rem", fontWeight: 500 }}>
            Subscribe for Sale Alerts
          </p>
          <form
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.5rem",
              flexWrap: "wrap",
            }}
          >
            <input
              type="email"
              placeholder="Email address"
              style={{
                padding: "0.6rem",
                width: "200px",
                border: "1px solid #ccc",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "0.6rem 1rem",
                background: "#333",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
        <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "#999" }}>
          © 2025 Yashnira. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

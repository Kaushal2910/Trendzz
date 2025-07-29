import React from "react";

const navLinksAbout = [
  "New Arrivals",
  "Women's",
  "Men's",
  "Couple's",
  "Sale",
  "About Us",
];

const footerLinksAbout = [
  ["About Us", "#about"],
  ["Contact", "#contact"],
  ["Privacy Policy", "#privacy"],
  ["Terms", "#terms"],
  ["FAQ", "#faq"],
];

export default function AboutUs() {
  return (
    <div style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif', color: "#333", margin: 0, padding: 0 }}>
      
      {/* Announcement */}
      <div style={{
        background: "#f1e9e0",
        textAlign: "center",
        padding: "0.5rem",
        fontSize: "0.9rem",
        letterSpacing: "1px"
      }}>
        End of Season Sale | FOR HIM & HER
      </div>

      {/* Navbar */}
      <header style={{
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #ddd",
        position: "sticky",
        top: 0,
        background: "#fff",
        zIndex: 100
      }}>
        <h1 style={{
          margin: 0,
          fontSize: "1.6rem",
          letterSpacing: "2px",
          fontWeight: 700
        }}>Yashnira</h1>

        <ul style={{
          listStyle: "none",
          display: "flex",
          gap: "1.5rem",
          margin: 0,
          padding: 0
        }}>
          {navLinksAbout.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                style={{
                  textDecoration: "none",
                  color: "#333",
                  fontWeight: 500,
                  fontSize: "0.95rem"
                }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </header>

      {/* About Section */}
      <section style={{ padding: "3rem 1rem", textAlign: "center", background: "#fff5f5" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>About Us</h2>
        <p style={{ maxWidth: "700px", margin: "0 auto", fontSize: "1rem", color: "#555", lineHeight: "1.6" }}>
          Yashnira is a modern fashion brand crafted for the new generation.
          We combine timeless style with comfort and premium quality materials.
          Our mission is to create clothing that empowers you to feel confident
          and stylish, every single day.
        </p>
      </section>

      {/* Mission and Vision */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1.5rem",
        padding: "2rem",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <div style={{
          border: "1px solid #eee",
          padding: "1.5rem",
          background: "#fff",
          textAlign: "center"
        }}>
          <h3 style={{ fontSize: "1.4rem", marginBottom: "0.8rem" }}>Our Mission</h3>
          <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: "1.5" }}>
            To provide affordable luxury fashion that blends comfort with
            contemporary trends for everyone.
          </p>
        </div>
        <div style={{
          border: "1px solid #eee",
          padding: "1.5rem",
          background: "#fff",
          textAlign: "center"
        }}>
          <h3 style={{ fontSize: "1.4rem", marginBottom: "0.8rem" }}>Our Vision</h3>
          <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: "1.5" }}>
            To be a leading global brand recognized for redefining everyday
            fashion and sustainable practices.
          </p>
        </div>
      </section>

      {/* Team / Who we are */}
      <section style={{
        background: "#f9f9f9",
        padding: "3rem 1rem",
        textAlign: "center"
      }}>
        <h3 style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>Who We Are</h3>
        <p style={{ maxWidth: "700px", margin: "0 auto", fontSize: "1rem", color: "#555", lineHeight: "1.6" }}>
          Started with a passion for creativity, Yashnira brings together a team
          of designers and fashion lovers who believe in inclusivity, innovation,
          and timeless elegance.
        </p>
      </section>

      {/* Footer */}
      <footer style={{
        background: "#f8f8f8",
        color: "#555",
        padding: "2rem 1rem",
        textAlign: "center",
        fontSize: "0.9rem"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "1rem",
          flexWrap: "wrap"
        }}>
          {footerLinksAbout.map(([label, href]) => (
            <a key={label} href={href} style={{
              color: "#555",
              textDecoration: "none",
              fontSize: "0.9rem"
            }}>
              {label}
            </a>
          ))}
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <p style={{ marginBottom: "0.5rem", fontWeight: 500 }}>Subscribe to Our Newsletter</p>
          <form style={{ display: "flex", justifyContent: "center", gap: "0.5rem" }}>
            <input type="email" placeholder="Email address" style={{
              padding: "0.6rem",
              width: "200px",
              border: "1px solid #ccc"
            }} />
            <button type="submit" style={{
              padding: "0.6rem 1rem",
              background: "#333",
              color: "#fff",
              border: "none",
              cursor: "pointer"
            }}>Subscribe</button>
          </form>
        </div>
        <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "#999" }}>
          © 2025 Yashnira. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

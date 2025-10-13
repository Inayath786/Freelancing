import React from "react";

export default function Hero() {
  const styles = {
    hero: {
      height: "100vh",
      backgroundImage:
        "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/Geometric science education background vector in gradient blue digital remix _ Free Vector.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "0 20px",
    },
    heading: {
      fontSize: "3rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    subtext: {
      fontSize: "1.3rem",
      marginBottom: "2rem",
      maxWidth: "600px",
    },
    button: {
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      padding: "12px 30px",
      fontSize: "1rem",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "0.3s ease",
    },
  };

  return (
    <section style={styles.hero}>
      <h1 style={styles.heading}>
        I Design Beautiful, Fast & Modern Websites 🚀
      </h1>
      <p style={styles.subtext}>
        I’m <strong>Inayath</strong> — a freelance web designer who builds
        responsive, SEO-optimized, and AWS-hosted websites for your business.
      </p>
      <button
        style={styles.button}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
        onClick={() =>
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        Get Your Website Designed
      </button>
    </section>
  );
}

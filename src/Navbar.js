import React from "react";

export default function Navbar() {
  const styles = {
    navbar: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 20px", // reduced padding for smaller screens
      flexWrap: "wrap", // allows wrapping on small screens
      zIndex: 1000,
    },
    logo: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      cursor: "pointer",
      marginBottom: "5px", // ensures spacing when wrapped
    },
    navLinks: {
      display: "flex",
      gap: "20px", // slightly smaller gap
      listStyle: "none",
      margin: 0,
      padding: 0,
      flexWrap: "wrap", // ensures links wrap on very small screens
      justifyContent: "center",
      width: "100%", // takes full width if wrapped
    },
    link: {
      color: "white",
      textDecoration: "none",
      fontWeight: "500",
      cursor: "pointer",
      transition: "0.3s",
    },
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo} onClick={() => scrollToSection("hero")}>
        Inayath.dev
      </div>
      <ul style={styles.navLinks}>
        <li style={styles.link} onClick={() => scrollToSection("portfolio")}>
          Portfolio
        </li>
        <li style={styles.link} onClick={() => scrollToSection("whyme")}>
          Why Me
        </li>
        <li style={styles.link} onClick={() => scrollToSection("pricing")}>
          Pricing
        </li>
        <li style={styles.link} onClick={() => scrollToSection("contact")}>
          Contact
        </li>
        <li style={styles.link} onClick={() => scrollToSection("faq")}>
          FAQ
        </li>
        <li style={styles.link} onClick={() => scrollToSection("testimonials")}>
          Reviews
        </li>
      </ul>
    </nav>
  );
}

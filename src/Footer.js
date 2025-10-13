import React from "react";

export default function Footer() {
  const styles = {
    footer: {
      backgroundColor: "#222",
      color: "#fff",
      padding: "40px 20px",
      textAlign: "center",
    },
    socialLinks: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginBottom: "20px",
    },
    link: {
      color: "#fff",
      textDecoration: "none",
      fontSize: "1.2rem",
    },
    copyright: {
      fontSize: "0.9rem",
      color: "#ccc",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.socialLinks}>
        <a href="https://instagram.com/" target="_blank" rel="noreferrer" style={styles.link}>Instagram</a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer" style={styles.link}>LinkedIn</a>
        <a href="https://github.com/" target="_blank" rel="noreferrer" style={styles.link}>GitHub</a>
      </div>
      <div style={styles.copyright}>
        © 2025 Inayath Web Studio. All rights reserved.
      </div>
    </footer>
  );
}

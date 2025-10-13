import React from "react";

export default function WhyChooseMe() {
  const styles = {
    section: {
      padding: "100px 20px",
      backgroundColor: "#fff",
      textAlign: "center",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "50px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "30px",
      maxWidth: "1000px",
      margin: "0 auto",
    },
    card: {
      backgroundColor: "#f1f1f1",
      padding: "30px 20px",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      transition: "transform 0.3s ease",
    },
    icon: {
      fontSize: "2rem",
      marginBottom: "15px",
      color: "#007bff",
    },
    text: {
      fontSize: "1rem",
      fontWeight: "500",
    },
  };

  const reasons = [
    { icon: "⚡", text: "Fast & Responsive Websites" },
    { icon: "🔍", text: "SEO Optimized for Google" },
     { icon: "🔍", text: "Domain + SSL Termination" },
      { icon: "🔍", text: "Basic Google Analytics" },
    { icon: "☁️", text: "AWS Cloud Deployment" },
    { icon: "🎨", text: "Custom Modern Designs" },
  ];

  return (
    <section id="whyme" style={styles.section}>
      <h2 style={styles.title}>Why Choose Me</h2>
      <div style={styles.grid}>
        {reasons.map((r, i) => (
          <div
            key={i}
            style={styles.card}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div style={styles.icon}>{r.icon}</div>
            <p style={styles.text}>{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // install react-icons if not installed

export default function Pricing() {
  const styles = {
    section: {
      padding: "100px 20px",
      backgroundColor: "#f0f4f8",
      textAlign: "center",
    },
    title: {
      fontSize: "3rem",
      fontWeight: "700",
      marginBottom: "60px",
      color: "#1a1a1a",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "40px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    card: {
      background: "linear-gradient(145deg, #ffffff, #e6f0ff)",
      padding: "40px 25px",
      borderRadius: "16px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
      transition: "all 0.4s ease",
      position: "relative",
      overflow: "hidden",
    },
    popularBadge: {
      position: "absolute",
      top: "-10px",
      right: "-10px",
      backgroundColor: "#ff4757",
      color: "#fff",
      padding: "8px 16px",
      borderRadius: "50px",
      fontWeight: "600",
      fontSize: "0.85rem",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    },
    plan: {
      fontSize: "1.8rem",
      fontWeight: "700",
      marginBottom: "15px",
      color: "#0d1b2a",
    },
    price: {
      fontSize: "1.5rem",
      color: "#007bff",
      marginBottom: "25px",
      fontWeight: "600",
    },
    features: {
      fontSize: "1rem",
      marginBottom: "30px",
      lineHeight: "1.8",
      color: "#1a1a1a",
      textAlign: "left",
    },
    featureItem: {
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
    },
    featureIcon: {
      color: "#28a745",
      marginRight: "10px",
    },
    button: {
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      padding: "12px 25px",
      borderRadius: "50px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "1rem",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    },
  };

  const plans = [
    {
      plan: "Basic",
      price: "₹2,999",
      features: [
        "Full Frontend Design",
        "Fully Responsive",
        "SSL Termination",
        "Domain (.in, .com, etc.)",
        "Unlimited Bandwidth",
        "WhatsApp & Email Integration",
        "Location Integration",
        "Image Optimization",
        "CloudFlare Protection",
        "AWS Deployment",
        "SEO with Google Console",
        "Basic Google Analytics",
      ],
      popular: true,
    },
  ];

  return (
    <section id="pricing" style={styles.section}>
      <h2 style={styles.title}>Pricing Plans</h2>
      <div style={styles.grid}>
        {plans.map((p, i) => (
          <div
            key={i}
            style={styles.card}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {p.popular && <div style={styles.popularBadge}>Popular</div>}
            <h3 style={styles.plan}>{p.plan}</h3>
            <p style={styles.price}>{p.price}</p>
            <div style={styles.features}>
              {p.features.map((f, idx) => (
                <div key={idx} style={styles.featureItem}>
                  <FaCheckCircle style={styles.featureIcon} /> {f}
                </div>
              ))}
            </div>
            <button
              style={styles.button}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
              onClick={() =>
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

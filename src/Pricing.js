import React from "react";

export default function Pricing() {
  const styles = {
    section: {
      padding: "100px 20px",
      backgroundColor: "#f9f9f9",
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
      backgroundColor: "#fff",
      padding: "30px 20px",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      transition: "transform 0.3s ease",
    },
    plan: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "15px",
    },
    price: {
      fontSize: "1.3rem",
      color: "#007bff",
      marginBottom: "15px",
    },
    features: {
      fontSize: "1rem",
      marginBottom: "20px",
      lineHeight: "1.6",
      color: "#555",
    },
    button: {
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      padding: "10px 20px",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "0.3s ease",
    },
  };

  const plans = [
    {
      plan: "Basic",
      price: "₹2,999",
      features: "Full Frontend Design\nFull Responsive\nSSL Termination\nDomain(.in,.com..)\nUnlimited Bandwidth\nWhatsApp and Email Integration\nLocation(if needed)\nImage optimizations\nCloudFlare Protection\nAWS Deployment\nSEO optimization with Google Console\nBasic Google Analytics\n",
    },
    {
      plan: "Pro",
      price: "₹6,999",
      features: "ALL BASIC FEATURES INCLUDED +\nMulti-page website\n Full Stack Website\nContact Forms\nCustom Domain & Hosting\nAdvanced SEO methods\nSecurity Hardening\n3 months support\nData Storage for backups",
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
            <h3 style={styles.plan}>{p.plan}</h3>
            <p style={styles.price}>{p.price}</p>
            <p style={styles.features}>{p.features.split("\n").map((f, idx) => <span key={idx}>{f}<br /></span>)}</p>
            <button
              style={styles.button}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

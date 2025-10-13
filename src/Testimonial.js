import React from "react";

export default function Testimonials() {
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
    },
    quote: {
      fontSize: "1rem",
      fontStyle: "italic",
      marginBottom: "15px",
      color: "#555",
    },
    name: {
      fontSize: "1rem",
      fontWeight: "bold",
    },
  };

  const testimonials = [
    {
      quote: "Inayath helped me create a professional website for my institute. Highly recommended!",
      name: "Ravi K.",
    },
    {
      quote: "Amazing design skills! My e-commerce website looks stunning and works flawlessly.",
      name: "Anita S.",
    },
    {
      quote: "Fast, responsive, and SEO-friendly websites. I loved working with Inayath!",
      name: "Kiran M.",
    },
  ];

  return (
    <section id="testimonials" style={styles.section}>
      <h2 style={styles.title}>What My Clients Say</h2>
      <div style={styles.grid}>
        {testimonials.map((t, i) => (
          <div key={i} style={styles.card}>
            <p style={styles.quote}>"{t.quote}"</p>
            <p style={styles.name}>— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

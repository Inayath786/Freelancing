import React from "react";

export default function Contact() {
  const styles = {
    section: {
      padding: "100px 20px",
      backgroundColor: "#f9f9f9",
      textAlign: "center",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "40px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      maxWidth: "500px",
      margin: "0 auto",
    },
    input: {
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "1rem",
    },
    select: {
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "1rem",
      cursor: "pointer",
    },
    button: {
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      padding: "12px",
      borderRadius: "8px",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "0.3s ease",
    },
    buttonStyle: {
      position: "fixed",
      bottom: "30px",
      right: "30px",
      backgroundColor: "#25D366",
      color: "#fff",
      border: "none",
      padding: "12px 18px",
      borderRadius: "30px",
      cursor: "pointer",
      fontWeight: "bold",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      transition: "transform 0.2s ease",
      zIndex: 1000,
    },
  };

  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.title}>Contact Me</h2>
      <form
        style={styles.form}
        action="https://formsubmit.co/inayatharifa@gmail.com" // Replace with your FormSubmit email or Google Form action
        method="POST"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={styles.input}
        />
          <input
          type="number"
          name="number"
          placeholder="Your Contact Number"
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={styles.input}
        />
        <select name="plan" required style={styles.select}>
          <option value="">Select a Plan</option>
          <option value="Basic">Basic</option>
          <option value="Pro">Pro</option>
        </select>
        <button
          type="submit"
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Submit
        </button>
      </form>

      {/* ✅ WhatsApp Floating Button */}
      <a
        href="https://wa.me/+918309963048?text=Hello%20I%20want%20to%20know%20more%20about%20your%20Web Designing Services"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          style={styles.buttonStyle}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Chat on WhatsApp 💬
        </button>
      </a>
    </section>
  );
}

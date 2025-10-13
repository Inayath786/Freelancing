import React, { useState } from "react";

export default function Faq() {
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
    faqItem: {
      backgroundColor: "#f1f1f1",
      padding: "20px",
      borderRadius: "10px",
      marginBottom: "15px",
      cursor: "pointer",
      textAlign: "left",
      maxWidth: "800px",
      margin: "0 auto 15px auto",
      transition: "background-color 0.3s ease",
    },
    question: {
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    answer: {
      marginTop: "10px",
      fontSize: "1rem",
      color: "#555",
    },
  };

  const faqData = [
    {
      question: "How long does it take to design a website?",
      answer:
        "It usually takes 5-15 days depending on the complexity of the website. We ensure quality and responsive design.",
    },
    {
      question: "Do I need to provide content and images?",
      answer:
        "Yes, providing content and images helps speed up the process. If needed, we can also help with stock images and content suggestions.",
    },
    {
      question: "Can you host my website on AWS?",
      answer:
        "Absolutely! All websites are deployed on AWS with proper configuration for fast loading and security.",
    },
    {
      question: "Do you provide SEO services?",
      answer:
        "Yes, all websites are SEO optimized including meta tags, Google Search Console integration, and performance optimization.",
    },
    {
      question: "Can I update my website myself later?",
      answer:
        "Yes, we provide basic training and guidance for simple content updates. For advanced updates, you can always contact us.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" style={styles.section}>
      <h2 style={styles.title}>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div
          key={index}
          style={styles.faqItem}
          onClick={() => toggleAnswer(index)}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e0e0e0")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f1f1f1")}
        >
          <div style={styles.question}>{item.question}</div>
          {openIndex === index && <div style={styles.answer}>{item.answer}</div>}
        </div>
      ))}
    </section>
  );
}

import React from "react";

export default function Portfolio() {
  const styles = {
    section: {
      padding: "100px 20px",
      backgroundColor: "#f9f9f9",
      textAlign: "center",
    },
    title: {
      fontSize: "2.5rem",
      marginBottom: "40px",
      fontWeight: "bold",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "30px",
      maxWidth: "1100px",
      margin: "0 auto",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      overflow: "hidden",
      transition: "transform 0.3s ease",
    },
    image: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
    },
    content: {
      padding: "20px",
    },
    projectTitle: {
      fontSize: "1.3rem",
      fontWeight: "600",
      marginBottom: "10px",
    },
    description: {
      fontSize: "1rem",
      color: "#555",
      marginBottom: "15px",
    },
    tech: {
      fontSize: "0.9rem",
      color: "#007bff",
      fontWeight: "500",
    },
    button: {
      backgroundColor: "#007bff",
      color: "white",
      padding: "8px 15px",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "0.3s ease",
    },
  };

  const projects = [
    {
      title: "Gym Website",
      img: "/pheonix.jpg",
      desc: "A responsive institute website built with React & AWS.",
      link: "https://pheonix-fitness.onrender.com/",
    },
    {
      title: "E-commerce Design",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      desc: "Modern shopping interface with product filters and cart UI.",
      link: "https://technexi.myshopify.com/",
    },
    {
      title: "Personal Portfolio",
      img: "/portfolio.jpg",
      desc: "Minimal portfolio with animation and dark mode.",
      link: "https://portfolio-iybr.onrender.com/",
    },
     {
      title: "Vcube Institute",
      img: "/vcube.jpg",
      desc: "Minimal portfolio with animation and dark mode.",
      link: "https://vcube-aws-devops.onrender.com/",
    },
     {
      title: "Blogs Website",
      img: "/blogs.jpg",
      desc: "Minimal portfolio with animation and dark mode.",
      link: "https://inayathwrites.space/",
    },
  ];

  return (
    <section id="portfolio" style={styles.section}>
      <h2 style={styles.title}>My Recent Works</h2>
      <div style={styles.grid}>
        {projects.map((p, i) => (
          <div
            key={i}
            style={styles.card}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img src={p.img} alt={p.title} style={styles.image} />
            <div style={styles.content}>
              <h3 style={styles.projectTitle}>{p.title}</h3>
              <p style={styles.description}>{p.desc}</p>
              <p style={styles.tech}>{p.tech}</p>
              <button
                style={styles.button}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
                onClick={() => window.open(p.link, "_blank")}
              >
                View Live
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

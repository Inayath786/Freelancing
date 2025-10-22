import React from "react";
import { FaLaptopCode, FaDatabase, FaAws, FaReact, FaNodeJs } from "react-icons/fa";

export default function AboutMe() {
  const styles = {
    section: {
      padding: "100px 20px",
      backgroundColor: "#eef6ff",
      textAlign: "center",
    },
    title: {
      fontSize: "3rem",
      fontWeight: "700",
      marginBottom: "60px",
      color: "#1a1a1a",
    },
    description: {
      fontSize: "1.2rem",
      maxWidth: "800px",
      margin: "0 auto 80px auto",
      color: "#333",
      lineHeight: "1.8",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "40px",
      maxWidth: "1000px",
      margin: "0 auto",
    },
    card: {
      background: "linear-gradient(145deg, #ffffff, #dce8ff)",
      padding: "35px 25px",
      borderRadius: "16px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
      transition: "all 0.4s ease",
      cursor: "default",
    },
    skillIcon: {
      fontSize: "2.5rem",
      color: "#007bff",
      marginBottom: "15px",
    },
    skillTitle: {
      fontSize: "1.5rem",
      fontWeight: "700",
      marginBottom: "15px",
      color: "#0d1b2a",
    },
    skillDesc: {
      fontSize: "1rem",
      color: "#333",
      lineHeight: "1.6",
    },
  };

  const skills = [
    {
      icon: <FaLaptopCode style={styles.skillIcon} />,
      title: "Frontend Development",
      description:
        "Refreshing my React.js, HTML, CSS, and JavaScript skills to build interactive and responsive web applications.",
    },
    {
      icon: <FaNodeJs style={styles.skillIcon} />,
      title: "Backend Development",
      description:
        "Reinforcing Node.js and Express.js knowledge for creating robust APIs and server-side applications.",
    },
    {
      icon: <FaDatabase style={styles.skillIcon} />,
      title: "Databases",
      description:
        "Updating MongoDB and MySQL expertise, focusing on data modeling, queries, and performance optimization.",
    },
    {
      icon: <FaAws style={styles.skillIcon} />,
      title: "Cloud & DevOps",
      description:
        "Refreshing AWS services like EC2, S3, Lambda, and learning CI/CD practices to deploy scalable applications.",
    },
    {
      icon: <FaReact style={styles.skillIcon} />,
      title: "Modern UI Skills",
      description:
        "Practicing advanced React concepts, component design, hooks, and state management for smoother frontend experiences.",
    },
  ];

  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.title}>About Me</h2>
      <p style={styles.description}>
        I'm actively refreshing and upgrading my full-stack development and cloud skills. 
        Below are the main areas I'm focusing on to stay up-to-date with modern web development practices.
      </p>
      <div style={styles.grid}>
        {skills.map((skill, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {skill.icon}
            <h3 style={styles.skillTitle}>{skill.title}</h3>
            <p style={styles.skillDesc}>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

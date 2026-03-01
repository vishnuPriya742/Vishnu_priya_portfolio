import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "LastLine",
      type: "Email Classification System",
      date: "May 2025",
      icon: "mail",
      color: "#a855f7",
      description:
        "A machine learning model using Naive Bayes to categorize emails automatically. Performed data preprocessing, feature extraction, and text classification for accurate results.",
      tags: [
        "Python",
        "Node.js",
        "Express.js",
        "Flask",
        "Machine Learning",
        "MongoDB",
      ],
      codeLink: "https://github.com/Drive-Ready-7/IShip-01/",
      demoLink: "https://www.lastline.life/",
    },
    {
      title: "Product Recommendation System",
      type: "Hybrid ML Recommendation Engine",
      date: "August 2026",
      icon: "shopping-bag",
      color: "#10b981",
      description:
        "A hybrid recommendation engine combining Naive Bayes classification with TF-IDF + cosine similarity for personalized product suggestions. Built Flask-based REST API for real-time recommendations.",
      tags: ["Python", "Flask", "Machine Learning", "TF-IDF", "REST API"],
      codeLink: "https://github.com/vishnuPriya742/Eccomerce",
      demoLink: "https://www.linkedin.com/feed/update/urn:li:activity:7370757163029299200/",
    },
  ];

  return (
    <section id="projects" style={styles.section}>
      <div style={styles.header}>
        <h4 style={styles.subTitle}>WHAT I'VE BUILT</h4>
        <h2 style={styles.title}>Featured Projects</h2>
      </div>

      <div style={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.card}>
            <div
              style={{
                ...styles.topBorder,
                background: `linear-gradient(90deg, ${project.color}, transparent)`,
              }}
            ></div>

            <div style={styles.cardHeader}>
              <div
                style={{ ...styles.iconBg, backgroundColor: project.color }}
              >
                {getIcon(project.icon)}
              </div>
              <span style={styles.date}>{project.date}</span>
            </div>

            <h3 style={styles.projectTitle}>{project.title}</h3>
            <p style={{ ...styles.projectType, color: project.color }}>
              {project.type}
            </p>

            <p style={styles.description}>{project.description}</p>

            <div style={styles.tags}>
              {project.tags.map((tag, i) => (
                <span key={i} style={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div style={styles.actions}>
              {/* Code Button */}
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...styles.btnCode, textDecoration: "none" }}
              >
                <svg
                  width="18"
                  height="18"
                  style={{ marginRight: "8px" }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 18c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v2"></path>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                Code
              </a>

              {/* Demo Button */}
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...styles.btnDemo, textDecoration: "none" }}
              >
                <svg
                  width="18"
                  height="18"
                  style={{ marginRight: "8px" }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const getIcon = (name) => {
  const style = { width: 24, height: 24, color: "#fff" };
  switch (name) {
    case "mail":
      return (
        <svg {...style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      );
    case "shopping-bag":
      return (
        <svg {...style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
      );
    default:
      return null;
  }
};

const styles = {
  section: {
    padding: "6rem 2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "4rem",
  },
  subTitle: {
    color: "var(--accent-color)",
    letterSpacing: "0.2em",
    fontSize: "0.9rem",
    marginBottom: "1rem",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "800",
    color: "var(--text-color)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "2.5rem",
  },
  card: {
    background: "var(--card-bg-gradient)",
    border: "1px solid var(--border-color)",
    borderRadius: "20px",
    padding: "2.5rem",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  topBorder: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "2px",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "1.5rem",
  },
  iconBg: {
    width: "56px",
    height: "56px",
    borderRadius: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 6px -1px var(--shadow-color)",
  },
  date: {
    color: "var(--text-dim)",
    fontSize: "0.9rem",
    marginTop: "0.5rem",
  },
  projectTitle: {
    fontSize: "1.75rem",
    fontWeight: "700",
    color: "var(--text-color)",
    marginBottom: "0.25rem",
  },
  projectType: {
    fontSize: "0.95rem",
    fontWeight: "500",
    marginBottom: "1.5rem",
  },
  description: {
    color: "var(--text-muted)",
    lineHeight: "1.7",
    marginBottom: "2rem",
    flex: 1,
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.75rem",
    marginBottom: "2rem",
  },
  tag: {
    background: "var(--chip-bg)",
    color: "var(--chip-text)",
    padding: "0.4rem 1rem",
    borderRadius: "50px",
    fontSize: "0.85rem",
    border: "1px solid var(--border-color)",
  },
  actions: {
    display: "flex",
    gap: "1rem",
  },
  btnCode: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.75rem",
    borderRadius: "50px",
    background: "var(--chip-bg)",
    color: "var(--text-color)",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
  },
  btnDemo: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.75rem",
    borderRadius: "50px",
    background: "var(--text-color)",
    color: "var(--bg-color)",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
  },
};

export default Projects;
import React from 'react';

const Experience = () => {
    const experiences = [
        {
            company: "Technical Hub",
            role: "Full Stack Development Intern",
            date: "May 2025",
            icon: "briefcase",
            color: "#6366f1", // Indigo
            description: [
                "Gained hands-on experience in Full Stack Development using HTML, CSS, JavaScript, React and Backend",
                "Demonstrated responsibility, sincerity, and adaptability while learning new technologies",
                "Developed a Front-End Development project as part of the final internship work"
            ],
            tags: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
        },
        {
            company: "Micro Information Technology",
            role: "Frontend Development Intern",
            date: "June 2025",
            icon: "briefcase",
            color: "#8b5cf6", // Violet
            description: [
                "Designed and developed a responsive website showcasing key features and services of Micro IT",
                "Focused on clean UI design, responsive layouts, and usability",
                "Ensured accessibility across devices with modern web practices"
            ],
            tags: ["React", "CSS", "Responsive Design", "UI/UX"]
        }
    ];

    return (
        <section id="experience" style={styles.section}>
            <div style={styles.header}>
                <h4 style={styles.subTitle}>WHERE I'VE WORKED</h4>
                <h2 style={styles.title}>Experience</h2>
            </div>

            <div style={styles.timeline}>
                <div style={styles.line}></div>

                {experiences.map((exp, index) => (
                    <div key={index} style={{ ...styles.timelineItem, flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>
                        {/* Empty side for layout balance */}
                        <div style={styles.itemSide}></div>

                        {/* Center Dot */}
                        <div style={styles.dotWrapper}>
                            <div style={{ ...styles.dot, backgroundColor: exp.color }}></div>
                        </div>

                        {/* Content Card */}
                        <div style={styles.itemSide}>
                            <div style={styles.card}>
                                <div style={styles.cardHeader}>
                                    <div style={{ ...styles.iconBg, backgroundColor: `${exp.color}20`, color: exp.color }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                    </div>
                                    <div>
                                        <h3 style={styles.company}>{exp.company}</h3>
                                        <div style={styles.role}>{exp.role}</div>
                                    </div>
                                </div>
                                <div style={styles.date}>
                                    <svg width="14" height="14" style={{ marginRight: '6px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                    {exp.date}
                                </div>
                                <ul style={styles.descList}>
                                    {exp.description.map((desc, i) => (
                                        <li key={i} style={styles.descItem}>
                                            <span style={styles.bullet}>›</span>
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                                <div style={styles.tags}>
                                    {exp.tags.map((tag, i) => (
                                        <span key={i} style={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '6rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    header: {
        textAlign: 'center',
        marginBottom: '6rem',
    },
    subTitle: {
        color: 'var(--accent-color)',
        letterSpacing: '0.2em',
        fontSize: '0.9rem',
        marginBottom: '1rem',
        fontWeight: '600',
        textTransform: 'uppercase',
    },
    title: {
        fontSize: '3rem',
        fontWeight: '800',
        color: 'var(--text-color)',
    },
    timeline: {
        position: 'relative',
        maxWidth: '1000px',
        margin: '0 auto',
    },
    line: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: '50%',
        width: '2px',
        background: 'var(--accent-color)',
        transform: 'translateX(-50%)',
    },
    timelineItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: '4rem',
        position: 'relative',
    },
    itemSide: {
        flex: 1,
        padding: '0 3rem',
    },
    dotWrapper: {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2,
    },
    dot: {
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        boxShadow: '0 0 0 4px var(--bg-color)',
    },
    card: {
        background: 'var(--card-bg)',
        border: '1px solid var(--border-color)',
        borderRadius: '16px',
        padding: '2rem',
        backdropFilter: 'blur(10px)',
    },
    cardHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1.5rem',
    },
    iconBg: {
        width: '48px',
        height: '48px',
        borderRadius: '12px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    company: {
        fontSize: '1.25rem',
        fontWeight: '700',
        color: 'var(--text-color)',
        marginBottom: '0.25rem',
    },
    role: {
        color: 'var(--accent-color)',
        fontWeight: '500',
        fontSize: '0.95rem',
    },
    date: {
        display: 'flex',
        alignItems: 'center',
        color: 'var(--text-dim)',
        fontSize: '0.9rem',
        marginBottom: '1.5rem',
    },
    descList: {
        marginBottom: '1.5rem',
    },
    descItem: {
        color: 'var(--text-muted)',
        marginBottom: '0.75rem',
        lineHeight: '1.6',
        display: 'flex',
        gap: '0.75rem',
        alignItems: 'flex-start',
        fontSize: '0.95rem',
    },
    bullet: {
        color: 'var(--accent-color)',
        fontWeight: 'bold',
    },
    tags: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.75rem',
    },
    tag: {
        background: 'rgba(167, 139, 250, 0.1)',
        color: 'var(--accent-color)',
        padding: '0.4rem 0.9rem',
        borderRadius: '50px',
        fontSize: '0.8rem',
        fontWeight: '500',
    },
};

export default Experience;

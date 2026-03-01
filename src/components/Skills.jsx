import React from 'react';

const Skills = () => {
    const skillsData = [
        {
            category: "Languages",
            icon: "code",
            color: "#a78bfa", // Purple
            skills: ["C++", "Python", "Java", "C"]
        },
        {
            category: "Frontend",
            icon: "globe",
            color: "#3b82f6", // Blue
            skills: ["React", "React Native", "JavaScript", "HTML", "CSS"]
        },
        {
            category: "Backend",
            icon: "server",
            color: "#10b981", // Green
            skills: ["Node.js", "Express.js", "Flask"]
        },
        {
            category: "Databases",
            icon: "database",
            color: "#f59e0b", // Orange
            skills: ["MySQL", "MongoDB"]
        },
        {
            category: "Tools",
            icon: "tool",
            color: "#ec4899", // Pink
            skills: ["Git", "GitHub", "VS Code"]
        },
        {
            category: "CS Fundamentals",
            icon: "chip",
            color: "#6366f1", // Indigo
            skills: ["Data Structures", "OOP", "Operating Systems", "Networks"]
        }
    ];

    return (
        <section id="skills" style={styles.section}>
            <div style={styles.header}>
                <h4 style={styles.subTitle}>WHAT I WORK WITH</h4>
                <h2 style={styles.title}>Technical Skills</h2>
            </div>

            <div style={styles.grid}>
                {skillsData.map((category, index) => (
                    <div key={index} style={styles.card}>
                        <div style={styles.iconWrapper}>
                            <div style={{ ...styles.iconBg, backgroundColor: category.color }}>
                                {getIcon(category.icon)}
                            </div>
                        </div>
                        <h3 style={styles.categoryTitle}>{category.category}</h3>
                        <div style={styles.tags}>
                            {category.skills.map((skill, i) => (
                                <span key={i} style={styles.tag}>{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const getIcon = (name) => {
    const style = { width: 24, height: 24, color: '#fff' };
    switch (name) {
        case 'code':
            return <svg {...style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
        case 'globe':
            return <svg {...style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>;
        case 'server':
            return <svg {...style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>;
        case 'database':
            return <svg {...style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>;
        case 'tool':
            return <svg {...style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>;
        case 'chip':
            return <svg {...style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>;
        default: return null;
    }
}

const styles = {
    section: {
        padding: '6rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    header: {
        textAlign: 'center',
        marginBottom: '4rem',
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
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
    },
    card: {
        background: 'var(--card-bg-gradient)',
        border: '1px solid var(--border-color)',
        borderRadius: '16px',
        padding: '2rem',
        transition: 'transform 0.3s, border-color 0.3s',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    iconWrapper: {
        marginBottom: '1.5rem',
    },
    iconBg: {
        width: '50px',
        height: '50px',
        borderRadius: '12px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 6px -1px var(--shadow-color), 0 2px 4px -1px var(--shadow-color)',
    },
    categoryTitle: {
        fontSize: '1.25rem',
        fontWeight: '700',
        color: 'var(--text-color)',
        marginBottom: '1.5rem',
    },
    tags: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.75rem',
    },
    tag: {
        background: 'var(--chip-bg)',
        color: 'var(--text-muted)',
        padding: '0.5rem 1rem',
        borderRadius: '50px',
        fontSize: '0.875rem',
        fontWeight: '500',
        border: '1px solid var(--border-color)',
    },
};

export default Skills;

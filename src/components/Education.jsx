import React from 'react';

const Education = () => {
    const education = [
        {
            institution: "Aditya University",
            degree: "BTech, Computer Science and Engineering",
            year: "Expected 2027",
            score: "GPA: 9.12/10",
            status: "Currently Pursuing",
            icon: "university"
        },
        {
            institution: "Pragati College",
            degree: "Intermediate in MPC (Maths, Physics, Chemistry)",
            year: "2021 - 2023",
            score: "GPA: 9.6/10",
            status: null,
            icon: "college"
        },
        {
            institution: "Pragati (E.M) School",
            degree: "Secondary School Certificate",
            year: "2020",
            score: "GPA: 9.7/10",
            status: null,
            icon: "school"
        }
    ];

    return (
        <section id="education" style={styles.section}>
            <div style={styles.header}>
                <h4 style={styles.subTitle}>ACADEMIC BACKGROUND</h4>
                <h2 style={styles.title}>Education</h2>
            </div>

            <div style={styles.container}>
                {education.map((edu, index) => (
                    <div key={index} style={styles.card}>
                        {edu.status && (
                            <div style={styles.badge}>{edu.status}</div>
                        )}

                        <div style={styles.cardContent}>
                            <div style={styles.iconWrapper}>
                                <div style={styles.iconBox}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 10v6M2 10l10-5 10 5-10 5-10 5z"></path>
                                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                    </svg>
                                </div>
                            </div>

                            <div style={styles.details}>
                                <h3 style={styles.institution}>{edu.institution}</h3>
                                <div style={styles.degree}>{edu.degree}</div>

                                <div style={styles.meta}>
                                    <div style={styles.metaItem}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', color: '#64748b' }}>
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="16" y1="2" x2="16" y2="6"></line>
                                            <line x1="8" y1="2" x2="8" y2="6"></line>
                                            <line x1="3" y1="10" x2="21" y2="10"></line>
                                        </svg>
                                        {edu.year}
                                    </div>
                                    <div style={styles.metaItem}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', color: '#10b981' }}>
                                            <circle cx="12" cy="8" r="7"></circle>
                                            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                                        </svg>
                                        <span style={styles.scoreHighlight}>{edu.score}</span>
                                    </div>
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
        maxWidth: '1000px',
        margin: '0 auto',
    },
    header: {
        textAlign: 'center',
        marginBottom: '4rem',
    },
    subTitle: {
        color: 'var(--accent-color)',
        letterSpacing: '0.2em',
        fontSize: '0.85rem',
        marginBottom: '1rem',
        fontWeight: '600',
        textTransform: 'uppercase',
    },
    title: {
        fontSize: '3.5rem',
        fontWeight: '800',
        color: 'var(--text-color)',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
    },
    card: {
        background: 'var(--card-bg)',
        border: '1px solid var(--border-color)',
        borderRadius: '16px',
        padding: '2rem',
        position: 'relative',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        overflow: 'hidden',
        backdropFilter: 'blur(10px)',
        ':hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 30px -10px var(--shadow-color)',
            border: '1px solid var(--accent-color)',
        }
    },
    badge: {
        position: 'absolute',
        top: '1.5rem',
        right: '1.5rem',
        background: 'var(--button-gradient)',
        color: '#fff',
        padding: '0.4rem 1rem',
        borderRadius: '50px',
        fontSize: '0.75rem',
        fontWeight: '600',
        boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
    },
    cardContent: {
        display: 'flex',
        gap: '1.5rem',
        alignItems: 'flex-start',
    },
    iconWrapper: {
        flexShrink: 0,
    },
    iconBox: {
        width: '64px',
        height: '64px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        boxShadow: '0 8px 16px -4px rgba(139, 92, 246, 0.3)',
    },
    details: {
        flex: 1,
    },
    institution: {
        fontSize: '1.4rem',
        fontWeight: '700',
        color: 'var(--text-color)',
        marginBottom: '0.5rem',
    },
    degree: {
        color: 'var(--text-secondary)',
        fontSize: '1rem',
        marginBottom: '1.5rem',
        fontWeight: '400',
    },
    meta: {
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    metaItem: {
        display: 'flex',
        alignItems: 'center',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        background: 'var(--chip-bg)',
        padding: '0.4rem 0.8rem',
        borderRadius: '8px',
    },
    scoreHighlight: {
        color: '#10b981',
        fontWeight: '600',
    }
};

export default Education;

import React from 'react';

const Achievements = () => {
    const stats = [
        {
            label: "CodeChef",
            value: "1456",
            sub: "Max Rating",
            tag: "2 Star Coder",
            tagColor: "#f97316", // Orange
            icon: "trophy",
            iconColor: "#f97316"
        },
        {
            label: "LeetCode",
            value: "400+",
            sub: "Problems Solved",
            tag: "Problem Solver",
            tagColor: "#a855f7", // Purple
            icon: "code",
            iconColor: "#a855f7"
        },
        {
            label: "Oracle",
            value: "Java",
            sub: "Foundations",
            tag: "Certified",
            tagColor: "#ef4444", // Red
            icon: "award",
            iconColor: "#ef4444"
        },
        {
            label: "Cisco",
            value: "C, C++",
            sub: "HTML & CSS",
            tag: "Certified",
            tagColor: "#3b82f6", // Blue
            icon: "star",
            iconColor: "#3b82f6"
        }
    ];

    const platforms = [
        { name: "LeetCode", icon: "code", url: "https://leetcode.com/u/priya1212/" },
        { name: "CodeChef", icon: "chef", url: "https://www.codechef.com/users/vishnu_1212" }, 
        { name: "HackerRank", icon: "trophy", url: "https://www.hackerrank.com/profile/v92005489" },
        { name: "GeeksForGeeks", icon: "terminal", url: "https://www.geeksforgeeks.org/profile/v92009mhz" }
    ];

    return (
        <section id="achievements" style={styles.section}>
            <div style={styles.header}>
                <h4 style={styles.subTitle}>RECOGNITION & GROWTH</h4>
                <h2 style={styles.title}>Achievements</h2>
            </div>

            <div style={styles.grid}>
                {stats.map((stat, index) => (
                    <div key={index} style={styles.card}>
                        <div style={{ ...styles.iconBg, backgroundColor: stat.iconColor }}>
                            {getIcon(stat.icon)}
                        </div>
                        <div style={styles.statInfo}>
                            <h4 style={styles.statLabel}>{stat.label}</h4>
                            <div style={styles.statValue}>{stat.value}</div>
                            <div style={styles.statSub}>{stat.sub}</div>
                        </div>
                        <span style={{ ...styles.tag, backgroundColor: stat.tagColor }}>{stat.tag}</span>
                    </div>
                ))}
            </div>

            <div style={styles.platformsWrapper}>
                <h4 style={styles.platformTitle}>Active on Coding Platforms</h4>
                <div style={styles.platforms}>
                    {platforms.map((p, i) => (
                        <a key={i} href={p.url} style={styles.platformLink}>
                            {getIcon(p.icon)}
                            <span>{p.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

const getIcon = (name) => {
    const style = { width: 24, height: 24, color: '#fff' };
    const smStyle = { width: 18, height: 18, marginRight: '8px' };

    switch (name) {
        case 'trophy':
            return <svg {...style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>;
        case 'code':
            return <svg {...style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
        case 'award':
            return <svg {...style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>;
        case 'star':
            return <svg {...style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;
        case 'github':
            return <svg {...smStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
        case 'linkedin':
            return <svg {...smStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
        case 'chef':
        case 'terminal':
        default:
            return <svg {...smStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>;
    }
}


const styles = {
    section: {
        padding: '6rem 2rem 10rem',
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        marginBottom: '6rem',
    },
    card: {
        background: 'var(--card-bg-gradient)',
        border: '1px solid var(--border-color)',
        borderRadius: '16px',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
    },
    iconBg: {
        width: '60px',
        height: '60px',
        borderRadius: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '1.5rem',
        boxShadow: '0 8px 16px -4px var(--shadow-color)',
    },
    statLabel: {
        color: 'var(--text-dim)',
        marginBottom: '0.5rem',
        fontSize: '0.9rem',
    },
    statValue: {
        fontSize: '2.5rem',
        fontWeight: '800',
        color: 'var(--text-color)',
        marginBottom: '0.5rem',
        lineHeight: '1.2',
    },
    statSub: {
        color: 'var(--text-muted)',
        fontSize: '0.9rem',
    },
    tag: {
        position: 'absolute',
        bottom: '-12px',
        color: '#fff', // Keep white as tag bg is dark/colored
        padding: '0.25rem 1rem',
        borderRadius: '50px',
        fontSize: '0.75rem',
        fontWeight: '600',
    },
    platformsWrapper: {
        textAlign: 'center',
    },
    platformTitle: {
        color: 'var(--text-dim)',
        marginBottom: '2rem',
        fontSize: '0.9rem',
    },
    platforms: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
    },
    platformLink: {
        display: 'flex',
        alignItems: 'center',
        background: 'var(--chip-bg)',
        border: '1px solid var(--border-color)',
        padding: '0.75rem 1.5rem',
        borderRadius: '50px',
        color: 'var(--text-muted)',
        textDecoration: 'none',
        fontSize: '0.9rem',
        transition: 'background 0.2s',
    }
};

export default Achievements;

import React from 'react';

const FooterInfo = () => {
    return (
        <footer id="contact" style={styles.footer}>
            <div style={styles.container}>
                <h2 style={styles.title}>Get In Touch</h2>
                <p style={styles.subtitle}>Feel free to reach out for collaborations or just a friendly hello!</p>

                <div style={styles.socialLinks}>
                    <a href="mailto:aravellivishnupriya@gmail.com" style={styles.linkItem}>
                        <div style={styles.iconBox}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </div>
                        <span>aravellivishnupriya@gmail.com</span>
                    </a>

                    <a href="https://www.linkedin.com/in/vishnu-priya-aravelli-654173291/" target="_blank" rel="noopener noreferrer" style={styles.linkItem}>
                        <div style={styles.iconBox}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </div>
                        <span>LinkedIn</span>
                    </a>

                    <div style={styles.linkItem}>
                        <div style={styles.iconBox}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </div>
                        <span>8247842024</span>
                    </div>

                    <div style={styles.linkItem}>
                        <div style={styles.iconBox}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        </div>
                        <span>Kakinada, India</span>
                    </div>
                </div>

                <div style={styles.copyright}>
                    © {new Date().getFullYear()} Vishnu Priya. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

const styles = {
    footer: {
        padding: '6rem 0 2rem',
        background: 'linear-gradient(to top, var(--bg-color), transparent)',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        textAlign: 'center',
    },
    title: {
        fontSize: '3rem',
        fontWeight: '800',
        color: 'var(--text-color)',
        marginBottom: '1rem',
    },
    subtitle: {
        color: 'var(--text-secondary)',
        fontSize: '1.1rem',
        marginBottom: '4rem',
    },
    socialLinks: {
        display: 'flex',
        justifyContent: 'center',
        gap: '3rem',
        flexWrap: 'wrap',
        marginBottom: '4rem',
    },
    linkItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        textDecoration: 'none',
        color: 'var(--text-secondary)',
        transition: 'color 0.3s ease',
        cursor: 'pointer',
    },
    iconBox: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'var(--card-bg)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'var(--accent-color)',
        border: '1px solid rgba(139, 92, 246, 0.2)',
        transition: 'all 0.3s ease',
    },
    copyright: {
        borderTop: '1px solid var(--border-color)',
        paddingTop: '2rem',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
    }
}

export default FooterInfo;

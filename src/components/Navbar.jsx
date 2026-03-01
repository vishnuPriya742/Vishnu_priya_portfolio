import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <nav style={styles.nav}>
            <div style={styles.logo}>
                <span style={styles.logoV}>V</span>ishnu <span style={styles.logoP}>P</span>riya
            </div>
            <div style={styles.rightSection}>
                <ul style={styles.links}>
                    {['Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                        <li key={item} style={styles.linkItem}>
                            <a href={`#${item.toLowerCase()}`} style={styles.link}>{item}</a>
                        </li>
                    ))}
                    <li style={styles.iconItem}>
                        <button
                            style={styles.iconBtn}
                            onClick={toggleTheme}
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5"></circle>
                                    <line x1="12" y1="1" x2="12" y2="3"></line>
                                    <line x1="12" y1="21" x2="12" y2="23"></line>
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                    <line x1="1" y1="12" x2="3" y2="12"></line>
                                    <line x1="21" y1="12" x2="23" y2="12"></line>
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                </svg>
                            ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            )}
                        </button>
                    </li>
                </ul>
                <a href="#contact" style={styles.cta}>Say Hello</a>
            </div>
        </nav>
    );
};

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 4rem',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        backdropFilter: 'blur(10px)',
        backgroundColor: 'var(--nav-bg)',
        borderBottom: '1px solid var(--border-color)',
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: '700',
        color: 'var(--text-color)',
        display: 'flex',
        alignItems: 'center',
    },
    logoV: {
        color: 'var(--accent-color)',
    }, logoP: {
        color: 'var(--accent-color)',
    },
    rightSection: {
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
    },
    links: {
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
    },
    linkItem: {
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
        cursor: 'pointer',
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
        transition: 'color 0.2s',
    },
    iconItem: {
        display: 'flex',
        alignItems: 'center',
    },
    iconBtn: {
        color: 'var(--accent-color)',
        display: 'flex',
        alignItems: 'center',
        background: 'transparent',
        border: '1px solid var(--accent-color)',
        padding: '8px',
        borderRadius: '50%',
        cursor: 'pointer',
    },
    cta: {
        background: 'var(--button-gradient)',
        color: '#fff',
        padding: '0.6rem 1.5rem',
        borderRadius: '50px',
        fontWeight: '600',
        fontSize: '0.9rem',
        cursor: 'pointer',
        transition: 'transform 0.2s',
    },
};

export default Navbar;

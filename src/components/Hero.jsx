import React from 'react';
import profile from '../assets/profile.png';

const Hero = () => {
    return (
        <section style={styles.hero}>
            <div style={styles.imageWrapper}>
                <img src={profile} alt="Vishnu Priya" style={styles.profileImage} />
            </div>
            <h3 style={styles.subTitle}>FULL STACK DEVELOPER</h3>
            <h2 style={styles.title}>Vishnu Priya</h2>

            <p style={styles.description}>
                Crafting elegant digital experiences with modern web technologies. <br />
                Passionate about building scalable applications and solving complex <br />
                problems.
            </p>

            <div style={styles.socials}>
                {[
                    { icon: 'github', link: 'https://github.com/vishnuPriya742' },
                    { icon: 'linkedin', link: 'https://www.linkedin.com/in/vishnu-priya-aravelli-654173291/' },
                    { icon: 'mail', link: 'mailto:aravellivishnupriya@gmail.com' },
                ].map((item, index) => (
                    <a key={index} href={item.link} style={styles.socialIcon}>
                        {getIcon(item.icon)}
                    </a>
                ))}
            </div>
            <a href="" download style={styles.resumeButton}>Download Resume</a>
        </section>
    );
};

const getIcon = (name) => {
    const commonStyle = { width: 20, height: 20, color: '#7c3aed' };
    switch (name) {
        case 'github':
            return <svg {...commonStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
        case 'linkedin':
            return <svg {...commonStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
        case 'mail':
            return <svg {...commonStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
        default: return null;
    }
}

const styles = {
    hero: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: '60px',
    },
    imageWrapper: {
        marginBottom: '2rem',
        position: 'relative',
        zIndex: 1,
    },
    profileImage: {
        width: '180px',
        height: '180px',
        borderRadius: '50%',
        objectFit: 'cover',
        border: '4px solid rgba(139, 92, 246, 0.3)',
        boxShadow: '0 0 30px rgba(139, 92, 246, 0.2)',
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
        fontSize: '5rem',
        fontWeight: '800',
        background: 'var(--title-gradient)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '0.5rem',
    },
    lastName: {
        fontSize: '4rem',
        fontWeight: '300',
        color: 'rgba(255, 255, 255, 0.5)',
        marginBottom: '2rem',
    },
    description: {
        fontSize: '1.1rem',
        color: 'var(--text-muted)',
        lineHeight: '1.6',
        maxWidth: '600px',
        marginBottom: '3rem',
    },
    socials: {
        display: 'flex',
        gap: '1.5rem',
        marginBottom: '3rem',
    },
    socialIcon: {
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
    resumeButton: {
        padding: '14px 32px',
        borderRadius: '999px',
        background: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
        color: '#fff',
        fontWeight: '600',
        textDecoration: 'none',
        fontSize: '1rem',
        letterSpacing: '0.05em',
        border: 'none',
        boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
    }

};

export default Hero;

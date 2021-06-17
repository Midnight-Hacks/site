import aboutStyles from '../styles/About.module.css';

const About = () => {
    return (
        <section className={aboutStyles.background}>
            <span className={aboutStyles.title}>about us</span>
            <p className={aboutStyles.text}>We are a group of student hackers that love coding!</p>
            <div className={aboutStyles.logoContainer}>
                <img src="/logo.svg" alt="logo" className={aboutStyles.logo} />
            </div>
            <div className={aboutStyles.subtextContainer}>
                <span className={aboutStyles.subtext}>Our goal is to make a calm, low-pressure event for middle school and high school to learn how to program.</span>
            </div>
            
        </section>
    );
}

export default About;
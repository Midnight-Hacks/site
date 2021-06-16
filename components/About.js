import aboutStyles from '../styles/About.module.css';

const About = () => {
    return (
        <section className={aboutStyles.background}>
            <span className={aboutStyles.title}>about us</span>
            <h2 className={aboutStyles.text}>We are a group of hackers that absolutely love coding</h2>
        </section>
    );
}

export default About;
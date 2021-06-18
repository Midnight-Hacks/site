import aboutStyles from '../styles/About.module.css';

const About = () => {
    return (
        <section className={aboutStyles.background} id="about">
            <br></br><br></br><br></br>
            <span className={aboutStyles.title}>about us</span>
            <p className={aboutStyles.text}>We are a group of student hackers that love coding!</p>
            <div className={aboutStyles.contentContainer}>
                <img src="/logo.svg" alt="logo" className={aboutStyles.logo} />
                <span className={aboutStyles.subtext}><strong>Midnight hacks</strong> is a 12-hour hackathon designed for beginner coders. Many schools in New York don't have hackathons hosted within their school, allowing students to miss out on memorable experiences, and opportunities to learn and build. <br /> <br />Our goal is to make a calm, low-pressure event for middle school and high school students in New York (and beyond) so they can learn to code, and gain memorable experiences along the way. You can work in up to teams of 4, and you'll get to design and build a project from scratch. We'll also have workshops hosted throughout the event, so there's always an opportunity to learn something new.</span>
            </div>
        </section>
    );
}

export default About;
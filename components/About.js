import aboutStyles from '../styles/About.module.css';

const About = () => {
    return (
        <section className={aboutStyles.background} id="about">
            <br></br><br></br><br></br>
            <span className={aboutStyles.title}>about us</span>
            <p className={aboutStyles.text}>We are a group of student hackers that love coding!</p>
            <div className={aboutStyles.contentContainer}>
                <img src="/logo.svg" alt="logo" className={aboutStyles.logo} />
                <span className={aboutStyles.subtext}><strong>Midnight hacks</strong> is a 24-hour hackathon designed for beginner coders. Many schools in New York don't have hackathons hosted within their school, or often don't do a very good job at showing students the true magic of coding. Students miss out on memorable experiences, and opportunities to learn and build.<br /> <br />That doesn't mean all schools are bad at this. The event organizers were lucky enough to have their very own high school host a hackathon, and that event managed to inspire them to continue coding and eventually attend hackathons <strong>weekly</strong> at one point. The only issue is, the hackathon that kick started their journies into the magical coding world was only restricted to the students of that school. We want to change that, and create an event with similar impact that's open to the outside world.
                <br /> <br />We want to change that. Our goal is to make a calm, fun, low-pressure event for middle school and high school students in New York (and beyond) so they can learn to code, and gain memorable experiences along the way. You can work in up to teams of 4, and you'll get to design and build a project from scratch. We'll also have workshops hosted throughout the event, so there's always an opportunity to learn something new.</span>
            </div>
        </section>
    );
}

export default About;
import aboutStyles from '../styles/About.module.css';

const About = () => {
    return (
        <section className={aboutStyles.background} id="about">
            <br></br><br></br><br></br>
            <span className={aboutStyles.title}>about us</span>
            <p className={aboutStyles.text}>We are a group of student hackers that love coding!</p>
            <div className={aboutStyles.contentContainer}>
                <img src="/logo.svg" alt="logo" className={aboutStyles.logo} />
                <span className={aboutStyles.subtext}><strong>Midnight hacks</strong> is a 24-hour hackathon designed for beginner coders. Many schools in New York don't have hackathons hosted within their school, or often don't do a very good job at showing students the true magic of coding. Students miss out on memorable experiences, and opportunities to learn and build.
                <br /> <br />We want to change that. Our goal is to make a calm, fun, low-pressure event for middle school and high school students in New York (and beyond) so they can learn to code, and gain memorable experiences along the way. You can work in up to teams of 4, and you'll get to design and build a project from scratch. We'll also have workshops hosted throughout the event, so there's always an opportunity to learn something new. What you get at Midnight Hacks won't be what you get in a standard computer science class!</span>
            </div>
            <div className={aboutStyles.why}>
                <h2 className={aboutStyles.text}><strong>Why Midnight Hacks?</strong></h2>
                <span className={aboutStyles.subtext}>Jumping into programming is always the scariest part, but <b>Midnight Hacks</b> will mark the ending of your fears and will be the beginning of developing your programming mindset! We want to introduce programming and the world of technology via real world application. Learning a language is important, but understanding how to think like a programmer will help you solve any problems that come your way! 
                <br /> <br />
                Begin your programming journey and join us on <u>November 6th</u> for the craziest 24 hours of your night! Midnight Hacks will prepare you for your new day of reaching out to other coding opportunities like New York Code Days in mid-November!</span>
            </div>
        </section>
    );
}

export default About;

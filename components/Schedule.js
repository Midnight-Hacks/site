import scheduleStyles from '../styles/Schedule.module.css';

const eventsDay1 = [
    {
        event: 'Opening Ceremony - 6:00 PM',
        desc: 'Join us for our opening ceremony at the start of the event!'
    },
    {
        event: 'Team Forming - 6:15 PM',
        desc: 'Find new teammates in the #team-finding channel in the Discord server!'
    },
    {
        event: 'Hacking start! - 6:30 PM',
        desc: 'Begin working on your projects!'
    },
    {
        event: 'Intro to Git - 7:00 PM',
        desc: 'Come see our intro to Git and Github hosted by Belle! You\'ll want to learn this for submitting your projects at the end!'
    },
    {
        event: 'Web Dev 101 - 8:00 PM',
        desc: 'Join us for Web Dev 101, a workshop hosted by Belle introducing web development!'
    },
    {
        event: 'Docker Workshop - 9:00 PM',
        desc: 'Tune in for an amazing workshop prepared by Jake, showing how to use Docker and the importance of it!'
    },
    {
        event: 'Internships as a High Schooler - 10:00 PM',
        desc: 'Come listen in for a talk from Anthony, going into detail on how you can land an internship as a high school student!'
    },
    {
        event: 'Next.js workshop - 10:30 PM',
        desc: 'Join Sam for an intro to Next.js, a popular web framework!'
    },
]

const eventsDay2 = [
    {
        event: 'Blockchain and Web3 workshop - 11:30 AM',
        desc: 'Watch Rishi and his workshop on Blockchain and Web3!'
    },
    {
        event: 'Hackathon project to the next level - 1:30 PM',
        desc: 'Don\'t miss Abigayle\'s talk on taking your hackathon project a step further!'
    },
    {
        event: 'Building a CLI! - 3:30 PM',
        desc: 'Check out Ishan\'s workshop on building a CLI! You don\'t want to miss it!'
    },
    {
        event: 'Hacking end - 6:00PM',
        desc: 'Submit your projects on Devpost!'
    },
    {
        event: 'Live demos! - 6:20PM',
        desc: 'Fill out the Google Form sent in the Discord server for a chance to live demo your project on the Main Stage!'
    },
    {
        event: 'Closing ceremony - 7:15PM',
        desc: 'Join us for our closing ceremony, where we\'ll announce the winners!'
    },
]

const Schedule = () => {
    return (
        <section className={scheduleStyles.background}>
            <br id="schedule" />
            <br /><br />
            <span className={scheduleStyles.title}>schedule</span>
            <span className={scheduleStyles.subtext}>Times are in EST!</span>
            <span className={scheduleStyles.text}>November 6th</span>
            <div className={scheduleStyles.schedule}>
                {eventsDay1.map((event, i) => (
                    <div className={scheduleStyles.scheduleDiv}>
                        <div className={scheduleStyles.scheduleCard}>
                            <span className={scheduleStyles.text}>{event.event}</span>
                        </div>
                        <div className={scheduleStyles.desc}>
                            <span className={scheduleStyles.subtext}>{event.desc}</span>
                        </div>
                    </div>
                ))}
            </div>
            <span className={scheduleStyles.text}>November 7th</span>
            <div className={scheduleStyles.schedule}>
                {eventsDay2.map((event, i) => (
                    <div className={scheduleStyles.scheduleDiv}>
                        <div className={scheduleStyles.scheduleCard}>
                            <span className={scheduleStyles.text}>{event.event}</span>
                        </div>
                        <div className={scheduleStyles.desc}>
                            <span className={scheduleStyles.subtext}>{event.desc}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Schedule;
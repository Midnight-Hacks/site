import scheduleStyles from '../styles/Schedule.module.css';

const events = [
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

const Schedule = () => {
    return (
        <section className={scheduleStyles.background}>
            <br id="schedule" />
            <br /><br />
            <span className={scheduleStyles.title}>schedule</span>
            <div className={scheduleStyles.schedule}>
                {events.map((event, i) => (
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
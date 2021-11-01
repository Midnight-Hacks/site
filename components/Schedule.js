import scheduleStyles from '../styles/Schedule.module.css';

const events = [
    {
        event: 'Opening Ceremony - 6:00 PM',
        desc: 'Join us for our opening ceremony at the start of the event!'
    }
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
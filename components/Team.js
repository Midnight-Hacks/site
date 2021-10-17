import teamStyles from '../styles/Team.module.css';

const teamMembers = [
    {
        image: 'warren.PNG',
        name: 'warren',
        role: 'Organizer'
    },
    {
        image: 'fahim.png',
        name: 'fahim',
        role: 'Organizer'
    },
    {
        image: 'asa.png',
        name: 'asa',
        role: 'Organizer'
    },
    {
        image: 'alex.PNG',
        name: 'alexandria',
        role: 'Organizer'
    },
]

const Team = () => {
    return (
        <section className={teamStyles.background}>
            <br id="team" />
            <div className={teamStyles.title}>our team</div>
            <div className={teamStyles.teamShowcase}>
                {teamMembers.map((member, i) => (
                    <div className={teamStyles.member} key={i}>
                        <img src={`/members/${member.image}`} className={teamStyles.memberImage} />
                        <h1 className={teamStyles.text}>{member.name}</h1>
                        <h1 className={teamStyles.subtext}>{member.role}</h1>
                    </div>
                ))}
            </div>
            <div className={teamStyles.buttonDiv}>
                <span className={teamStyles.subtext}>Interested in being a mentor/judge?</span>
                <br></br>
                <a href="mailto:warren@midnighthacks.tech?subject=Mentor/Judge%20Interest">
                    <button className={teamStyles.btn}>
                        Apply here!
                    </button>
                </a>
            </div>
        </section>
    );
}

export default Team;
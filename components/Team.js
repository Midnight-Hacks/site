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

const judges = [
    {
        image: 'Uladzislau.jpg',
        name: 'Uladzislau',
        desc: 'Judge'
    },
    {
        image: 'Vladislav.jpg',
        name: 'Vladislav',
        desc: 'Judge'
    },
    {
        image: 'Anzor.jpg',
        name: 'Anzor',
        desc: 'Judge'
    },
]

const mentors = [
    {
        image: 'anthony.jpg',
        name: 'anthony',
        desc: 'Mentor/Speaker'
    },
    {
        image: 'jake.png',
        name: 'jake',
        desc: 'Mentor/Speaker'
    }
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
            <div className={teamStyles.title}>Judges</div>
            <div className={teamStyles.teamShowcase}>
                {judges.map((judge, i) => (
                    <div className={teamStyles.member} key={i}>
                        <img src={`/judges/${judge.image}`} className={teamStyles.memberImage} />
                        <h1 className={teamStyles.text}>{judge.name}</h1>
                        <h1 className={teamStyles.subtext}>{judge.desc}</h1>
                    </div>
                ))}                
            </div>
            <div className={teamStyles.title}>Mentors</div>
            <div className={teamStyles.teamShowcase}>
                {mentors.map((mentor, i) => (
                    <div className={teamStyles.member} key={i}>
                        <img src={`/mentors/${mentor.image}`} className={teamStyles.memberImage} />
                        <h1 className={teamStyles.text}>{mentor.name}</h1>
                        <h1 className={teamStyles.subtext}>{mentor.desc}</h1>
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
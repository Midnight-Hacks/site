import teamStyles from '../styles/Team.module.css';

const Team = () => {
    return (
        <section className={teamStyles.background}>
            <span className={teamStyles.title} id="team">our team</span>
            <div className={teamStyles.teamShowcase}>
                <div className={teamStyles.member}>
                    <img src="/members/warren.PNG" className={teamStyles.memberImage} />
                    <h1 className={teamStyles.text}>warren</h1>
                    <h1 className={teamStyles.subtext}>Founder</h1>
                </div>
                <div className={teamStyles.member}>
                    <img src="/members/placeholder.PNG" className={teamStyles.memberImage} />
                    <h1 className={teamStyles.text}>fahim</h1>
                    <h1 className={teamStyles.subtext}>Co-founder</h1>
                </div>
                <div className={teamStyles.member}>
                    <img src="/members/placeholder.PNG" className={teamStyles.memberImage} />
                    <h1 className={teamStyles.text}>asa</h1>
                    <h1 className={teamStyles.subtext}>Co-founder</h1>
                </div>
                <div className="member member5">
                    <img src="/members/jake.png" className={teamStyles.memberImage} />
                <h1 className={teamStyles.text}>Jake</h1>
                <h1 className={teamStyles.subtext}>twitch.tv/JakeJack</h1>
            </div>
            </div>
        </section>
    );
}

export default Team;
import teamStyles from '../styles/Team.module.css';

const Team = () => {
    return (
        <section className={teamStyles.background} id="team">
            <span className={teamStyles.title}>our team</span>
            <div className={teamStyles.teamShowcase}>
                <div className={teamStyles.member}>
                    <img src="/warren.PNG" className={teamStyles.memberImage} />
                    <h1 className={teamStyles.text}>warren</h1>
                </div>
                <div className={teamStyles.member}>
                    <img src="/placeholder.PNG" className={teamStyles.memberImage} />
                    <h1 className={teamStyles.text}>fahim</h1>
                </div>
                <div className={teamStyles.member}>
                    <img src="/placeholder.PNG" className={teamStyles.memberImage} />
                    <h1 className={teamStyles.text}>asa</h1>
                </div>
            </div>
        </section>
    );
}

export default Team;
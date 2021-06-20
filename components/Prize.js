import prizeStyles from '../styles/Prize.module.css';

const Prize = () => {
    return (
        <section className={prizeStyles.background} id="prizes">
            <br /><br />
            <span className={prizeStyles.title}>prizes</span>
            <div className={prizeStyles.prizes}>
                <div className={prizeStyles.prizeDiv}>
                    <div className={prizeStyles.prizeCard}>
                        <span className={prizeStyles.text}>1st place</span>
                    </div>
                    <div className={prizeStyles.desc}>
                        <span className={prizeStyles.subtext}>Coming soon!</span>
                    </div>
                </div>

                <div className={prizeStyles.prizeDiv}>
                    <div className={prizeStyles.prizeCard}>
                        <span className={prizeStyles.text}>2nd place</span>
                    </div>
                    <div className={prizeStyles.desc}>
                        <h1 className={prizeStyles.subtext}>Coming soon!</h1>
                    </div>
                </div>

                <div className={prizeStyles.prizeDiv}>
                    <div className={prizeStyles.prizeCard}>
                        <span className={prizeStyles.text}>3rd place</span>
                    </div>
                    <div className={prizeStyles.desc}>
                        <h1 className={prizeStyles.subtext}>Coming soon!</h1>
                    </div>
                </div>
                <div className={prizeStyles.prizeDiv}>
                    <div className={prizeStyles.prizeCard}>
                        <span className={prizeStyles.text}>best night hack</span>
                    </div>
                    <div className={prizeStyles.desc}>
                        <h1 className={prizeStyles.subtext}>Coming soon!</h1>
                    </div>
                </div>

                <div className={prizeStyles.prizeDiv}>
                    <div className={prizeStyles.prizeCard}>
                        <span className={prizeStyles.text}>best beginners hack</span>
                    </div>
                    <div className={prizeStyles.desc}>
                        <h1 className={prizeStyles.subtext}>Coming soon!</h1>
                    </div>
                </div>

                <div className={prizeStyles.prizeDiv}>
                    <div className={prizeStyles.prizeCard}>
                        <span className={prizeStyles.text}>funniest hack</span>
                    </div>
                    <div className={prizeStyles.desc}>
                        <h1 className={prizeStyles.subtext}>Coming soon!</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Prize;
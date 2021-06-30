import resourceStyles from '../styles/Resources.module.css';

const Resources = () => {
    return (
        <section className={resourceStyles.background}>
            <br id="resources" />
            <h1 className={resourceStyles.title}>Resources</h1>
            <h1 className={resourceStyles.text}>New to coding? Check out these resources below!</h1>
            <div className={resourceStyles.links}>
                <div className={resourceStyles.frameDiv}>
                    <iframe
                        src="https://www.youtube.com/embed/rfscVS0vtbw"
                        className={resourceStyles.video}>
                    </iframe>
                </div>
                <div className={resourceStyles.frameDiv}>
                    <iframe
                        src="https://www.youtube.com/embed/pQN-pnXPaVg"
                        className={resourceStyles.video}>
                    </iframe>
                </div>
                <div className={resourceStyles.frameDiv}>
                    <iframe
                        src="https://www.youtube.com/embed/r3GGV2TG_vw"
                        className={resourceStyles.video}>
                    </iframe>
                </div>
                <div className={resourceStyles.frameDiv}>
                    <iframe
                        src="https://www.youtube.com/embed/PkZNo7MFNFg"
                        className={resourceStyles.video}>
                    </iframe>
                </div>
            </div>
        </section>
    );
}

export default Resources;
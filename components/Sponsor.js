import sponsorStyles from '../styles/Sponsor.module.css';

const Sponsor = () => {
    return (
        <section className={sponsorStyles.background} id="sponsors">
            <br /> <br />
            <span className={sponsorStyles.title}>sponsors</span>
            <h3 className={sponsorStyles.text}>404</h3>
            <h3 className={sponsorStyles.text}>sponsor us <br></br>please</h3>
            <a href="mailto:warren@midnighthacks.tech?subject=Sponsorship%20Interest">
                <button className={sponsorStyles.btn}>
                    Sponsor us!
                </button>
            </a>
        </section>
    );
}

export default Sponsor;
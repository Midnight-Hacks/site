import sponsorStyles from '../styles/Sponsor.module.css';

const Sponsor = () => {
    return (
        <section className={sponsorStyles.background} id="sponsors">
            <br /> <br />
            <span className={sponsorStyles.title}>sponsors</span>
            <h3 className={sponsorStyles.text}>404</h3>
            <h3 className={sponsorStyles.text}>sponsor us <br></br>please</h3>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
                    <button className={sponsorStyles.btn}>
                        <a href="mailto:midnighthacks2021@gmail.com?subject=Sponsorship%20Interest">Sponsor us!</a>
                    </button>
                </a>
            
        </section>
    );
}

export default Sponsor;
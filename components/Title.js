import titleStyles from '../styles/Title.module.css';

const Title = () => {
    return (
        <>
            <br id="start"></br>
            <br></br>
            <section className={titleStyles.background}>
                <div className={titleStyles.content}>
                    <span className={titleStyles.title}>midnight hacks</span>
                    <h1 className={titleStyles.date}>August 28th, 2021</h1>
                    <img src="/website-logo.png" className={titleStyles.logo}/>
                    <h2 className={titleStyles.text}>A 24-hour student led hackathon designed for beginners!</h2>     
                    <a href="https://l4uy080d84c.typeform.com/to/iAFKna3J" target="_blank">
                        <button className={titleStyles.btn}>
                            Sign up!
                        </button>
                    </a>
                </div>
            </section>
        </>
    );
}

export default Title;
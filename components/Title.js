import titleStyles from '../styles/Title.module.css';

const Title = () => {
    return (
        <>
            <br id="start"></br>
            <br></br> // pro coder
            <section className={titleStyles.background}>
                <div className={titleStyles.content}>
                    <span className={titleStyles.title}>midnight hacks</span>
                    <img src="/website-logo.png" className={titleStyles.logo}/>
                    <h2 className={titleStyles.text}>A 12-hour student led hackathon designed for beginners!</h2>
                    <button className={titleStyles.btn}>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Sign up</a>
                    </button>
                </div>
            </section>
        </>
    );
}

export default Title;
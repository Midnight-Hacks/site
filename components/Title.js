import titleStyles from '../styles/Title.module.css';

const Title = () => {
    return (
        <>
            <br id="start"></br>
            <br></br>
            <section className={titleStyles.background}>
                <div className={titleStyles.content}>
                    <span className={titleStyles.title}>midnight hacks</span>
                    <img src="/website-logo.png" className={titleStyles.logo}/>
                    <h2 className={titleStyles.text}>A 12-hour student led hackathon designed for beginners!</h2>
                    
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
                        <button className={titleStyles.btn}>
                            Sign up
                        </button>
                    </a>
                </div>
            </section>
        </>
    );
}

export default Title;
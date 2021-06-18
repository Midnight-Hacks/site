import prizeStyles from '../styles/Prize.module.css';

const Prize = () => {
    return (
        <section className={prizeStyles.background} id="prizes">
            <br /> <br />
            <span className={prizeStyles.title}>prizes</span>
            <div className={prizeStyles.prizes}>
                <span className={prizeStyles.text}>prize 1</span>
                <span className={prizeStyles.text}>prize 2</span>
                <span className={prizeStyles.text}>prize 3</span>
                <span className={prizeStyles.text}>prize 4</span>
                <span className={prizeStyles.text}>prize 5</span>
                <span className={prizeStyles.text}>prize 6</span>
            </div>
        </section>
    );
}

export default Prize;
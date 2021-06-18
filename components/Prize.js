import prizeStyles from '../styles/Prize.module.css';

const Prize = () => {
    return (
        <section className={prizeStyles.background} id="prizes">
            <span className={prizeStyles.title}>prizes</span>
            <h3 className={prizeStyles.text}>first place: participation award</h3>
        </section>
    );
}

export default Prize;
import titleStyles from '../styles/Title.module.css';

const Title = () => {
    return (
        <div className={titleStyles.background}>
            <span className={titleStyles.title}>midnight hacks</span>
            <img src="/website-logo.png" className={titleStyles.logo}/>
        </div>
    );
}

export default Title;
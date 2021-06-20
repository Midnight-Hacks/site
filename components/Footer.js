import footerStyles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={footerStyles.background}>
            <h1 className={footerStyles.text}>midnight hacks</h1>
            <ul className={footerStyles.socialList}>
                <li className={footerStyles.media}>
                    <a href="mailto:midnighthacks2021@gmail.com">
                        <img src="/footer-icons/envelope.svg" className={footerStyles.icon}/>
                    </a>
                </li>
                <li className={footerStyles.media}>
                    <a href="mailto:midnighthacks2021@gmail.com">
                        <img src="/footer-icons/github-sign.svg" className={footerStyles.icon}/>
                    </a>
                </li>
                <li className={footerStyles.media}>
                    <a href="mailto:midnighthacks2021@gmail.com">
                        <img src="/footer-icons/discord.svg" className={footerStyles.icon}/>
                    </a>
                </li>
            </ul>
            <h1 className={footerStyles.subtext}>
                Icons made by <a href="https://www.flaticon.com/authors/dave-gandy"><u>Dave Gandy</u></a> and <a href="https://www.flaticon.com/authors/pixel-perfect"><u>Pixel Perfect</u></a> from <a href="https://www.flaticon.com/" ><u>Flaticon</u></a>
            </h1>
        </footer>
    );
}

export default Footer;
import footerStyles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={footerStyles.background}>
            <h1 className={footerStyles.text}>midnight hacks</h1>
            <ul className={footerStyles.socialList}>
                <li className={footerStyles.media}>
                    <a href="mailto:warren@midnighthacks.tech">
                        <img src="/footer-icons/envelope.svg" className={footerStyles.icon}/>
                    </a>
                </li>
                <li className={footerStyles.media}>
                    <a href="https://github.com/Midnight-Hacks" target="_blank">
                        <img src="/footer-icons/github-sign.svg" className={footerStyles.icon}/>
                    </a>
                </li>
                <li className={footerStyles.media}>
                    <a href="https://discord.gg/CSAtdSew8g" target="_blank">
                        <img src="/footer-icons/discord.svg" className={footerStyles.icon}/>
                    </a>
                </li>
                <li className={footerStyles.media}>
                    <a href="https://www.instagram.com/midnighthacks_ny/" target="_blank">
                        <img src="/footer-icons/instagram.svg" className={footerStyles.icon} />
                    </a>
                </li>
            </ul>
            <h1 className={footerStyles.subtext}>
                Icons made by <a href="https://www.flaticon.com/authors/dave-gandy"><u>Dave Gandy</u></a> and <a href="https://www.flaticon.com/authors/pixel-perfect" target="_blank"><u>Pixel Perfect</u></a> from <a href="https://www.flaticon.com/" target="_blank"><u>Flaticon</u></a>
            </h1>
        </footer>
    );
}

export default Footer;
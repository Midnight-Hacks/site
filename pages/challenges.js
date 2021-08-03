import Head from 'next/head';
import Nav from '../components/Nav';
import Card from '../components/Card';

import challengeStyles from '../styles/Challenges.module.css';
import titleStyles from '../styles/Title.module.css';

export default function ChallengePage() {
    return (
        <div>
            <Head>
                <title>Challenges</title>
            </Head>
            <Nav />
            <br id="start"></br>
            <br></br>
            <br></br>
            <span className={challengeStyles.title}>challenges</span>
            <h2 className={titleStyles.text}>Coming soon :)</h2>
            <section className={challengeStyles.cardSection}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
        </div>
    )
}
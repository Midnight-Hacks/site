import Head from 'next/head';
import Nav from '../components/Nav';

import challengeStyles from '../styles/Challenges.module.css';

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
        </div>
    )
}
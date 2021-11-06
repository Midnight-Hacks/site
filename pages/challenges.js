import Head from 'next/head';
import Nav from '../components/Nav';
import Card from '../components/Card';

import challengeStyles from '../styles/Challenges.module.css';
import titleStyles from '../styles/Title.module.css';

const challenges = [
    {
        name: 'Challenge name',
        desc: 'Description',
        points: '0'
    },
    {
        name: 'Challenge name',
        desc: 'Description',
        points: '0'
    },
    {
        name: 'Challenge name',
        desc: 'Description',
        points: '0'
    },
    {
        name: 'Challenge name',
        desc: 'Description',
        points: '0'
    },
    {
        name: 'Challenge name',
        desc: 'Description',
        points: '0'
    },
    {
        name: 'Challenge name',
        desc: 'Description',
        points: '0'
    },
]

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
                {challenges.map((chal, i) => (
                    <Card key={i} name={chal.name} desc={chal.desc} points={chal.points}/>
                ))}
            </section>
        </div>
    )
}
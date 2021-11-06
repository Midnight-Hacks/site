import Head from 'next/head';
import Nav from '../components/Nav';
import Card from '../components/Card';

import challengeStyles from '../styles/Challenges.module.css';
import titleStyles from '../styles/Title.module.css';

const challenges = [
    {
        name: 'echo3D',
        desc: 'Build a mini project using echo3D! If you need help, ask questions in the #echo3d channel on discord!',
        points: '2'
    },
    {
        name: 'Planning!',
        desc: 'Plan out your hack on paper, and submit a picture of it to us!',
        points: '1'
    },
    {
        name: 'Incorporate Data Analysis with R',
        desc: 'Use R to analyze a set of data! You can find sets of data from https://www.kaggle.com/',
        points: '1'
    },
    {
        name: 'CSS Design',
        desc: 'Try and learn and make something brand new with CSS, and show us a picture/link the code!',
        points: '1'
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
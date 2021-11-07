import Head from 'next/head';
import Nav from '../components/Nav';
import Card from '../components/Card';

import challengeStyles from '../styles/Challenges.module.css';
import titleStyles from '../styles/Title.module.css';

const challenges = [
    {
        name: 'Build a live production version of your hack as a website',
        desc: 'If you can successfully deploy your hack to a live website, we\'ll throw in a free .xyz domain for it! (First 50 that complete it)',
        points: '2'
    },
    {
        name: 'Win the Kahoot game!',
        desc: 'Win the upcoming kahoot game happening at 12:30PM EST!',
        points: '2'
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
            <h2 className={titleStyles.text}>Submit Challenges <a href="https://forms.gle/HGnDBBv2ZUBq34PB8">Here (click on the here idk why its not highlighting)</a></h2>
            <section className={challengeStyles.cardSection}>
                {challenges.map((chal, i) => (
                    <Card key={i} name={chal.name} desc={chal.desc} points={chal.points}/>
                ))}
            </section>
        </div>
    )
}

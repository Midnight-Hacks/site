import Head from 'next/head';
import Nav from '../components/Nav';
import Card from '../components/Card';

import challengeStyles from '../styles/Challenges.module.css';
import titleStyles from '../styles/Title.module.css';

const challenges = [
    {
        name: 'Incorporate Echo3D',
        desc: 'For FREE access to all Business Plan features of the echo3D platform, register here: https://console.echo3d.co/#/auth/register-promo?code=MidnightHacks',
        points: '2'
    },
    {
        name: 'Plan your hack out on paper!',
        desc: 'Submit a photo to the google form with a nice schematic/drawing/flowchart outlining your project. It doesn\'t have to reflect the final product.',
        points: '1'
    },
    {
        name: 'Incorporate Data Science using R',
        desc: 'Data Science is pretty cool so submit the form with your repo where we can see that you have used R and data science.',
        points: '1'
    },
    {
        name: 'Show off a good looking ux',
        desc: 'Nobody understands css, so be someone that pretends to understand it. Link your repo and an image of a sample of your godly css skills in this project.',
        points: '1'
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
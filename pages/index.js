import Head from 'next/head';
import Title from '../components/Title';
import About from '../components/About';
import Sponsor from '../components/Sponsor';
import Nav from '../components/Nav';
import Prize from '../components/Prize';

export default function Home() {
  return (
      <div>
        <Head>
          <title>Midnight Hacks</title>
        </Head>
        <Nav />
        <Title />
        <About />
        <Sponsor />
        <Prize />
      </div>
  )
}

import Head from 'next/head';
import Title from '../components/Title';
import About from '../components/About';
import Sponsor from '../components/Sponsor';
import Nav from '../components/Nav';
import Prize from '../components/Prize';
import Team from '../components/Team';
import FAQ from '../components/FAQ';
import Resources from '../components/Resources';
import Footer from '../components/Footer';

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
        <Team />
        <FAQ />
        <Resources />
        <Footer />
      </div>
  )
}

import Title from '../components/Title';
import About from '../components/About';
import Sponsor from '../components/Sponsor';
import Nav from '../components/Nav';
import Schedule from '../components/Schedule';
import Team from '../components/Team';
import FAQ from '../components/FAQ';
import Resources from '../components/Resources';
import Footer from '../components/Footer';

export default function Home() {
  return (
      <div>
        <Nav />
        <Title />
        <About />
        <Sponsor />
        <Schedule />
        <Team />
        <FAQ />
        <Resources />
        <Footer />
      </div>
  )
}

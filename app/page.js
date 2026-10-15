import Header from '../components/Header';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Process from '../components/Process';
import Booking from '../components/Booking';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Pricing />
        <Process />
        <Booking />
      </main>
      <Footer />
    </>
  );
}

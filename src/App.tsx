import { EventHeader } from './components/event/EventHeader';
import { EventHero } from './components/event/EventHero';
import { IntroSection } from './components/event/IntroSection';
import { PainZone } from './components/event/PainZone';
import { SolutionZone } from './components/event/SolutionZone';
import { Testimonials } from './components/event/Testimonials';
import { EventOffer } from './components/event/EventOffer';
import { EventFAQ } from './components/event/EventFAQ';
import { EventClosing } from './components/event/EventClosing';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <EventHeader />
      <EventHero />
      <IntroSection />
      <PainZone />
      <SolutionZone />
      <Testimonials />
      <EventOffer />
      <EventFAQ />
      <EventClosing />
      <Footer />
    </div>
  );
}

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Companies from "./components/Companies";
import Services from "./components/services/Services";
import Destination from "./components/destination/Destinations";
import TravelPoint from './components/TravelPoint';
import KeyFeatures from "./components/keyFeatures/KeyFeatures";
import Testimonials from "./components/Testimonials";


const App = () => {
  return (
    <div className="overflow-hidden app">
      <Navbar />
      <Hero />
      <Companies />
      <Services />
      <Destination />
      <TravelPoint />
      <KeyFeatures />
      <Testimonials />
    </div>
  );
}

export default App;

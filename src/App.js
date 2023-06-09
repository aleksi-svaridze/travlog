import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Companies from "./components/Companies";
import Services from "./components/Services";
import Destination from "./components/destination/Destinations";
import TravelPoint from './components/TravelPoint';
import KeyFeatures from "./components/keyFeatures/KeyFeatures";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer"; 


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
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

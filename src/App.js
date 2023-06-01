import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Companies from "./components/Companies";
import Services from "./components/services/Services";
import Destination from "./components/destination/Destinations";
import TravelPoint from './components/TravelPoint';


const App = () => {
  return (
    <div className="overflow-hidden app">
      <Navbar />
      <Hero />
      <Companies />
      <Services />
      <Destination />
      <TravelPoint />
    </div>
  );
}

export default App;

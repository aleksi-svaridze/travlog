import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Companies from "./components/Companies";
import Services from "./components/services/Services";


const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Companies />
      <Services />
    </div>
  );
}

export default App;

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Companies from "./components/Companies";


const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Companies />
    </div>
  );
}

export default App;

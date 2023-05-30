import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Companies from "./components/Companies";


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Companies />
    </div>
  );
}

export default App;

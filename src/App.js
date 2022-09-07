import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Roadmap from "./components/Roadmap";
import Staking from "./components/Staking";
import Tokenomics from "./components/Tokenomics";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Staking/>
      <Roadmap/>
      <Tokenomics/>
    </>
  );
}

export default App;

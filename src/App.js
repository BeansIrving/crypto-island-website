import Ecosystem from "./components/Ecosystem";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NFT from "./components/NFT";
import Roadmap from "./components/Roadmap";
import Staking from "./components/Staking";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ecosystem />
      <NFT />
      <Staking/>
      <Roadmap />

    </>
  );
}

export default App;

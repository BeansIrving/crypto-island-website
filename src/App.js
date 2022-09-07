import Ecosystem from "./components/Ecosystem";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import NFT from "./components/NFT";

import Partners from "./components/Partners";

import Roadmap from "./components/Roadmap";
import Staking from "./components/Staking";
import Tokenomics from "./components/Tokenomics";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ecosystem />
      <NFT />
      <Staking/>
      <Roadmap />
      <Tokenomics/>
      <Partners/>
      <Footer/>
    </>
  );
}

export default App;

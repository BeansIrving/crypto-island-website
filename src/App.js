

import Character from "./components/Character";
import Cryptobridge from "./components/Cryptobridge";
import Ecosystem from "./components/Ecosystem";
import Footer from "./components/Footer";
import Gameplay from "./components/Gameplay";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import NFT from "./components/NFT";

import Partners from "./components/Partners";
import PlayNow from "./components/PlayNow";

import Roadmap from "./components/Roadmap";
import Staking from "./components/Staking";
import Tokenomics from "./components/Tokenomics";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Cryptobridge />
      <PlayNow/>
      <Gameplay />
      <Character /> 
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

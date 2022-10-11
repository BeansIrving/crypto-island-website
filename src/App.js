import Character from "./components/Character";
import Copyclipboard from "./components/Copyclipboard";
import Cryptobridge from "./components/Cryptobridge";
import Ecosystem from "./components/Ecosystem";
import Footer from "./components/Footer";
import Gameplay from "./components/Gameplay";
import Guma from "./components/Guma";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import NFT from "./components/NFT";

import Partners from "./components/Partners";
import PlayNow from "./components/PlayNow";

import Roadmap from "./components/Roadmap";
import Socials from "./components/Socials";
import Staking from "./components/Staking";
import Tokenomics from "./components/Tokenomics";
import TokenomicsP2 from "./components/TokenomicsP2";

function App() {
  return (
    <>
      <Socials />
      <Navbar />
      <Hero />
      <Cryptobridge />
      <PlayNow />
      <Gameplay />
      <Character /> 
      <Ecosystem />
      <Guma />
      <NFT /> 
      <Staking/>
      <Roadmap />
      <Tokenomics/>
      <TokenomicsP2/>
      <Partners/>
      <Footer/>
    </>
  );
}

export default App;

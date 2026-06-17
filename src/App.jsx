import { useEffect, useState } from "react";
import "./App.css";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Nabar/Nabar";
import Hero from "./Components/Hero/Hero";

function App() {
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);
  let heroData = [
    {
      textq: "Dive Into",
      text2: "What You Love",
    },
    {
      text1: "Indulge",
      text2: "Your Passions",
    },
    {
      text1: "Give in to",
      text2: "Your Passions",
    },
  ];
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(true);
  return (
    <div>
      {" "}
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
}

export default App;

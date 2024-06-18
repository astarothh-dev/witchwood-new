import Image from "next/image";
import Navbar from "./components/navbar";
import Title from "./components/title";
import Hero from "./components/hero";
import TextureOverlay from "./textureoverlay";
import Projects from "./components/projects";

const projectsData = [
  {
    image: 'bg.jpeg',
    title: 'Witchwood Anthology #1',
    description:"The first issue of the Witchwood Anthology, a collection of short stories by members of the Witchwood group.",
    authors: ['J Thomas', 'Matt Rickaby']
  },
  {
    image: 'rightHero.png',
    title: 'Rifft - Music Application',
    description:"A social application for users to find local gigs and artists, and connect with other music lovers.",
    authors: ['J Thomas']
  },
  // Add more projects as needed
];

export default function Home() {
  return (
    <main className="site-content pb-24">
      <div className="texture-overlay">
        <div className="texture texture1"></div>
        <div className="texture texture2"></div>
      </div>
      <Navbar />
      <Title />
      <Hero />
      <Projects projects={projectsData} />
      
    </main>
  );
}

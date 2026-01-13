import AboutHero from "../components/AboutHero";
import OurStory from "../components/OurStory";
import MissionValues from "../components/MissionValues";
import MissionVisionMessage from "../components/MissionVisionMessage";
import FounderProfile from "../components/FounderProfile";
import { founders } from "../data/team";
export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <MissionVisionMessage />
      <FounderProfile {...founders[0]} />
      <FounderProfile {...founders[1]} />

      <MissionValues />
    </main>
  );
}

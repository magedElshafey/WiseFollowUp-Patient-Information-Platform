import React from "react";
import AboutHero from "../../components/about/AboutHero";
import AboutMissionVision from "../../components/about/AboutMissionVision";
import AboutHowItWorks from "../../components/about/AboutHowItWorks";
import AboutWhatYouWillFind from "../../components/about/AboutWhatYouWillFind";
import AboutTrustAndSafety from "../../components/about/AboutTrustAndSafety";
import AboutWhoItsFor from "../../components/about/AboutWhoItsFor";
import AboutStandards from "../../components/about/AboutStandards";
import AboutCTA from "../../components/about/AboutCTA";

const AboutPage: React.FC = () => {
  return (
    <main className="bg-bg-page">
      <AboutHero />

      <AboutMissionVision />

      <AboutHowItWorks />

      <AboutWhatYouWillFind />

      <AboutTrustAndSafety />

      <AboutWhoItsFor />

      <AboutStandards />

      <AboutCTA />
    </main>
  );
};

export default AboutPage;

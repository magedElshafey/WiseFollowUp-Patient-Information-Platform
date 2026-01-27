import AboutHero from "../components/AboutHero";
import MissionValues from "../components/MissionValues";
import MissionVisionMessage from "../components/MissionVisionMessage";
import FounderProfile from "../components/FounderProfile";

import PageSeo from "@/common/components/seo/PageSeo";
import ReadingProgress from "@/common/reading-progress/ReadingProgress";
import FetchHandler from "@/common/api/fetchHandler/FetchHandler";

import useGetMissionVission from "../api/useGetMissionVission";
import useGetAboutHero from "../api/useGetAboutHero";
import useGetAboutFounders from "../api/useGetFounderProfile";
import useGetAboutInfo from "../api/useGetAboutInfo";

export default function AboutPage() {
  const heroQuery = useGetAboutHero();
  const missionQuery = useGetMissionVission();
  const foundersQuery = useGetAboutFounders();
  const aboutInfoQuery = useGetAboutInfo();
  return (
    <>
      <PageSeo
        title="About wise followup"
        description="Learn more about Wise Followup – a specialist eye clinic providing evidence-based, patient-focused ophthalmology information and care in the UK."
        canonicalPath="/about"
        ogType="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Wise Followup",
          url: "https://wisefollowup.com",
          description:
            "Specialist eye clinic providing evidence-based ophthalmology information and care in the UK.",
        }}
      />

      <ReadingProgress />

      <main>
        {/* ================= HERO ================= */}
        <FetchHandler queryResult={heroQuery} skeletonType="about-hero">
          {heroQuery.data?.is_active ? (
            <AboutHero data={heroQuery.data} />
          ) : null}
        </FetchHandler>

        {/* ================= MISSION / VISION ================= */}
        <FetchHandler
          queryResult={missionQuery}
          skeletonType="vision-mission-skeleton"
        >
          {missionQuery?.data && missionQuery.data?.cards?.length > 0 ? (
            <MissionVisionMessage data={missionQuery.data?.cards} />
          ) : null}
        </FetchHandler>

        {/* ================= FOUNDERS ================= */}
        <FetchHandler
          queryResult={foundersQuery}
          skeletonType="founder-profile"
        >
          {foundersQuery.data?.is_active ? (
            <>
              {foundersQuery.data.first && (
                <FounderProfile {...foundersQuery.data.first} />
              )}
              {foundersQuery.data.second && (
                <FounderProfile {...foundersQuery.data.second} reverse />
              )}
            </>
          ) : null}
        </FetchHandler>

        {/* ================= VALUES ================= */}
        <FetchHandler queryResult={aboutInfoQuery} skeletonType="close">
          {aboutInfoQuery.data?.is_active ? (
            <MissionValues data={aboutInfoQuery.data} />
          ) : null}
        </FetchHandler>
      </main>
    </>
  );
}

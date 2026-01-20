import Hero from "../components/hero/Hero";
import FeaturedLeafletsSection from "../components/featured-leaflets/FeaturedLeafletsSection";
import BrowseByBodySection from "../components/browse-by-body/BrowseByBodySection";
import TrustSection from "../components/trust/TrustSection";
import TestimonialsSection from "../components/testimonails/TestimonialsSection";
import BlogsHomeSection from "../components/blogs/BlogsHomeSection";
import RecentlyUpdatedSection from "../components/recent-updates/RecentlyUpdatedSection";

import FetchHandler from "@/common/api/fetchHandler/FetchHandler";
import HomePageSeo from "../components/seo/HomePageSeo";
import ReadingProgress from "@/common/reading-progress/ReadingProgress";

import useGetDepartments from "@/features/uk-hierarchy/api/useGetDepartments";
import useGetAllLeaflets from "@/features/leaflets/api/useGetAllLeaflets";
import useGetSimpleBlogs from "@/features/blogs/api/useGetSimpleBlogs";

const Home = () => {
  const featuredQuery = useGetAllLeaflets({ is_featured: true });
  const recentQuery = useGetAllLeaflets({ is_recently: true });
  const departmentQuery = useGetDepartments();
  const blogsQuery = useGetSimpleBlogs();

  return (
    <>
      <HomePageSeo />
      <ReadingProgress />

      {/* ================= HERO ================= */}
      <Hero />

      {/* ================= FEATURED ================= */}
      <FetchHandler
        queryResult={featuredQuery}
        skeletonType="featured-leaflets-section"
      >
        {featuredQuery?.data && featuredQuery.data?.length > 0 ? (
          <FeaturedLeafletsSection leaflets={featuredQuery.data} />
        ) : null}
      </FetchHandler>

      {/* ================= BROWSE BY BODY ================= */}
      <FetchHandler queryResult={departmentQuery} skeletonType="body-system">
        {departmentQuery?.data && departmentQuery.data?.length > 0 ? (
          <BrowseByBodySection systems={departmentQuery.data} />
        ) : null}
      </FetchHandler>

      {/* ================= TRUST ================= */}
      <TrustSection />

      {/* ================= RECENT UPDATES ================= */}
      <FetchHandler
        queryResult={recentQuery}
        skeletonType="featured-leaflets-section"
      >
        {recentQuery?.data && recentQuery.data?.length > 0 ? (
          <RecentlyUpdatedSection leaflets={recentQuery.data} />
        ) : null}
      </FetchHandler>

      {/* ================= BLOGS ================= */}
      <FetchHandler queryResult={blogsQuery} skeletonType="blog-card">
        {blogsQuery?.data && blogsQuery.data?.length > 0 ? (
          <BlogsHomeSection posts={blogsQuery.data} />
        ) : null}
      </FetchHandler>

      {/* ================= TESTIMONIALS ================= */}
      <TestimonialsSection />
    </>
  );
};

export default Home;

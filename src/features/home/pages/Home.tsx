import Hero from "../components/hero/Hero";
import FeaturedLeafletsSection from "../components/featured-leaflets/FeaturedLeafletsSection";
import { DUMMY_FEATURED_LEAFLETS } from "../components/featured-leaflets/dummyFeaturedLeaflets";
import BrowseByBodySection from "../components/browse-by-body/BrowseByBodySection";
import { DUMMY_BODY_SYSTEMS } from "../components/browse-by-body/dummyData";
import TrustSection from "../components/trust/TrustSection";
import { DUMMY_TRUST_PILLARS } from "../components/trust/dummyTrust";
import TestimonialsSection from "../components/testimonails/TestimonialsSection";
import { DUMMY_TESTIMONIALS } from "../components/testimonails/dummyTestimonials";
import BlogsHomeSection from "../components/blogs/BlogsHomeSection";
import { DUMMY_BLOGS } from "../components/blogs/dummyBlogs";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedLeafletsSection leaflets={DUMMY_FEATURED_LEAFLETS} />
      {/* <PopularToolsSection
        tools={DUMMY_POPULAR_TOOLS}
        isLoading={isLoadingTools}
      /> */}
      <BrowseByBodySection systems={DUMMY_BODY_SYSTEMS} />
      <TrustSection pillars={DUMMY_TRUST_PILLARS} />
      <TestimonialsSection items={DUMMY_TESTIMONIALS} />
      {/* <RecentlyUpdatedSection items={DUMMY_RECENT_UPDATES} /> */}
      <BlogsHomeSection posts={DUMMY_BLOGS} />
    </>
  );
};

export default Home;

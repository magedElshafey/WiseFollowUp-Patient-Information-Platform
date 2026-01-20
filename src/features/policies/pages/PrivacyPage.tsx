import React from "react";
import ArticleDocPage from "@/features/blogs/pages/ArticleDocPage";
import { useGetPrivacy } from "@/features/blogs/api/pages";
import PageSeo from "@/common/components/seo/PageSeo";

const PrivacyPage: React.FC = () => {
  return (
    <>
      <PageSeo
        title="Privacy Policy"
        description="Read the Privacy Policy of Wise Followup to understand how we collect, use, and protect your personal data."
        canonicalPath="/privacy-policy"
        noIndex={false}
        ogType="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Privacy Policy",
          isPartOf: {
            "@type": "WebSite",
            name: "Wise Followup",
          },
        }}
      />
      <ArticleDocPage
        useQueryHook={useGetPrivacy}
        skeletonType="article-page"
        seoType="none"
      />
    </>
  );
};

export default PrivacyPage;

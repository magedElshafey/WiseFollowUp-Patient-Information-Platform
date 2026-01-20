import React from "react";
import ArticleDocPage from "@/features/blogs/pages/ArticleDocPage";
import { useGetMedical } from "@/features/blogs/api/pages";
import PageSeo from "@/common/components/seo/PageSeo";

const MedicalPage: React.FC = () => {
  return (
    <>
      <PageSeo
        title="Medical Disclaimer"
        description="Important medical disclaimer for content published by Wise Followup. Our information does not replace professional medical advice."
        canonicalPath="/medical-disclaimer"
        ogType="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          name: "Medical Disclaimer",
          audience: {
            "@type": "Audience",
            audienceType: "Patients",
          },
        }}
      />
      <ArticleDocPage
        useQueryHook={useGetMedical}
        skeletonType="article-page"
        seoType="none"
      />
    </>
  );
};

export default MedicalPage;

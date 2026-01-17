import React from "react";
import ArticleDocPage from "@/features/blogs/pages/ArticleDocPage";
import { useGetTerms } from "@/features/blogs/api/pages";
import PageSeo from "@/common/components/seo/PageSeo";

const TermsPage: React.FC = () => {
  return (
    <>
      <PageSeo
        title="Terms of Use"
        description="Review the Terms of Use for Wise Followup website, including conditions for accessing and using our content."
        canonicalPath="/terms-of-use"
        ogType="website"
      />
      <ArticleDocPage useQueryHook={useGetTerms} skeletonType="blog" />
    </>
  );
};

export default TermsPage;

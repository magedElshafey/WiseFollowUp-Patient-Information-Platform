import React from "react";
import ArticleDocPage from "@/features/blogs/pages/ArticleDocPage";
import { useGetCookies } from "@/features/blogs/api/pages";
import PageSeo from "@/common/components/seo/PageSeo";

const CookiesPage: React.FC = () => {
  return (
    <>
      <PageSeo
        title="Cookies Policy"
        description="Learn how Wise Followup uses cookies to improve your browsing experience and comply with privacy regulations."
        canonicalPath="/cookies-policy"
        ogType="website"
      />
      <ArticleDocPage useQueryHook={useGetCookies} skeletonType="blog" />
    </>
  );
};

export default CookiesPage;

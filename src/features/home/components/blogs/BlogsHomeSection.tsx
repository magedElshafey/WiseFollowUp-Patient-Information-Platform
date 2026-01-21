import React from "react";
import SectionHeader from "@/common/components/section-header/SectionHeader";
import BlogCard from "./BlogCard";
import { Articles } from "@/features/blogs/types/blog.types";

type Props = {
  posts: Articles[];
};

const BlogsHomeSection: React.FC<Props> = ({ posts }) => {
  return (
    <section aria-labelledby="blogs-heading" className="section-shell">
      <div className="containerr">
        <SectionHeader
          title="Blog"
          titleId="blogs-heading"
          description="Practical guidance written in calm, patient-friendly language"
          hasViewAll
          path="/blogs"
        />

        <div className="grid gap-4 md:gap-6 lg:gap-8 xl:gap-10 lg:grid-cols-3 items-start">
          {posts.slice(0, 4).map((p) => (
            <BlogCard key={p.id} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsHomeSection;

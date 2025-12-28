import React from "react";
import { useParams } from "react-router-dom";
import { DUMMY_BLOGS } from "@/features/home/components/blogs/dummyBlogs";
import BlogLayout from "../components/BlogLayout";
const BlogDetailsPage: React.FC = () => {
  const { slugAndId } = useParams();

  const post = DUMMY_BLOGS.find((b) => b.slug === slugAndId);

  // basic fallback
  if (!post) {
    return (
      <main className="section-shell">
        <div className="containerr">
          <div className="card-base">
            <h1 className="text-xl font-bold text-text-main">Post not found</h1>
            <p className="text-sm text-text-muted">
              Try visiting the blogs page.
            </p>
            <a className="text-primary hover:underline" href="/blogs">
              All blogs →
            </a>
          </div>
        </div>
      </main>
    );
  }

  const toc = [
    { id: "summary", label: "Summary" },
    { id: "why-it-matters", label: "Why it matters" },
    { id: "steps", label: "Practical steps" },
    { id: "when-to-seek-help", label: "When to seek help" },
    { id: "sources", label: "Sources" },
  ];

  return (
    <BlogLayout
      title={post.title}
      meta={
        <>
          <span className="rounded-pill bg-primary-soft px-3 py-1 text-primary font-semibold">
            {post.category}
          </span>
          <span className="ml-2">
            Updated {new Date(post.updatedAt).toLocaleDateString()} •{" "}
            {post.readTime}
          </span>
        </>
      }
      toc={toc}
    >
      <section id="summary">
        <h2>Summary</h2>
        <p>{post.excerpt}</p>
      </section>

      <section id="why-it-matters">
        <h2>Why it matters</h2>
        <p>
          Patients often search while anxious. Clear structure reduces confusion
          and helps people find what they need quickly.
        </p>
      </section>

      <section id="steps">
        <h2>Practical steps</h2>
        <ol>
          <li>Start with the leaflet summary.</li>
          <li>Look for “What to expect” and “Red flags”.</li>
          <li>Write down questions for your follow-up appointment.</li>
        </ol>
      </section>

      <section id="when-to-seek-help">
        <h2>When to seek help</h2>
        <p>
          If you experience sudden severe pain, rapid vision loss, or new
          alarming symptoms, seek urgent medical care.
        </p>
      </section>

      <section id="sources">
        <h2>Sources</h2>
        <ul>
          <li>Editorial policy and review workflow (add your sources here).</li>
          <li>Clinical references relevant to the topic (links later).</li>
        </ul>
      </section>
    </BlogLayout>
  );
};

export default BlogDetailsPage;

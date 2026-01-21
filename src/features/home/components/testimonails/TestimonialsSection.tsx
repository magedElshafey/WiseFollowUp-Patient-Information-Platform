import React, { useMemo, useRef, useState } from "react";
import SectionHeader from "@/common/components/section-header/SectionHeader";
import FetchHandler from "@/common/api/fetchHandler/FetchHandler";
import useGetAllReviews from "../../api/reveiws/useGetAllReviews";
import { Link } from "react-router-dom";
import MainBtn from "@/common/components/buttons/MainBtn";
import type { Reviews } from "../../types/reviews.types";
import { useTranslation } from "react-i18next";

const INITIAL_VISIBLE_REVIEWS = 4;

const TestimonialsSection: React.FC = () => {
  const query = useGetAllReviews();
  const reviews = (query.data ?? []) as Reviews[];
  const { t } = useTranslation();

  const [showAll, setShowAll] = useState(false);
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);

  const visibleReviews = useMemo(() => {
    return showAll ? reviews : reviews.slice(0, INITIAL_VISIBLE_REVIEWS);
  }, [reviews, showAll]);

  const hasMore = reviews.length > INITIAL_VISIBLE_REVIEWS;

  const handleToggle = () => {
    setShowAll((prev) => !prev);

    // Accessibility & UX: حافظ على الفوكس
    requestAnimationFrame(() => {
      toggleBtnRef.current?.focus();
    });
  };

  return (
    <FetchHandler queryResult={query} skeletonType="testimonials">
      {reviews.length > 0 ? (
        <section
          aria-labelledby="reviews-heading"
          className="section-shell bg-bg-alt"
        >
          <div className="containerr space-y-6">
            <SectionHeader
              title="What people say"
              titleId="reviews-heading"
              description="Feedback from people who have used our platform."
              hasViewAll={false}
            />

            {/* Reviews grid */}
            <ul
              role="list"
              className="
                grid gap-4
                sm:grid-cols-2
                lg:grid-cols-3 xl:grid-cols-4
              "
            >
              {visibleReviews.map((review) => (
                <li
                  key={review.id}
                  className="
                    rounded-card
                    border border-border-subtle
                    bg-bg-surface
                    p-5
                    flex flex-col
                    gap-3
                  "
                >
                  {/* Comment */}
                  <p className="text-sm text-text-main leading-relaxed min-h-[4.5rem]">
                    “{review.comment}”
                  </p>

                  {/* Author */}
                  <div className="mt-auto text-xs text-text-muted">
                    <span className="font-medium text-text-main">
                      {review.reviewer_name}
                    </span>
                    <span aria-hidden> · </span>
                    <time dateTime={review.created_at}>
                      {new Date(review.created_at).toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "short",
                      })}
                    </time>
                  </div>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              {hasMore && (
                <button
                  ref={toggleBtnRef}
                  type="button"
                  onClick={handleToggle}
                  className="
                    self-center sm:self-auto
                    rounded-lg border border-border-subtle
                    px-5 py-2 text-xs sm:text-sm font-medium
                    transition hover:bg-bg-surface
                    focus:outline-none focus-visible:ring
                    focus-visible:ring-primary-500
                  "
                  aria-expanded={showAll}
                  aria-controls="reviews-heading"
                >
                  {showAll ? t("Show less") : t("View more")}
                </button>
              )}

              <Link to="/submit-review" className="self-center sm:self-auto">
                <MainBtn
                  variant="primary"
                  className="text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5"
                >
                  {t("Share your experience")}
                </MainBtn>
              </Link>
            </div>
          </div>
        </section>
      ) : null}
    </FetchHandler>
  );
};

export default TestimonialsSection;

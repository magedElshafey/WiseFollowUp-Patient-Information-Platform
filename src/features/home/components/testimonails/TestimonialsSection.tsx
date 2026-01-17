// import React, {
//   useCallback,
//   useMemo,
//   useEffect,
//   useId,
//   useRef,
//   useState,
// } from "react";
// import { useTranslation } from "react-i18next";
// import {
//   useKeenSlider,
//   KeenSliderInstance,
//   KeenSliderOptions,
// } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";
// import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// import SectionHeader from "@/common/components/section-header/SectionHeader";
// import FetchHandler from "@/common/api/fetchHandler/FetchHandler";
// import useGetAllReviews from "../../api/reveiws/useGetAllReviews";
// import { useLanguage } from "@/store/LanguageProvider";
// import TestimonialCard from "./TestimonialCard";
// import { Link } from "react-router-dom";
// import MainBtn from "@/common/components/buttons/MainBtn";

// /* -------------------------------------------------------------------------- */
// /*                                   Config                                   */
// /* -------------------------------------------------------------------------- */

// const SLIDE_SPACING = 16;
// const AUTOPLAY_DELAY = 4000;

// const BREAKPOINTS: KeenSliderOptions["breakpoints"] = {
//   "(min-width: 1280px)": { slides: { perView: 4, spacing: SLIDE_SPACING } },
//   "(max-width: 1279px)": { slides: { perView: 3, spacing: SLIDE_SPACING } },
//   "(max-width: 1024px)": { slides: { perView: 2, spacing: SLIDE_SPACING } },
//   "(max-width: 640px)": { slides: { perView: 1, spacing: 12 } },
// };

// const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

// /* -------------------------------------------------------------------------- */
// /*                               Helper Hooks                                 */
// /* -------------------------------------------------------------------------- */

// function usePageVisibility() {
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const handler = () => setVisible(!document.hidden);
//     document.addEventListener("visibilitychange", handler);
//     return () => document.removeEventListener("visibilitychange", handler);
//   }, []);

//   return visible;
// }

// /* -------------------------------------------------------------------------- */
// /*                              Component                                     */
// /* -------------------------------------------------------------------------- */

// const TestimonialsSection: React.FC = () => {
//   const { t, i18n } = useTranslation();
//   const { language } = useLanguage();
//   const isRTL = language === "ar" || i18n.dir() === "rtl";

//   const shouldReduceMotion = useReducedMotion();
//   const pageVisible = usePageVisibility();

//   const sectionId = useId();
//   const autoplayRef = useRef<number | null>(null);

//   const query = useGetAllReviews();
//   const reviews = useMemo(() => query.data ?? [], [query.data]);
//   const total = reviews.length;

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [loaded, setLoaded] = useState(false);

//   /* --------------------------- Autoplay helpers --------------------------- */

//   const clearAutoplay = useCallback(() => {
//     if (autoplayRef.current) {
//       window.clearInterval(autoplayRef.current);
//       autoplayRef.current = null;
//     }
//   }, []);

//   const startAutoplay = useCallback(
//     (slider?: KeenSliderInstance | null) => {
//       if (!slider || !loaded || !pageVisible || shouldReduceMotion) return;

//       clearAutoplay();
//       autoplayRef.current = window.setInterval(
//         () => slider.next(),
//         AUTOPLAY_DELAY
//       );
//     },
//     [clearAutoplay, loaded, pageVisible, shouldReduceMotion]
//   );

//   /* --------------------------- Keen Config --------------------------- */

//   const sliderOptions = useMemo<KeenSliderOptions>(
//     () => ({
//       rtl: isRTL,
//       loop: true,
//       mode: "snap",
//       renderMode: "performance",
//       slides: {
//         perView: 4,
//         spacing: SLIDE_SPACING,
//       },
//       breakpoints: BREAKPOINTS,
//       created(slider) {
//         setLoaded(true);
//         setCurrentSlide(slider.track.details.rel);
//         startAutoplay(slider);
//       },
//       slideChanged(slider) {
//         setCurrentSlide(slider.track.details.rel);
//       },
//     }),
//     [isRTL, startAutoplay]
//   );

//   const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(sliderOptions);

//   /* --------------------------- Navigation --------------------------- */

//   const prev = () => instanceRef.current?.prev();
//   const next = () => instanceRef.current?.next();

//   /* -------------------------------------------------------------------------- */

//   return (
//     <FetchHandler queryResult={query} skeletonType="slider">
//       {total > 0 && (
//         <LazyMotion features={domAnimation}>
//           <m.section
//             className="section-shell"
//             initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.35, ease: EASE_OUT }}
//             aria-labelledby="testimonials-heading"
//           >
//             <div className="containerr space-y-6">
//               <SectionHeader
//                 title="Testimonials"
//                 titleId="testimonials-heading"
//                 description="Reassurance from patients and clinicians"
//                 hasViewAll={false}
//               />
//               <p className="sr-only" aria-live="polite">
//                 Slide {currentSlide + 1} of {total}
//               </p>

//               {/* Controls */}
//               <div className="hidden sm:flex gap-2 justify-end">
//                 <button
//                   aria-label={t("Previous")}
//                   onClick={prev}
//                   className="control-btn"
//                   aria-controls={`${sectionId}-slider`}
//                 >
//                   {isRTL ? <ChevronRight /> : <ChevronLeft />}
//                 </button>
//                 <button
//                   aria-label={t("Next")}
//                   onClick={next}
//                   className="control-btn"
//                   aria-controls={`${sectionId}-slider`}
//                 >
//                   {isRTL ? <ChevronLeft /> : <ChevronRight />}
//                 </button>
//               </div>

//               {/* Slider */}
//               <div
//                 id={`${sectionId}-slider`}
//                 ref={sliderRef}
//                 dir={isRTL ? "rtl" : "ltr"}
//                 className="keen-slider items-stretch"
//                 onMouseEnter={clearAutoplay}
//                 onMouseLeave={() => startAutoplay(instanceRef.current)}
//               >
//                 {reviews.map((item, i) => (
//                   <div
//                     key={item.id ?? i}
//                     className="keen-slider__slide flex h-auto"
//                     role="group"
//                     aria-roledescription="slide"
//                     aria-label={`Slide ${currentSlide + 1} of ${total}`}
//                   >
//                     <TestimonialCard item={item} />
//                   </div>
//                 ))}
//               </div>
//               <div className="w-full flex justify-center md:justify-end mt-4">
//                 <Link to="/submit-review">
//                   <MainBtn
//                     variant="primary"
//                     className="text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5"
//                   >
//                     {t("submit review")}
//                   </MainBtn>
//                 </Link>
//               </div>
//             </div>
//           </m.section>
//         </LazyMotion>
//       )}
//     </FetchHandler>
//   );
// };

// export default TestimonialsSection;
import React from "react";
import SectionHeader from "@/common/components/section-header/SectionHeader";
import FetchHandler from "@/common/api/fetchHandler/FetchHandler";
import useGetAllReviews from "../../api/reveiws/useGetAllReviews";
import { Link } from "react-router-dom";
import MainBtn from "@/common/components/buttons/MainBtn";
import type { Reviews } from "../../types/reviews.types";

const MAX_REVIEWS = 4;

const TestimonialsSection: React.FC = () => {
  const query = useGetAllReviews();
  const reviews = (query.data ?? []) as Reviews[];

  return (
    <FetchHandler queryResult={query} skeletonType="card">
      {reviews.length > 0 && (
        <section
          aria-labelledby="reviews-heading"
          className="section-shell bg-bg-alt"
        >
          <div className="containerr space-y-6">
            <SectionHeader
              title="What people say"
              titleId="reviews-heading"
              description="Feedback from people who have used our patient leaflets."
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
              {reviews.slice(0, MAX_REVIEWS).map((review) => (
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
                  {/* Rating */}
                  <div
                    className="flex items-center gap-1 text-xs text-text-muted"
                    aria-label={`Rating ${review.rating} out of 5`}
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        aria-hidden
                        className={
                          i < review.rating
                            ? "text-primary"
                            : "text-border-subtle"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-sm text-text-main leading-relaxed">
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

            {/* CTA */}
            <div className="flex justify-center md:justify-end">
              <Link to="/submit-review">
                <MainBtn
                  variant="primary"
                  className="text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5"
                >
                  Share your experience
                </MainBtn>
              </Link>
            </div>
          </div>
        </section>
      )}
    </FetchHandler>
  );
};

export default TestimonialsSection;

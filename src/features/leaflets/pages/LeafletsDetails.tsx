import { FC, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import FetchHandler from "@/common/api/fetchHandler/FetchHandler";
import useGetLeafletsDetails from "../api/useGetLeafletsDetails";
import { formatDate } from "@/utils/formatDate";
import PageSeo from "@/common/components/seo/PageSeo";
import LeafletShareActions from "../components/LeafletShareActions";
import ReadingProgress from "@/common/reading-progress/ReadingProgress";
import { HiExclamationTriangle } from "react-icons/hi2";
import { useTranslation } from "react-i18next";
import FeaturedLeafletCard from "@/features/home/components/featured-leaflets/FeaturedLeafletCard";
import BlogCardFeed from "@/features/home/components/blogs/BlogCard";
import useGetLeafletsDiscilimar from "../api/useGetLeafletsDiscilimar";
import useReportLeaflet from "../api/useReportLeaflet";
import handlePromisError from "@/utils/handlePromiseError";
import ReportSuccessModal from "../components/ReportSuccessModal";
/* -------------------------------------------------------------------------- */
/*                                   Page                                     */
/* -------------------------------------------------------------------------- */

const LeafletDetailsPage: FC = () => {
  const [showReportModal, setShowReportModal] = useState(false);

  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const queryResult = useGetLeafletsDetails({ slug: slug || "" });
  const { data } = useGetLeafletsDiscilimar();
  const { isPending, mutateAsync } = useReportLeaflet();
  const leaflet = queryResult.data;
  const pdfUrl = useMemo(() => leaflet?.pdf_url, [leaflet]);

  /* ------------------------------- SEO JSON-LD ------------------------------ */

  const structuredData = leaflet
    ? {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        name: leaflet.title,
        description: leaflet.short_description,
        datePublished: leaflet.publication_date,
        dateModified: leaflet.reviewed_at || leaflet.updated_at,
        publisher: {
          "@type": "Organization",
          name: leaflet.organization?.name,
        },
      }
    : undefined;
  const handleReportClick = async () => {
    try {
      const response = await mutateAsync(slug || "");
      if (response?.status) {
        setShowReportModal(true);
      }
    } catch (error) {
      handlePromisError(error);
    }
  };
  return (
    <>
      {leaflet && (
        <PageSeo
          title={leaflet.title}
          description={leaflet.short_description}
          canonicalPath={`/leaflets/${leaflet.slug}`}
          ogType="article"
          publishedTime={leaflet.publication_date}
          structuredData={structuredData}
        />
      )}

      <FetchHandler queryResult={queryResult} skeletonType="page">
        {leaflet && (
          <>
            <ReadingProgress />
            {/* ================= Medical Header ================= */}
            <header className="border-b bg-bg-page border-border-subtle">
              <div className="py-8 space-y-2 containerr">
                <h1 className="text-xl font-bold md:text-2xl lg:text-3xl text-text-main">
                  {leaflet.title}
                </h1>

                <p className="text-sm text-text-muted">
                  {leaflet.organization?.name}
                  {leaflet.department?.name && (
                    <>
                      <span aria-hidden> · </span>
                      {leaflet.department.name}
                    </>
                  )}
                </p>

                <p className="text-xs text-text-muted">
                  Clinically reviewed · Written in plain language
                </p>
              </div>
            </header>

            {/* ================= Content ================= */}
            <main className="py-8 containerr">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-card-gap">
                {/* ================= Main ================= */}
                <section
                  className="space-y-6 lg:col-span-3"
                  aria-labelledby="leaflet-content-heading"
                >
                  <h2 id="leaflet-content-heading" className="sr-only">
                    Leaflet content
                  </h2>

                  {/* At a glance */}
                  <section
                    className="p-5 border rounded-card border-border-subtle bg-bg-surface"
                    aria-label="Leaflet summary"
                  >
                    <h3 className="mb-2 text-sm font-semibold text-text-main">
                      {t("At a glance")}
                    </h3>

                    <p className="text-sm leading-relaxed text-text-muted">
                      {leaflet.short_description ||
                        t(
                          "This leaflet provides patient information reviewed by healthcare professionals.",
                        )}
                    </p>
                  </section>

                  {/* PDF */}
                  <section
                    className="overflow-hidden rounded-card bg-bg-surface shadow-soft"
                    aria-label="Patient leaflet document"
                  >
                    {!pdfUrl ? (
                      <EmptyPdfState />
                    ) : (
                      <>
                        {/* Desktop */}
                        <iframe
                          src={pdfUrl}
                          title={leaflet.title}
                          loading="lazy"
                          className="hidden lg:block h-[85vh] w-full"
                        />

                        {/* Mobile */}
                        <div className="block p-6 text-center lg:hidden">
                          <p className="mb-3 text-sm text-text-muted">
                            {t("This leaflet is available as a PDF.")}
                          </p>

                          <a
                            href={pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white rounded-pill bg-primary"
                          >
                            {t("Open PDF")}
                          </a>
                        </div>
                      </>
                    )}
                  </section>
                  {data && data?.is_active && (
                    <section
                      role="note"
                      aria-labelledby="medical-disclaimer-title"
                      className="p-5 border rounded-card border-border-subtle bg-bg-surface shadow-soft"
                    >
                      <div className="flex items-start gap-3">
                        {/* Icon */}
                        <span
                          aria-hidden="true"
                          className="
            mt-0.5
            inline-flex h-8 w-8 flex-shrink-0
            items-center justify-center
            rounded-full
            bg-primary-soft
            text-primary
          "
                        >
                          <HiExclamationTriangle size={18} />
                        </span>

                        {/* Content */}
                        <div className="space-y-2">
                          <h3
                            id="medical-disclaimer-title"
                            className="text-sm font-semibold text-text-main"
                          >
                            {data?.heading}
                          </h3>

                          <p className="text-sm leading-relaxed text-text-muted">
                            {data?.description.join("\n")}
                          </p>
                          {data?.details?.length > 0 && (
                            <ul className="pl-5 space-y-1 text-sm list-disc text-text-muted">
                              {data?.details?.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </section>
                  )}

                  {/* Related blogs */}
                  {leaflet?.related_leaflets &&
                    leaflet.related_leaflets.length > 0 && (
                      <section aria-labelledby="related-leaflets-heading">
                        <h3
                          id="related-leaflets-heading"
                          className="mb-3 text-sm font-semibold text-text-main"
                        >
                          {t("Related leaflets")}
                        </h3>

                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                          {leaflet.related_leaflets.slice(0, 3).map((item) => (
                            <FeaturedLeafletCard leaflet={item} />
                          ))}
                        </div>
                      </section>
                    )}
                  {/* Related leaflets */}
                  {leaflet?.related_blogs &&
                    leaflet.related_blogs.length > 0 && (
                      <section
                        className="mt4 md:mt-5 lg:mt-6 xl:mt-7"
                        aria-labelledby="related-leaflets-heading"
                      >
                        <h3
                          id="related-leaflets-heading"
                          className="mb-3 text-sm font-semibold text-text-main"
                        >
                          {t("Related blogs")}
                        </h3>

                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                          {leaflet.related_blogs.slice(0, 3).map((item) => (
                            <BlogCardFeed post={item} />
                          ))}
                        </div>
                      </section>
                    )}
                </section>

                {/* ================= Sidebar ================= */}
                <aside
                  className="p-5 space-y-4 rounded-card bg-bg-surface shadow-soft"
                  aria-label="Clinical information"
                >
                  <MetaItem
                    label="Last reviewed"
                    value={
                      leaflet?.reviewed_at
                        ? formatDate(leaflet.reviewed_at)
                        : "NA"
                    }
                  />

                  <MetaItem
                    label="Next review"
                    value={
                      leaflet?.next_review_date
                        ? formatDate(leaflet.next_review_date)
                        : "NA"
                    }
                  />

                  <MetaItem
                    label="Publication date"
                    value={
                      leaflet?.publication_date
                        ? formatDate(leaflet.publication_date)
                        : "NA"
                    }
                  />

                  <MetaItem label="Version" value={leaflet.version} />
                  <MetaItem label="document type" value={leaflet.type} />
                  <MetaItem
                    label="organization"
                    value={leaflet.organization?.name}
                  />
                  <MetaItem
                    label="organization source"
                    value={leaflet?.original_source_url}
                    isLink={true}
                  />
                  <MetaItem
                    label="department"
                    value={leaflet?.department?.name}
                  />
                  <MetaItem label="trust id" value={leaflet?.trust_docs_id} />
                  {leaflet?.reviewed_by && (
                    <MetaItem
                      label="reviewed by"
                      value={leaflet?.reviewed_by}
                    />
                  )}
                  {leaflet?.read_time_minutes && (
                    <MetaItem
                      label="reading time"
                      value={`${leaflet?.read_time_minutes} ${t("minutes")}`}
                    />
                  )}
                  {pdfUrl && (
                    <>
                      <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-4 py-2 mt-2 text-sm font-medium text-white rounded-pill bg-primary"
                      >
                        {t("Open PDF in new tab")}
                      </a>
                      <LeafletShareActions title={leaflet.title} />
                      <button
                        onClick={() => window.print()}
                        className="w-full text-xs underline text-primary"
                      >
                        {t("Print this page")}
                      </button>
                      <button
                        onClick={handleReportClick}
                        disabled={isPending}
                        className="flex items-center justify-center w-full px-4 py-2 text-white transition-opacity duration-300 bg-red-700 hover:bg-red-700/85 disabled:cursor-not-allowed disabled:bg-red-700/85 rounded-pill"
                      >
                        {t("report an issue")}
                      </button>
                      <span className=" text-text-muted">
                        {t("something isn't right ?")}
                      </span>
                    </>
                  )}
                </aside>
              </div>
            </main>
            <ReportSuccessModal
              open={showReportModal}
              onClose={() => setShowReportModal(false)}
            />
          </>
        )}
      </FetchHandler>
    </>
  );
};

export default LeafletDetailsPage;

/* -------------------------------------------------------------------------- */
/*                                   Helpers                                  */
/* -------------------------------------------------------------------------- */

const EmptyPdfState = () => {
  const { t } = useTranslation();
  return (
    <div className="flex h-[50vh] items-center justify-center text-center p-6">
      <div>
        <p className="text-sm font-medium text-text-main">
          {t("PDF not available")}
        </p>
        <p className="mt-1 text-xs text-text-muted">
          {t("This leaflet does not currently have a PDF version.")}
        </p>
      </div>
    </div>
  );
};

type MetaValue = string | number | undefined | null;

type MetaItemProps = {
  label: string;
  value?: MetaValue;
  isLink?: boolean;
};

const MetaItem: FC<MetaItemProps> = ({ label, value, isLink = false }) => {
  const { t } = useTranslation();
  if (!value) return null;

  return (
    <div>
      <p className="text-[11px] uppercase tracking-wide text-text-muted">
        {t(label)}
      </p>

      {isLink && typeof value === "string" ? (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-medium break-all text-primary underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface"
        >
          {t("Visit source")}
        </a>
      ) : (
        <p className="text-sm font-medium break-words text-text-main">
          {value}
        </p>
      )}
    </div>
  );
};

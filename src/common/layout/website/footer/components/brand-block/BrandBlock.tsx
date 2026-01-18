import Logo from "@/common/components/logo/Logo";

const BrandBlock: React.FC = () => {
  return (
    <section
      aria-label="About Wise Follow Up"
      className="
        rounded-card border border-border-subtle bg-bg-page
        p-4 sm:p-5
        flex flex-col gap-2
      "
    >
      <Logo src="/images/footer-logo.png" />
      <p className="text-xs md:text-sm text-text-muted leading-relaxed ">
        A patient-friendly library of UK-oriented leaflets, tools, and
        checklists – written in plain language to help you prepare for
        appointments and follow up safely.
      </p>

      <div
        className="
          grid gap-3 sm:grid-cols-[minmax(0,1.3fr)_minmax(0,1.1fr)]
          text-xs 
        "
      >
        <div className="space-y-1">
          <p className="font-medium text-text-main">Not an emergency service</p>
          <p className="text-text-muted leading-relaxed">
            If you think it is an emergency, call{" "}
            <span className="font-semibold">999</span> or go to{" "}
            <span className="font-semibold">A&amp;E</span>. For urgent but
            non-emergency help, contact{" "}
            <span className="font-semibold">NHS 111</span>.
          </p>
        </div>

        <div className="space-y-1">
          <p className="font-medium text-text-main">For clinicians</p>
          <p className="text-text-muted leading-relaxed">
            Use our leaflets to support consultations, not replace them. Always
            document advice given and share local contact details with your
            patients.
          </p>
        </div>
      </div>
    </section>
  );
};
export default BrandBlock;

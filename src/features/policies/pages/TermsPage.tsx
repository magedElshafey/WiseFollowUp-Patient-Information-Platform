import React from "react";
import PolicyLayout from "../components/PolicyLayout";
import PolicySection from "../components/PolicySection";

const TermsPage: React.FC = () => {
  const toc = [
    { id: "medical-disclaimer", label: "Medical disclaimer" },
    { id: "use-of-content", label: "Use of content" },
    { id: "tools-limitations", label: "Tools & calculators limitations" },
    { id: "liability", label: "Liability" },
    { id: "links", label: "External links" },
    { id: "changes", label: "Changes to these terms" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <PolicyLayout
      title="Terms of Use"
      updatedAt="December 12, 2025"
      intro="These terms apply to your use of Wise Follow Up. By using this website, you agree to these terms."
      toc={toc}
    >
      <PolicySection id="medical-disclaimer" title="Medical disclaimer">
        <p className="font-medium text-text-main">
          This website does not provide medical diagnosis or emergency advice.
        </p>
        <p>
          Content is for general education to support conversations with your
          own doctor/optometrist/healthcare team. If you think it is an
          emergency, call 999 or go to A&E. For urgent non-emergency help,
          contact NHS 111.
        </p>
      </PolicySection>

      <PolicySection id="use-of-content" title="Use of content">
        <ul className="list-disc pl-5 space-y-2">
          <li>You may read and share links to our pages.</li>
          <li>
            You may not copy and republish content as your own without
            permission.
          </li>
          <li>
            Do not misuse the site (e.g., attempt to disrupt service or
            security).
          </li>
        </ul>
      </PolicySection>

      <PolicySection
        id="tools-limitations"
        title="Tools & calculators limitations"
      >
        <p>
          Tools and calculators may provide estimates and should not be used as
          the sole basis for clinical decisions or self-management. Always
          follow advice given in clinic if it differs from what you see here.
        </p>
      </PolicySection>

      <PolicySection id="liability" title="Liability">
        <p>
          We work to keep the website accurate and available, but we cannot
          guarantee it will always be error-free or uninterrupted. Use the
          information at your own risk and consult your healthcare professional
          for personal advice.
        </p>
      </PolicySection>

      <PolicySection id="links" title="External links">
        <p>
          We may link to external websites for further reading. We do not
          control their content or privacy practices.
        </p>
      </PolicySection>

      <PolicySection id="changes" title="Changes to these terms">
        <p>
          We may update these terms from time to time. The “Last updated” date
          at the top shows when changes were made.
        </p>
      </PolicySection>

      <PolicySection id="contact" title="Contact">
        <p>
          For questions about these terms, please use the contact details listed
          on our website.
        </p>
      </PolicySection>
    </PolicyLayout>
  );
};

export default TermsPage;

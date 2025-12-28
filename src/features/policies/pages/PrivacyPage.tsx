import React from "react";
import PolicyLayout from "../components/PolicyLayout";
import PolicySection from "../components/PolicySection";
const PrivacyPage: React.FC = () => {
  const toc = [
    { id: "who-we-are", label: "Who we are" },
    { id: "what-we-collect", label: "What we collect" },
    { id: "how-we-use", label: "How we use your information" },
    { id: "legal-basis", label: "Legal basis (UK GDPR)" },
    { id: "sharing", label: "Sharing & processors" },
    { id: "security", label: "Security" },
    { id: "retention", label: "Retention" },
    { id: "your-rights", label: "Your rights" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <PolicyLayout
      title="Privacy Policy"
      updatedAt="December 12, 2025"
      intro="Wise Follow Up is an educational website providing patient leaflets and healthcare tools. This policy explains how we handle information when you use our website."
      toc={toc}
    >
      <PolicySection id="who-we-are" title="Who we are">
        <p>
          “Wise Follow Up” is a patient-focused educational website. If we
          provide a contact email or address on the website, that is the place
          to reach the site owner/controller.
        </p>
      </PolicySection>

      <PolicySection id="what-we-collect" title="What we collect">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-medium text-text-main">Usage data:</span>{" "}
            pages visited, approximate device/browser info, and performance
            logs.
          </li>
          <li>
            <span className="font-medium text-text-main">Search queries:</span>{" "}
            terms you type into site search (used to improve relevance and UX).
          </li>
          <li>
            <span className="font-medium text-text-main">
              Newsletter email:
            </span>{" "}
            only if you choose to subscribe.
          </li>
          <li>
            <span className="font-medium text-text-main">
              No clinical record:
            </span>{" "}
            we do not ask for your NHS number, diagnosis confirmation, or
            medical history as a requirement to read leaflets.
          </li>
        </ul>
      </PolicySection>

      <PolicySection id="how-we-use" title="How we use your information">
        <ul className="list-disc pl-5 space-y-2">
          <li>To deliver the website reliably and securely.</li>
          <li>
            To improve content discoverability (search relevance, navigation).
          </li>
          <li>To respond to messages you send us (if you contact us).</li>
          <li>
            To send newsletters only when you opt-in (and you can unsubscribe).
          </li>
        </ul>
      </PolicySection>

      <PolicySection id="legal-basis" title="Legal basis (UK GDPR)">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-medium text-text-main">
              Legitimate interests
            </span>{" "}
            for site security and analytics.
          </li>
          <li>
            <span className="font-medium text-text-main">Consent</span> for
            newsletter marketing and non-essential cookies.
          </li>
          <li>
            <span className="font-medium text-text-main">Contract</span> only if
            you explicitly request a service that requires it (rare for this
            site).
          </li>
        </ul>
      </PolicySection>

      <PolicySection id="sharing" title="Sharing & processors">
        <p>
          We may use trusted service providers (e.g., hosting, email delivery,
          analytics) that process data on our behalf. We do not sell personal
          data.
        </p>
      </PolicySection>

      <PolicySection id="security" title="Security">
        <p>
          We use standard security practices (TLS/HTTPS, access controls,
          monitoring). No method is 100% secure, but we work to protect
          information and limit collection to what’s necessary.
        </p>
      </PolicySection>

      <PolicySection id="retention" title="Retention">
        <p>
          We keep personal data only as long as needed for the purposes
          described above. Newsletter subscription data is kept until you
          unsubscribe.
        </p>
      </PolicySection>

      <PolicySection id="your-rights" title="Your rights">
        <p>
          You may have rights to access, correct, delete, or restrict processing
          of your data, and to withdraw consent (e.g., newsletter).
        </p>
      </PolicySection>

      <PolicySection id="contact" title="Contact">
        <p>
          For privacy questions, use the contact details listed on our website.
          If you believe we have handled data improperly, you may contact the UK
          Information Commissioner’s Office (ICO).
        </p>
      </PolicySection>
    </PolicyLayout>
  );
};

export default PrivacyPage;

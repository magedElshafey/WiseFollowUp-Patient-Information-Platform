import React from "react";
import PolicyLayout from "../components/PolicyLayout";
import PolicySection from "../components/PolicySection";

const CookiesPage: React.FC = () => {
  const toc = [
    { id: "what-are-cookies", label: "What are cookies?" },
    { id: "types", label: "Types we use" },
    { id: "manage", label: "Manage your preferences" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <PolicyLayout
      title="Cookies Policy"
      updatedAt="December 12, 2025"
      intro="Cookies are small files stored on your device. We use them to help the site work and to understand how we can improve the experience."
      toc={toc}
    >
      <PolicySection id="what-are-cookies" title="What are cookies?">
        <p>
          Cookies and similar technologies help websites remember preferences
          and measure usage to improve performance and user experience.
        </p>
      </PolicySection>

      <PolicySection id="types" title="Types we use">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-medium text-text-main">Essential</span>:
            required for the website to function.
          </li>
          <li>
            <span className="font-medium text-text-main">
              Analytics (optional)
            </span>
            : helps us understand usage patterns and improve navigation/search.
          </li>
          <li>
            <span className="font-medium text-text-main">Preference</span>:
            remembers basic choices (e.g., language) where applicable.
          </li>
        </ul>
      </PolicySection>

      <PolicySection id="manage" title="Manage your preferences">
        <p>
          You can manage cookies using your browser settings. If we add an
          on-site cookie banner, you can also change your preferences there.
        </p>
      </PolicySection>

      <PolicySection id="contact" title="Contact">
        <p>
          For cookie questions, please use the contact details listed on our
          website.
        </p>
      </PolicySection>
    </PolicyLayout>
  );
};

export default CookiesPage;

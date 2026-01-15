import { createRoot } from "react-dom/client";
import "./style/index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./lib/tanstack-react-query/queryClient";
import { RouterProvider } from "react-router-dom";
import LanguageProvider from "./store/LanguageProvider";
import { Toaster } from "sonner";
import { router } from "./routes/index";
import { CookieConsentProvider } from "./features/cookies/CookieConsentProvider";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import SeoProvider from "./common/components/seo/SeoProvider";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

createRoot(document.getElementById("root")!).render(
  <SeoProvider>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <CookieConsentProvider>
          <Toaster
            position="top-center"
            richColors
            closeButton
            duration={3000}
          />
          <RouterProvider router={router} />
        </CookieConsentProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </SeoProvider>
);

import ScrollToTopButton from "./scroll-to-top/ScrollToTopButton";
import StickyNavbar from "./sticky-navbar/StickyNavbar";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import CookieBanner from "@/features/cookies/CookieBanner";
import IntroMotion from "../intro-motion/IntroMotion";
import { WebsiteSettingsProvider } from "@/store/WebsiteSettingsProvider";
const WebsiteLayout = () => {
  return (
    <WebsiteSettingsProvider>
      <div className="flex flex-col min-h-screen overflow-x-hidden mt-[60px]">
        <IntroMotion />
        <ScrollToTopButton />

        <StickyNavbar />

        <main className="grow py-2 flex flex-col">
          <Outlet />
        </main>

        <Footer />
        <CookieBanner />
      </div>
    </WebsiteSettingsProvider>
  );
};

export default WebsiteLayout;

import ScrollToTopButton from "./scroll-to-top/ScrollToTopButton";
import StickyNavbar from "./sticky-navbar/StickyNavbar";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import CookieBanner from "@/features/cookies/CookieBanner";
import IntroMotion from "../intro-motion/IntroMotion";

const WebsiteLayout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden mt-[60px]">
      <IntroMotion />
      <ScrollToTopButton />

      <StickyNavbar logo="/images/main-logo.png" />

      <main className="grow py-2 flex flex-col">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default WebsiteLayout;

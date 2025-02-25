import Footer1 from "@/components/footers/Footer1";
import Footer7 from "@/components/footers/Footer7";
import Cta2 from "@/components/homes/home-8/Cta";

import Header2 from "@/components/headers/Header2";
import SearchPopup from "@/components/headers/component/SearchPopup";
import About from "@/components/homes/home-1/About";
import Blogs from "@/components/homes/common/Blogs";
import Faq from "@/components/homes/home-1/Faq";

import Cta from "@/components/homes/home-3/Cta";

// import Hero from "@/components/homes/home-1/Hero";
import Hero from "@/components/homes/home-6/Hero";
import Steps from "@/components/homes/home-5/Steps";

import Portfolio from "@/components/homes/home-1/Portfolio";
import Features from "@/components/about/Features";
import Projects3 from "@/components/portfolio/Projects3";
import MarqueeComponent from "@/components/common/Marquee";

import Team from "@/components/homes/common/Team";
import Testimonials from "@/components/homes/common/Testimonials";
export const metadata = {
  title: "Morphe Studio | Creative web design",
};
export default function HomePage1() {
  return (
    <>
      <SearchPopup />
      <Header2 />
      <Hero />
      <Features />
      <Steps />
      <Faq />
      <MarqueeComponent />
      <Projects3 />
      {/* <Portfolio /> */}
      {/* <Team /> */}
      {/* <Testimonials /> */}
      {/* <Blogs /> */}
      <Cta />
      <Cta2 />
      <Footer7 />
    </>
  );
}

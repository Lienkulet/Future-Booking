import HeroSection from "@/components/sections/HeroSection";
import FeaturedStays from "@/components/sections/FeaturedStays";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Destinations from "@/components/sections/Destinations";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <FeaturedStays />
        <HowItWorks />
        <WhyChooseUs />
        <Destinations />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

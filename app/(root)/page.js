import TourGuide from "../components/layouts/tourGuide/TourGuide";
import Banner from "../components/layouts/banner/Banner";
import withAuth from "../components/hoc/WithAuth";
import HeroSction from "../components/hero/HeroSection";
import ServicesSection from "../components/service/ServiceSection";
import FeaturedPackages from "../components/features/FeaturePackageSection";
import ExploreDestinations from "../components/exploredestinations/ExploreDestinations";
import HotelsRoom from "../components/hotelsRoom/HotelsRoom";
import TestimonialsAndReviews from "../components/TestimonialsAndReviews/TestimonialsAndReviews";
import CallToActionSection from "../components/CallToActionSection/CallToActionSection";
import TourGuideHighlights from "../components/tourguide/TourGuideHighlights";
export default function Home() {
  return (
    <div className="">
      <HeroSction />
      <ServicesSection />
      <FeaturedPackages />
      <ExploreDestinations />
      <TourGuideHighlights />
      <HotelsRoom />
      <TestimonialsAndReviews />
      <CallToActionSection />
    </div>
  );
}

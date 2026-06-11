import HeroSection from "@/components/home-components/HeroSection";
import PurposeSection from "@/components/home-components/PurposeSection";
import HrTimesHero from "@/components/community-components/HrTimesHero";
import ImpactSection from "@/components/about-components/ImpactSection";

export default function Home() {
  return (
    <div className="pt-15">
        <HeroSection />
        <PurposeSection />
        <HrTimesHero />
        <ImpactSection />
    </div>
  );
}
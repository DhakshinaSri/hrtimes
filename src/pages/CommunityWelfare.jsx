import WhyHrTimesSection from "@/components/community-components/WhyHrTimesSection";
import WhatHrTimesCovers from "@/components/community-components/WhatHrTimesCovers";
import IndustryExpertsSection from "@/components/community-components/IndustryExpertsSection";

export default function CommunityWelfare() {
  return (
    <div className="pt-16">
      <WhyHrTimesSection />
      <WhatHrTimesCovers />
      <IndustryExpertsSection />
    </div>
  );
}
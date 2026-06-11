import Vision from "@/components/about-components/Vision";
import Mission from "@/components/about-components/Mission";
import Empower from "@/components/about-components/Empower";
import ImpactSection from "@/components/about-components/ImpactSection";

export default function About() {
  return (
    <div className="pt-16">
        <Vision />
        <Mission />
        <Empower />
        <ImpactSection />
    </div>
  );
}
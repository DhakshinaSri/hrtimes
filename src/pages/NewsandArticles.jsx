import CommitmentSection from "@/components/articles-components/CommitmentSection";
import ContentPolicySection from "@/components/articles-components/ContentPolicySection";
import CoreObjectiveSection from "@/components/articles-components/CoreObjectiveSection";

export default function NewsandArticles() {
  return (
    <div className="pt-16">
      <CommitmentSection />
      <ContentPolicySection />
      <CoreObjectiveSection />
    </div>
  );
}
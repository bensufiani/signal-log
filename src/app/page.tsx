import { MarketingLayout } from "@/components/marketing/marketing-layout"
import { HeroSection } from "@/components/marketing/hero-section"
import { ProblemSection } from "@/components/marketing/problem-section"
import { SolutionSection } from "@/components/marketing/solution-section"
import { CTASection } from "@/components/marketing/cta-section"

export default function Home() {
  return (
    <MarketingLayout>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <CTASection />
    </MarketingLayout>
  )
}

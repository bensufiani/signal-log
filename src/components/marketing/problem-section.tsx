"use client"

import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/ui/magic-ui"
import { RainbowButton } from "@/components/ui/rainbow-button"

export function ProblemSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="problem" className="py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Problem Every Founder Knows
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Indie SaaS founders validating product experiments struggle because their ideas, notes, 
              and progress updates are scattered across tools and moments, slowing validation and 
              hiding product-market fit signals.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-lg font-semibold mb-3 text-primary">
                  Scattered Ideas
                </h3>
                <p className="text-sm text-muted-foreground">
                  Notes spread across multiple tools, making it impossible to see the big picture 
                  or track progress effectively.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="text-lg font-semibold mb-3 text-primary">
                  Wasted Time
                </h3>
                <p className="text-sm text-muted-foreground">
                  Energy spent on organization instead of learning and building, 
                  delaying your path to predictable revenue.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold mb-3 text-primary">
                  Lost Momentum
                </h3>
                <p className="text-sm text-muted-foreground">
                  Ideas get stuck in fragmented notes and unfinished drafts, 
                  causing founders to lose momentum on critical experiments.
                </p>
              </CardContent>
            </Card>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="text-center">
            <RainbowButton 
              onClick={() => scrollToSection("solution")}
              className="text-lg px-8 py-4"
            >
              See Our Solution →
            </RainbowButton>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

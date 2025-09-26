"use client"

import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/ui/magic-ui"
import { RainbowButton } from "@/components/ui/rainbow-button"

export function SolutionSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="solution" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your AI Project Journal
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              An AI-assisted workspace designed to act like a collaborative companion for founders. 
              Instead of scattered notes, turn ideas into evolving narratives that track progression over time.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">💬</div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    Natural Capture
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Through chat-based collaboration, automatic summaries, and simple capture methods 
                  like voice-to-text, founders can offload mental overhead while the system keeps 
                  ideas structured.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">📊</div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    Visible Progress
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  The workspace maintains a clear history, provides reminders, and surfaces signals 
                  that help validate experiments faster. Every experiment leaves a visible trail of learning.
                </p>
              </CardContent>
            </Card>
          </div>
        </FadeIn>

        <FadeIn delay={0.8}>
          <div className="text-center">
            <RainbowButton 
              onClick={() => scrollToSection("cta")}
              className="text-lg px-8 py-4"
            >
              Coming Soon →
            </RainbowButton>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

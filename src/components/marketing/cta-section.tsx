"use client"

import { FadeIn } from "@/components/ui/magic-ui"

export function CTASection() {

  return (
    <section id="cta" className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Coming Soon
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            We&apos;re building something amazing for indie SaaS founders. 
            Stay tuned for updates on our AI-assisted workspace.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

# Components Setup

This project has been configured with **shadcn/ui** components and custom **Magic UI-style** components for creating beautiful, animated interfaces.

## shadcn/ui Components

The following shadcn/ui components have been installed with the **New York** style:

- ✅ **Button** - Various button variants and sizes
- ✅ **Card** - Card container with header, content, and footer
- ✅ **Badge** - Small status indicators
- ✅ **Input** - Form input fields
- ✅ **Separator** - Visual dividers

### Usage Example:
```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Example Card</CardTitle>
        <Badge>New</Badge>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  )
}
```

## Magic UI-style Components

Custom lightweight components perfect for coming-soon pages and hero sections:

### 🎭 AnimatedText
Animated text that reveals words with a stagger effect.

```tsx
import { AnimatedText } from "@/components/ui/magic-ui"

<AnimatedText 
  text="Something Amazing is Coming" 
  delay={0.5}
  className="text-4xl font-bold"
/>
```

### ✨ ShimmerButton
Button with a beautiful shimmer animation effect.

```tsx
import { ShimmerButton } from "@/components/ui/magic-ui"

<ShimmerButton 
  shimmerColor="#ffffff40"
  background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  className="text-white px-8 py-3"
>
  Join Waitlist
</ShimmerButton>
```

### 🎨 GradientText
Text with customizable gradient colors.

```tsx
import { GradientText } from "@/components/ui/magic-ui"

<GradientText 
  from="from-blue-600" 
  to="to-violet-600"
  className="text-6xl font-bold"
>
  Amazing Title
</GradientText>
```

### 🌟 FadeIn
Smooth fade-in animation with customizable direction and delay.

```tsx
import { FadeIn } from "@/components/ui/magic-ui"

<FadeIn delay={0.3} direction="up">
  <h1>This will fade in from bottom</h1>
</FadeIn>
```

### 🔵 DotPattern
Subtle dot pattern background overlay.

```tsx
import { DotPattern } from "@/components/ui/magic-ui"

<div className="relative">
  <DotPattern 
    className="opacity-30" 
    width={20} 
    height={20} 
    cx={2} 
    cy={2} 
    cr={1} 
  />
  <div className="relative z-10">
    Your content here
  </div>
</div>
```

## Complete Example

See `src/components/coming-soon-hero.tsx` for a complete example that combines all these components into a beautiful coming-soon page.

## Configuration

- **Style**: New York (clean, minimal design)
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Import Path

All components use the `@/*` import alias:
- shadcn/ui: `@/components/ui/[component-name]`
- Magic UI: `@/components/ui/magic-ui`

The project is ready for building beautiful, animated interfaces! 🚀

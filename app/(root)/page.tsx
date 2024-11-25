import { FeaturesRow } from '@/components/features-row'
import { ImagesGrid } from '@/components/images-grid'
import { CTACard } from '@/components/cta-card'
import { Pricing } from '@/components/pricing'
import { Hero } from '@/components/hero'

export default function Home() {
  return (
    <div>
      <FeaturesRow />
      <ImagesGrid />
      <CTACard />
      <Pricing />
      <Hero />
    </div>
  )
}

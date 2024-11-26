import { VideoHeader } from '@/components/shared/video-header'
import { FeaturesRow } from '@/components/shared/features-row'
import { ImagesGrid } from '@/components/shared/images-grid'
import { CTACard } from '@/components/shared/cta-card'
import { Pricing } from '@/components/shared/pricing'
import { Hero } from '@/components/shared/hero'
import { APP_NAME } from '@/lib/constants'
import { features } from '@/lib/data/features-row'
import { images } from '@/lib/data/images-grid'
import { plans } from '@/lib/data/pricing'

export default function Home() {
  return (
    <div>
      <VideoHeader title={`Conheça a ${APP_NAME}!`} videoId="3YTohytF9oE" />
      <FeaturesRow
        mainTitle={`Por que escolher a ${APP_NAME}?`}
        features={features}
      />
      <ImagesGrid
        mainTitle="Atividades para todos os gostos!"
        images={images}
      />
      <CTACard
        mainTitle="Comece sua jornada fitness hoje!"
        description="Transforme sua vida com os melhores equipamentos e profissionais. Primeira aula experimental gratuita!"
        buttonText="Agende sua Aula Grátis"
        buttonLink="/contato"
      />
      <Pricing
        mainTitle="Nossos Planos"
        subTitle="Escolha o plano ideal para seus objetivos"
        plans={plans}
        buttonText="Começar agora"
        buttonLink="/contato"
        recommendedTag="Plano Popular"
      />
      <Hero
        mainTitle="Transforme seu corpo, transforme sua vida"
        description="Na PowerFit, você encontra tudo o que precisa para alcançar seus objetivos fitness. Nossa academia oferece equipamentos de última geração, profissionais altamente qualificados e um ambiente acolhedor para sua jornada de transformação."
        secondaryButtonText="Sobre Nós"
        secondaryButtonLink="/sobre"
        primaryButtonText="Começar agora"
        primaryButtonLink="/contato"
        imageSrc="/assets/images/change.jpg"
        imageAlt="Pessoa treinando na academia"
      />
    </div>
  )
}

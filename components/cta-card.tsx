import { APP_THEME } from '@/lib/constants'

export function CTACard() {
  return (
    <section className="w-full py-16">
      <div className={`w-full bg-${APP_THEME.background}`}>
        <div className="mx-auto max-w-7xl py-16 px-6 text-center">
          <h2
            className={`text-${APP_THEME.onBackground} text-4xl font-bold mb-4`}
          >
            Comece sua jornada fitness hoje!
          </h2>

          <p
            className={`text-${APP_THEME.onBackground}/50 text-lg max-w-2xl mx-auto mb-8`}
          >
            Transforme sua vida com os melhores equipamentos e profissionais.
            Primeira aula experimental gratuita!
          </p>

          <button
            className={`
              bg-${APP_THEME.primary} text-${APP_THEME.onSecondary}
              px-8 py-4 rounded-lg text-lg font-bold
              transition-all duration-300
              hover:bg-${APP_THEME.primaryHover}
              hover:scale-105
            `}
          >
            Agende sua Aula Grátis
          </button>
        </div>
      </div>
    </section>
  )
}

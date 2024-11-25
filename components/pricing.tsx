import { FaCheck } from 'react-icons/fa'
import { APP_THEME } from '@/lib/constants'

const plans = [
  {
    name: 'Musculação',
    description: 'Ideal para iniciantes',
    price: '89,90',
    features: [
      'Acesso à área de musculação',
      'Programa de treino personalizado',
      'Avaliação física mensal',
    ],
  },
  {
    name: 'Musculação Plus',
    description: 'O mais escolhido',
    price: '129,90',
    recommended: true,
    features: [
      'Todos os benefícios do plano Musculação',
      'Acesso às aulas em grupo',
      'Área funcional e cardio',
      'Acompanhamento nutricional',
    ],
  },
  {
    name: 'Premium',
    description: 'Para resultados máximos',
    price: '199,90',
    features: [
      'Todos os benefícios do plano Plus',
      'Personal trainer dedicado',
      'Horários exclusivos',
      'Acesso a todas as unidades',
    ],
  },
]

export function Pricing() {
  return (
    <section className="w-full py-16">
      <h2
        className={`text-center text-4xl font-bold text-${APP_THEME.onBackground} px-6`}
      >
        Nossos Planos
      </h2>
      <p className={`text-center text-${APP_THEME.onBackground} mt-4 px-6`}>
        Escolha o plano ideal para seus objetivos
      </p>

      <div className="w-full">
        <div className="mx-auto max-w-7xl py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-lg bg-${APP_THEME.secondary} 
                  ${
                    plan.recommended
                      ? `border-2 border-${APP_THEME.primary}`
                      : ''
                  }`}
              >
                {plan.recommended && (
                  <div
                    className={`absolute -top-4 left-1/2 -translate-x-1/2 
                      bg-${APP_THEME.primary} text-${APP_THEME.background} 
                      px-4 py-1 rounded-full text-sm font-semibold`}
                  >
                    Plano Popular
                  </div>
                )}

                <h3
                  className={`text-${APP_THEME.onSecondary} text-center text-xl font-bold`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-${APP_THEME.onSecondaryFade} text-center mt-2`}
                >
                  {plan.description}
                </p>

                <div className="mt-4 mb-6 text-center">
                  <span
                    className={`text-${APP_THEME.onSecondary} text-4xl font-bold`}
                  >
                    R$ {plan.price}
                  </span>
                  <span className={`text-${APP_THEME.onSecondaryFade} ml-2`}>
                    /mês
                  </span>
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-lg 
                    bg-${APP_THEME.primary} hover:bg-${APP_THEME.primaryHover} 
                    text-${APP_THEME.background} font-semibold 
                    transition-colors duration-300`}
                >
                  Começar agora
                </button>

                <hr className={`my-6 border-${APP_THEME.onSecondaryFade}/20`} />

                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <FaCheck
                        className={`text-${APP_THEME.primary} w-5 h-5 mr-3 flex-shrink-0`}
                      />
                      <span className={`text-${APP_THEME.onSecondaryFade}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

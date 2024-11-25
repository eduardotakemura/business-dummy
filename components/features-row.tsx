import { FaDumbbell, FaUsers, FaChartLine, FaClock } from 'react-icons/fa'
import { APP_THEME } from '@/lib/constants'

const features = [
  {
    icon: FaDumbbell,
    title: 'Equipamentos Modernos',
    description:
      'Academia equipada com as melhores e mais modernas máquinas do mercado.',
  },
  {
    icon: FaUsers,
    title: 'Profissionais Qualificados',
    description:
      'Equipe de instrutores especializados para auxiliar no seu treino.',
  },
  {
    icon: FaChartLine,
    title: 'Acompanhamento',
    description:
      'Monitoramento constante da sua evolução e ajuste dos treinos.',
  },
  {
    icon: FaClock,
    title: 'Horário Flexível',
    description:
      'Academia aberta todos os dias com horários que se adaptam à sua rotina.',
  },
]

export function FeaturesRow() {
  return (
    <section className="w-full py-16">
      <h2
        className={`text-center text-4xl font-bold mb-12 text-${APP_THEME.onBackground} px-6`}
      >
        Por que escolher a PowerFit?
      </h2>

      <div className={`w-full bg-${APP_THEME.secondary}`}>
        <div className="mx-auto max-w-7xl py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-lg transition-all duration-300 hover:scale-105 
                  border border-${APP_THEME.onSecondaryFade}
                  group cursor-default`}
              >
                <div
                  className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300 bg-gradient-to-br from-${APP_THEME.primaryBackground} to-transparent 
                  pointer-events-none`}
                />

                <div className="relative z-10">
                  <feature.icon
                    className={`text-${APP_THEME.primary} w-12 h-12 mb-4
                      group-hover:scale-110 transition-transform duration-300`}
                  />
                  <h3
                    className={`text-${APP_THEME.onSecondary} text-xl font-bold mb-2`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`text-${APP_THEME.onSecondaryFade} leading-relaxed`}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

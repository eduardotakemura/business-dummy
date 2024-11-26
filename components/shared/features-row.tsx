interface FeaturesRowProps {
  features: {
    icon: React.ElementType
    title: string
    description: string
  }[]
}

export function FeaturesRow({
  mainTitle,
  features,
}: {
  mainTitle: string
  features: FeaturesRowProps['features']
}) {
  return (
    <section className="w-full py-16">
      <h2
        className={`text-center text-4xl font-bold mb-12 text-theme-onBackground px-6`}
      >
        {mainTitle}
      </h2>

      <div className={`w-full bg-theme-secondary`}>
        <div className="mx-auto max-w-7xl py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-lg transition-all duration-300 hover:scale-105 
                  border border-theme-onSecondaryFade
                  group cursor-default`}
              >
                <div
                  className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300 bg-gradient-to-br from-theme-primaryBackground to-transparent 
                  pointer-events-none`}
                />

                <div className="relative z-10">
                  <feature.icon
                    className={`text-theme-primary w-12 h-12 mb-4
                      group-hover:scale-110 transition-transform duration-300`}
                  />
                  <h3
                    className={`text-theme-onSecondary text-xl font-bold mb-2`}
                  >
                    {feature.title}
                  </h3>
                  <p className={`text-theme-onSecondaryFade leading-relaxed`}>
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

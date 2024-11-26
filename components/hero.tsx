import Image from 'next/image'

export function Hero() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl py-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h1
              className={`text-4xl lg:text-5xl font-bold text-theme-onBackground`}
            >
              Transforme seu corpo,
              <br />
              transforme sua vida
            </h1>

            <p
              className={`text-lg text-theme-onBackground max-w-xl leading-relaxed`}
            >
              Na PowerFit, você encontra tudo o que precisa para alcançar seus
              objetivos fitness. Nossa academia oferece equipamentos de última
              geração, profissionais altamente qualificados e um ambiente
              acolhedor para sua jornada de transformação. Seja para ganhar
              força, perder peso ou melhorar sua saúde, estamos aqui para te
              apoiar em cada etapa.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className={`px-8 py-3 rounded-lg 
                  border-2 border-theme-background
                  text-theme-onBackground font-semibold 
                  hover:bg-theme-onBackgroundHover hover:text-theme-primary
                  transition-colors duration-300`}
              >
                Conhecer mais
              </button>

              <button
                className={`px-8 py-3 rounded-lg 
                  bg-theme-primary hover:bg-theme-primaryHover
                  text-theme-background font-semibold 
                  transition-colors duration-300`}
              >
                Começar agora
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[500px] w-full">
            <Image
              src="/assets/images/image1.jpg"
              alt="Pessoa treinando na academia"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

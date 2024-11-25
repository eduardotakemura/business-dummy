import Image from 'next/image'
import { APP_THEME } from '@/lib/constants'

const images = [
  {
    src: '/assets/images/image1.jpg',
    alt: 'Área de musculação',
    title: 'Área de musculação',
  },
  {
    src: '/assets/images/image1.jpg',
    alt: 'Área cardio',
    title: 'Área cardio',
  },
  {
    src: '/assets/images/image1.jpg',
    alt: 'Área funcional',
    title: 'Área funcional',
  },
  {
    src: '/assets/images/image1.jpg',
    alt: 'Área de peso livre',
    title: 'Área de peso livre',
  },
  {
    src: '/assets/images/image1.jpg',
    alt: 'Estúdio',
    title: 'Estúdio',
  },
  {
    src: '/assets/images/image1.jpg',
    alt: 'Vestiário',
    title: 'Vestiário',
  },
]

export function ImagesGrid() {
  return (
    <section className="w-full py-16">
      <h2
        className={`text-center text-4xl font-bold mb-12 text-${APP_THEME.onBackground} px-6`}
      >
        Atividades para todos os gostos!
      </h2>

      <div className={`w-full bg-${APP_THEME.secondary}`}>
        <div className="mx-auto max-w-7xl py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative group cursor-default transition-all duration-300 hover:scale-105`}
              >
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 bg-gradient-to-t from-${APP_THEME.secondary} to-transparent`}
                  />
                </div>
                <h3
                  className={`text-${APP_THEME.onSecondary} text-xl font-bold mt-4 text-center`}
                >
                  {image.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

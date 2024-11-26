import Image from 'next/image'

interface ImagesGridProps {
  images: {
    src: string
    alt: string
    title: string
  }[]
}

export function ImagesGrid({
  mainTitle,
  images,
}: {
  mainTitle: string
  images: ImagesGridProps['images']
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
                    transition-opacity duration-300 bg-gradient-to-t from-theme-secondary to-transparent`}
                  />
                </div>
                <h3
                  className={`text-theme-onSecondary text-xl font-bold mt-4 text-center`}
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

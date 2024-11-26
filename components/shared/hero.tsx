import Image from 'next/image'
import Link from 'next/link'

interface HeroProps {
  mainTitle: string
  description: string
  secondaryButtonText: string
  secondaryButtonLink: string
  primaryButtonText: string
  primaryButtonLink: string
  imageSrc: string
  imageAlt: string
}

export function Hero({
  mainTitle,
  description,
  secondaryButtonText,
  secondaryButtonLink,
  primaryButtonText,
  primaryButtonLink,
  imageSrc,
  imageAlt,
}: HeroProps) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl py-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h1
              className={`text-4xl lg:text-5xl font-bold text-theme-onBackground`}
            >
              {mainTitle}
            </h1>

            <p
              className={`text-lg text-theme-onBackground max-w-xl leading-relaxed`}
            >
              {description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={secondaryButtonLink}
                className={`px-8 py-3 rounded-lg 
                  bg-transparent
                  border-2 border-theme-secondary
                  text-theme-secondary font-semibold 
                  hover:bg-theme-secondary hover:text-theme-background
                  transition-all duration-300 ease-in-out
                  transform hover:scale-105`}
              >
                {secondaryButtonText}
              </Link>

              <Link
                href={primaryButtonLink}
                className={`px-8 py-3 rounded-lg 
                  bg-theme-primary hover:bg-theme-primaryHover
                  text-theme-background font-semibold 
                  transition-colors duration-300`}
              >
                {primaryButtonText}
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[500px] w-full">
            <Image
              src={imageSrc}
              alt={imageAlt}
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

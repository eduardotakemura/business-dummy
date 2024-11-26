import Link from 'next/link'

export function CTACard({
  mainTitle,
  description,
  buttonText,
  buttonLink,
}: {
  mainTitle: string
  description: string
  buttonText: string
  buttonLink: string
}) {
  return (
    <section className="w-full py-16">
      <div className={`w-full bg-theme-secondary`}>
        <div className="mx-auto max-w-7xl py-16 px-6 text-center">
          <h2 className={`text-theme-onSecondary text-4xl font-bold mb-4`}>
            {mainTitle}
          </h2>

          <p
            className={`text-theme-onSecondary text-lg max-w-2xl mx-auto mb-8`}
          >
            {description}
          </p>

          <Link
            href={buttonLink}
            className={`
              bg-theme-primary text-theme-onBackground
              px-8 py-4 rounded-lg text-lg font-bold
              transition-all duration-300
              hover:bg-theme-primaryHover
              hover:scale-105
            `}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  )
}

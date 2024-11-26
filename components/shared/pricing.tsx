import Link from 'next/link'
import { FaCheck } from 'react-icons/fa'

interface PricingProps {
  name: string
  description: string
  price: string
  recommended: boolean
  features: string[]
}

export function Pricing({
  mainTitle,
  subTitle,
  plans,
  buttonText,
  buttonLink,
  recommendedTag,
}: {
  mainTitle: string
  subTitle: string
  plans: PricingProps[]
  buttonText: string
  buttonLink: string
  recommendedTag: string
}) {
  return (
    <section className="w-full py-16">
      <h2
        className={`text-center text-4xl font-bold text-theme-onBackground px-6`}
      >
        {mainTitle}
      </h2>
      <p className={`text-center text-theme-onBackground mt-4 px-6`}>
        {subTitle}
      </p>

      <div className="w-full">
        <div className="mx-auto max-w-7xl py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-lg bg-theme-secondary 
                  ${plan.recommended ? `border-2 border-theme-primary` : ''}`}
              >
                {plan.recommended && (
                  <div
                    className={`absolute -top-4 left-1/2 -translate-x-1/2 
                      bg-theme-primary text-theme-background 
                      px-4 py-1 rounded-full text-sm font-semibold`}
                  >
                    {recommendedTag}
                  </div>
                )}

                <h3
                  className={`text-theme-onSecondary text-center text-xl font-bold`}
                >
                  {plan.name}
                </h3>
                <p className={`text-theme-onSecondaryFade text-center mt-2`}>
                  {plan.description}
                </p>

                <div className="mt-4 mb-6 text-center">
                  <span className={`text-theme-onSecondary text-4xl font-bold`}>
                    R$ {plan.price}
                  </span>
                  <span className={`text-theme-onSecondaryFade ml-2`}>
                    /mês
                  </span>
                </div>

                <Link
                  href={buttonLink}
                  className={`w-full block text-center py-3 px-6 rounded-lg 
                    bg-theme-primary hover:bg-theme-primaryHover 
                    text-theme-background font-semibold 
                    transition-colors duration-300`}
                >
                  {buttonText}
                </Link>

                <hr className={`my-6 border-theme-onSecondaryFade/20`} />

                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <FaCheck
                        className={`text-theme-primary w-5 h-5 mr-3 flex-shrink-0`}
                      />
                      <span className={`text-theme-onSecondaryFade`}>
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

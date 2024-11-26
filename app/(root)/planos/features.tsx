import { Pricing } from '@/components/shared/pricing'
import { CTACard } from '@/components/shared/cta-card'
import { APP_NAME } from '@/lib/constants'
import { plans } from '@/lib/data/pricing'
import Image from 'next/image'

export default function Features() {
  const benefits = [
    {
      title: 'Flexibilidade Total',
      description: 'Acesso em qualquer horário, adaptando-se à sua rotina',
    },
    {
      title: 'Sem Fidelidade',
      description: 'Planos sem compromisso de permanência mínima',
    },
    {
      title: 'Estrutura Completa',
      description: 'Equipamentos modernos e ambientes climatizados',
    },
    {
      title: 'Profissionais Qualificados',
      description: 'Equipe especializada para auxiliar seu treino',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Planos e Valores
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Escolha o plano ideal para seus objetivos na {APP_NAME}. Oferecemos
          opções flexíveis que se adaptam ao seu estilo de vida.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-secondary text-center hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
            <p className="text-muted-foreground">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Main Pricing Component */}
      <Pricing
        mainTitle="Escolha Seu Plano"
        subTitle="Invista em sua saúde com o melhor custo-benefício"
        plans={plans}
        buttonText="Assinar Agora"
        buttonLink="/contato"
        recommendedTag="Mais Popular"
      />

      {/* Additional Info Section */}
      <div className="py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[400px]">
          <Image
            src="/assets/images/gym-interior.jpg"
            alt="Interior da academia"
            fill
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Por que escolher a {APP_NAME}?</h2>
          <ul className="space-y-4">
            {[
              'Primeira aula experimental gratuita',
              'Acompanhamento personalizado',
              'Avaliação física completa',
              'App exclusivo para alunos',
              'Área de musculação completa',
              'Aulas coletivas inclusas',
              'Estacionamento gratuito',
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="h-2 w-2 bg-theme-primary rounded-full" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Dúvidas Frequentes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              question: 'Qual o período mínimo de permanência?',
              answer:
                'Não exigimos período mínimo de permanência em nossos planos.',
            },
            {
              question: 'Como funciona a primeira aula grátis?',
              answer:
                'Basta agendar através do nosso site ou telefone para experimentar.',
            },
            {
              question: 'Posso trancar a matrícula?',
              answer:
                'Sim, oferecemos a opção de trancamento conforme regulamento.',
            },
            {
              question: 'Quais formas de pagamento?',
              answer: 'Aceitamos cartões de crédito, débito e PIX.',
            },
          ].map((item, index) => (
            <div key={index} className="p-6 rounded-xl bg-secondary">
              <h3 className="font-semibold text-lg mb-2">{item.question}</h3>
              <p className="text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <CTACard
        mainTitle="Comece Sua Jornada Fitness Hoje"
        description="Entre em contato e conheça mais sobre nossos planos e benefícios"
        buttonText="Falar com Consultor"
        buttonLink="/contato"
      />
    </div>
  )
}

import { CTACard } from '@/components/shared/cta-card'
import { APP_NAME } from '@/lib/constants'
import Image from 'next/image'

export default function About() {
  const team = [
    { name: 'João da Silva', role: 'Instrutor' },
    { name: 'Maria Oliveira', role: 'Instrutor' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossa História</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Desde nossa fundação, a {APP_NAME} tem se dedicado a transformar vidas
          através do fitness, criando um ambiente onde saúde e bem-estar se
          encontram com dedicação e resultados.
        </p>
      </div>

      {/* Main Image */}
      <div className="relative h-[500px] w-full mb-20">
        <Image
          src="/assets/images/image1.jpg"
          alt="Nossa academia"
          fill
          className="object-cover rounded-2xl"
        />
      </div>

      {/* Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        {[
          {
            title: 'Missão',
            description:
              'Proporcionar uma experiência fitness excepcional, inspirando e capacitando pessoas a alcançarem seus objetivos.',
          },
          {
            title: 'Visão',
            description:
              'Ser reconhecida como referência em qualidade e inovação no mercado fitness, transformando vidas através do esporte.',
          },
          {
            title: 'Valores',
            description:
              'Comprometimento, excelência, inovação, respeito e foco total na satisfação dos nossos alunos.',
          },
        ].map((item, index) => (
          <div key={index} className="text-center p-6 rounded-xl bg-secondary">
            <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Nossa Equipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {team.map((item, index) => (
            <div key={index} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src={`/assets/images/team-${item}.jpg`}
                  alt={`Team member ${item}`}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="font-semibold text-lg">{team[index].name}</h3>
              <p className="text-muted-foreground">{team[index].role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <CTACard
        mainTitle="Faça Parte da Nossa Comunidade"
        description="Venha conhecer nossa estrutura e entenda por que somos a escolha ideal para sua jornada fitness."
        buttonText="Agende uma Visita"
        buttonLink="/contato"
      />
    </div>
  )
}

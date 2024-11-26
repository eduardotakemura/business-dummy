import { CTACard } from '@/components/shared/cta-card'
import {
  APP_NAME,
  WHATSAPP_URL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
} from '@/lib/constants'
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
} from 'react-icons/fa'
import ContactForm from './contact-form'

export default function Contact() {
  const contactInfo = [
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      description: 'Resposta instantânea',
      link: WHATSAPP_URL,
      linkText: 'Enviar mensagem',
      color: 'hover:bg-green-500',
    },
    {
      icon: FaInstagram,
      title: 'Instagram',
      description: 'Siga nosso perfil',
      link: INSTAGRAM_URL,
      linkText: 'Seguir',
      color: 'hover:bg-pink-500',
    },
    {
      icon: FaFacebook,
      title: 'Facebook',
      description: 'Curta nossa página',
      link: FACEBOOK_URL,
      linkText: 'Curtir',
      color: 'hover:bg-blue-500',
    },
  ]

  const locationInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Endereço',
      description: 'Rua Example, 123 - Centro',
    },
    {
      icon: FaClock,
      title: 'Horário de Funcionamento',
      description: 'Segunda à Sexta: 6h às 22h\nSábados: 8h às 18h',
    },
    {
      icon: FaEnvelope,
      title: 'E-mail',
      description: 'contato@academia.com',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Fale Conosco</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Entre em contato com a {APP_NAME}. Estamos prontos para atender você e
          esclarecer todas as suas dúvidas.
        </p>
      </div>

      {/* Social Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {contactInfo.map((item, index) => (
          <div key={index} className="text-center">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-6 rounded-xl bg-secondary hover:text-white transition-all duration-300 ${item.color}`}
            >
              <item.icon className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              <span className="inline-block font-semibold">
                {item.linkText} →
              </span>
            </a>
          </div>
        ))}
      </div>

      {/* Location Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {locationInfo.map((item, index) => (
          <div key={index} className="text-center p-6 rounded-xl bg-secondary">
            <item.icon className="w-8 h-8 mx-auto mb-4 text-theme-primary" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-muted-foreground whitespace-pre-line">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Contact Form Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Envie sua Mensagem</h2>
          <p className="text-muted-foreground">
            Preencha o formulário abaixo e entraremos em contato o mais breve
            possível
          </p>
        </div>
        <ContactForm />
      </div>

      {/* Map Section */}
      <div className="mb-20">
        <div className="aspect-video rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.356219020248!2d-43.18344248503453!3d-22.906449785015005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f58a6a00a9d%3A0x3f251d85272f76f7!2sAv.%20Rio%20Branco%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1sen!2sbr!4v1616682240045!5m2!1sen!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Final CTA */}
      <CTACard
        mainTitle="Venha Treinar Conosco"
        description="Agende sua aula experimental gratuita e comece sua transformação"
        buttonText="Agendar Aula Grátis"
        buttonLink={WHATSAPP_URL}
      />
    </div>
  )
}

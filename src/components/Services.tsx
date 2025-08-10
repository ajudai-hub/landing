import { Clock, Shield, Users, Zap } from "lucide-react";
import plumberIcon from "@/assets/plumber-icon.jpg";
import locksmithIcon from "@/assets/locksmith-icon.jpg";
import electricianIcon from "@/assets/electrician-icon.jpg";

const Services = () => {
  const services = [
    {
      icon: plumberIcon,
      title: "Reparos Domésticos",
      description: "Encanadores, eletricistas, chaveiros e manutenção geral",
      example: "Problema em casa? Encontre o especialista certo em minutos"
    },
    {
      icon: locksmithIcon,
      title: "Serviços de Limpeza",
      description: "Limpeza residencial, comercial e especializada",
      example: "Precisa de uma faxina completa? Profissionais prontos para ajudar"
    },
    {
      icon: electricianIcon,
      title: "Suporte Técnico",
      description: "Assistência em TI, configuração e resolução de problemas",
      example: "Computador com problema? Suporte remoto disponível agora"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "Serviço Sob Demanda",
      description: "Acesse profissionais quando precisar, sem agendamento prévio"
    },
    {
      icon: Shield,
      title: "Profissionais Qualificados",
      description: "Prestadores verificados e especializados em suas áreas"
    },
    {
      icon: Users,
      title: "Avaliações Transparentes",
      description: "Sistema de feedback confiável para garantir qualidade"
    },
    {
      icon: Zap,
      title: "Conexão Inteligente",
      description: "Algoritmo que conecta você ao profissional ideal para sua necessidade"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Services Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Microserviços Sob Demanda
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma plataforma completa que conecta você aos profissionais certos, quando você precisar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 group">
              <div className="text-center space-y-6">
                <div className="relative w-20 h-20 mx-auto">
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="w-full h-full rounded-2xl object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm font-medium text-primary">
                      💡 {service.example}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Uma plataforma, infinitas possibilidades
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desde reparos domésticos até serviços especializados como tradução e suporte técnico
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
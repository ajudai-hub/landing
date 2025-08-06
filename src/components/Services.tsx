import { Clock, Shield, Users, Zap } from "lucide-react";
import plumberIcon from "@/assets/plumber-icon.jpg";
import locksmithIcon from "@/assets/locksmith-icon.jpg";
import electricianIcon from "@/assets/electrician-icon.jpg";

const Services = () => {
  const services = [
    {
      icon: plumberIcon,
      title: "Encanadores",
      description: "Vazamentos, entupimentos e emergências hidráulicas",
      example: "Estourou um cano em casa? Encontre um encanador em minutos"
    },
    {
      icon: locksmithIcon,
      title: "Chaveiros",
      description: "Abertura de portas, cópias de chaves e fechaduras",
      example: "Ficou trancado do lado de fora? Ajuda está a caminho"
    },
    {
      icon: electricianIcon,
      title: "Eletricistas",
      description: "Problemas elétricos, falta de energia e reparos",
      example: "Falta de energia em casa? Resolva rapidamente"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "Resposta Rápida",
      description: "Profissionais disponíveis 24 horas por dia, 7 dias por semana"
    },
    {
      icon: Shield,
      title: "Profissionais Verificados",
      description: "Todos os prestadores são verificados e possuem credenciais válidas"
    },
    {
      icon: Users,
      title: "Avaliações Reais",
      description: "Sistema de avaliações de clientes reais para garantir qualidade"
    },
    {
      icon: Zap,
      title: "Localização Precisa",
      description: "Encontre o profissional mais próximo de você em tempo real"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Services Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Serviços de Emergência Disponíveis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conectamos você aos melhores profissionais da sua região em questão de minutos
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
            Por que escolher nossa plataforma?
          </h2>
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
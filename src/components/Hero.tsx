import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-emergency-services.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-section flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                Prestadores de
                <span className="text-primary block">Serviços Emergenciais</span>
                na palma da sua mão
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Encontre rapidamente chaveiros, encanadores, eletricistas e outros profissionais 
                qualificados para resolver suas emergências 24/7.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Quero ser avisado
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Como funciona?
              </Button>
            </div>

            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span>Disponível 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>Profissionais verificados</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Prestadores de serviços emergenciais" 
                className="w-full h-auto rounded-2xl shadow-strong"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-primary rounded-2xl opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
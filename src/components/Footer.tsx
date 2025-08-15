import { Wrench, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {/* <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center"> */}
              {/* <Wrench className="w-6 h-6 text-primary-foreground" /> */}
              {/* </div> */}
              <span className="text-xl font-bold">ajudaí</span>
            </div>
            <p className="text-background/80 text-sm">
              Conectando você aos melhores prestadores de serviços diversos da
              sua região, 24 horas por dia.
            </p>
          </div>

          {/* Serviços */}
          <div className="space-y-4 md:col-span-2">
            <h3 className="font-semibold text-lg">Serviços</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
              <ul className="space-y-2 text-sm text-background/80">
                <li>Encanamento</li>
                <li>Pintura</li>
                <li>Jardinagem</li>
                <li>Limpeza</li>
                <li>Montagem</li>
              </ul>
              <ul className="space-y-2 text-sm text-background/80">
                <li>Mudanças</li>
                <li>Manutenção geral</li>
                <li>Tecnologia</li>
                <li>Animais</li>
                <li>Consultoria</li>
              </ul>
            </div>
          </div>

          {/* Contato */}
          <div id="contato" className="space-y-4 scroll-mt-20">
            <h3 className="font-semibold text-lg">Contato</h3>
            <div className="space-y-3 text-sm text-background/80">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>timoteostifft@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(51) 98128-0499</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Porto Alegre, RS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-sm text-background/60">
          <p>&copy; 2025 ajudaí. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

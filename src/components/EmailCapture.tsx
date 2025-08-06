import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "E-mail inválido",
        description: "Por favor, insira um e-mail válido.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simular envio para endpoint (substitua pela sua API real)
      await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      setIsSubmitted(true);
      toast({
        title: "Cadastro realizado!",
        description: "Você será notificado quando o app estiver disponível.",
      });
    } catch (error) {
      toast({
        title: "Erro no cadastro",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 px-4 bg-gradient-section">
        <div className="container mx-auto max-w-4xl">
          <Card className="shadow-strong">
            <CardContent className="p-12 text-center">
              <CheckCircle className="w-16 h-16 text-success mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Parabéns! Você está na lista de espera
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Você receberá um e-mail assim que o app estiver disponível.
                Obrigado pelo seu interesse!
              </p>
              <div className="bg-muted rounded-lg p-6">
                <p className="text-sm text-muted-foreground">
                  💌 E-mail de confirmação enviado para: <strong>{email}</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-gradient-section">
      <div className="container mx-auto max-w-4xl">
        <Card className="shadow-strong">
          <CardContent className="p-12">
            <div className="text-center mb-8">
              <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Seja o primeiro a saber
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Cadastre seu e-mail e receba uma notificação exclusiva assim que 
                nossa plataforma estiver disponível para uso.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Digite seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Cadastrando..." : "Quero ser avisado"}
                </Button>
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                🔒 Seus dados estão seguros. Não enviamos spam.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <p className="text-sm text-muted-foreground">Disponibilidade</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">100%</div>
                <p className="text-sm text-muted-foreground">Verificados</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">5★</div>
                <p className="text-sm text-muted-foreground">Avaliação média</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EmailCapture;
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

    if (!email || !email.includes("@") || !email.includes(".")) {
      toast({
        title: "E-mail inválido",
        description: "Por favor, insira um e-mail válido.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/early-adopter`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));

        if (response.status === 409) {
          toast({
            title: "E-mail já cadastrado",
            description:
              "Este e-mail já está na nossa lista de espera. Você será notificado quando o app estiver disponível.",
            variant: "destructive",
          });
          return;
        }

        if (response.status === 400) {
          toast({
            title: "Dados inválidos",
            description:
              errorData.message || "Por favor, verifique o e-mail informado.",
            variant: "destructive",
          });
          return;
        }

        toast({
          title: "Erro no servidor",
          description: `Erro ${response.status}: ${
            errorData.message || "Tente novamente em alguns instantes."
          }`,
          variant: "destructive",
        });
        return;
      }

      setIsSubmitted(true);
      toast({
        title: "Cadastro realizado!",
        description: "Você será notificado quando o app estiver disponível.",
      });
    } catch (error) {
      toast({
        title: "Erro de conexão",
        description:
          "Não foi possível conectar ao servidor. Verifique sua conexão e tente novamente.",
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
                  💌 E-mail de confirmação enviado para:{" "}
                  <strong>{email}</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section
      id="formulario"
      className="py-20 px-4 bg-gradient-section scroll-mt-20"
    >
      <div className="container mx-auto max-w-4xl">
        <Card className="shadow-strong">
          <CardContent className="p-12">
            <div className="text-center mb-8">
              <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Seja o primeiro a acessar nossa plataforma
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Cadastre-se para receber acesso antecipado à plataforma que vai
                revolucionar como você busca por profissionais qualificados.
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
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EmailCapture;

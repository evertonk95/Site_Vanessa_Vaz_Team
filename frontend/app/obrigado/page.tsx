import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function ThankYou() {
    return (
        <Section className="min-h-[70vh] flex items-center">
            <Container className="text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-brand-neon/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-brand-neon" />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                    Obrigado!
                </h1>
                <p className="text-xl text-zinc-400 max-w-md mb-8">
                    Recebemos seu contato. Sua jornada de transformação está prestes a começar. Em breve nossa equipe falará com você.
                </p>
                <Button asChild variant="secondary">
                    <a href="/">Voltar para o Início</a>
                </Button>
            </Container>
        </Section>
    );
}

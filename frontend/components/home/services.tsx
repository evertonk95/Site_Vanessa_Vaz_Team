import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { SITE_CONTENT } from "@/lib/content";
import { Dumbbell, Activity, Video, Apple } from "lucide-react";

const icons = [Dumbbell, Activity, Video, Apple];

export function Services() {
    return (
        <Section id="services" className="bg-zinc-950">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                        Metodologia <span className="text-brand-magenta">Exclusiva</span>
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto">
                        Não é apenas treino. É um sistema completo para garantir sua evolução constante.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SITE_CONTENT.features.map((feature, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <Card key={index} className="group hover:-translate-y-2 transition-transform duration-300">
                                <div className="mb-4 w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center text-brand-neon group-hover:bg-brand-neon group-hover:text-black transition-colors">
                                    <Icon size={24} />
                                </div>
                                <CardTitle className="mb-2">{feature.title}</CardTitle>
                                <CardContent>{feature.description}</CardContent>
                            </Card>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
}

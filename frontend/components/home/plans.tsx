import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SITE_CONTENT } from "@/lib/content";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Plans() {
    return (
        <Section id="plans" className="bg-brand-dark">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                        Escolha seu <span className="text-brand-neon">Plano</span>
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto">
                        Invista em você com um acompanhamento profissional de verdade.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {SITE_CONTENT.plans.map((plan, index) => (
                        <Card
                            key={index}
                            className={cn(
                                "relative flex flex-col p-8",
                                plan.highlight ? "border-brand-magenta shadow-[0_0_30px_rgba(217,0,143,0.15)] scale-105 z-10 bg-zinc-900" : "bg-transparent border-zinc-800"
                            )}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-magenta text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    Mais Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-display font-bold text-white">{plan.price}</span>
                                </div>
                            </div>

                            <ul className="flex-1 space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                                        <Check size={18} className="text-brand-neon shrink-0 mt-0.5" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.highlight ? "default" : "outline"}
                                className="w-full"
                                asChild
                            >
                                <a href="#contact">Começar Agora</a>
                            </Button>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
}

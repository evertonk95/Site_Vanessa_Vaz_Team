import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SITE_CONTENT } from "@/lib/content";

export function About() {
    return (
        <Section id="about" className="bg-zinc-950">
            <Container>
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    <div className="w-full md:w-1/2 relative aspect-[3/4] md:aspect-square bg-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
                        {/* Placeholder for Vanessa's photo */}
                        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 border border-zinc-800">
                            <span className="text-zinc-600 font-display text-xl uppercase tracking-widest">Foto Vanessa Vaz</span>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-neon rounded-full blur-2xl opacity-50" />
                    </div>

                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                            Sobre a <span className="text-brand-magenta">Treinadora</span>
                        </h2>
                        <div className="space-y-4 text-zinc-400 text-lg leading-relaxed mb-8">
                            <p>
                                Com anos de experiência em alta performance e biomecânica, {SITE_CONTENT.brand.name} desenvolveu um método único que une ciência e prática.
                            </p>
                            <p>
                                O objetivo não é apenas mudar seu corpo, mas construir uma mentalidade de disciplina e constância. Seja você iniciante ou avançado, o acompanhamento é feito sob medida para suas necessidades.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="p-4 bg-zinc-900 rounded-lg border border-white/5">
                                <h4 className="text-2xl font-bold text-white mb-1">+500</h4>
                                <p className="text-xs text-zinc-500 uppercase tracking-wider">Alunos Transformados</p>
                            </div>
                            <div className="p-4 bg-zinc-900 rounded-lg border border-white/5">
                                <h4 className="text-2xl font-bold text-white mb-1">100%</h4>
                                <p className="text-xs text-zinc-500 uppercase tracking-wider">Foco em Resultado</p>
                            </div>
                        </div>

                        <Button asChild>
                            <a href="#contact">Quero Evoluir</a>
                        </Button>
                    </div>
                </div>
            </Container>
        </Section>
    );
}

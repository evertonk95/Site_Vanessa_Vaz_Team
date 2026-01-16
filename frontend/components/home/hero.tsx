import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SITE_CONTENT } from "@/lib/content";

export function Hero() {
    return (
        <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-dark">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(217,0,143,0.15),transparent_40%)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(99,255,59,0.1),transparent_40%)] pointer-events-none" />

            <Container className="relative z-10 flex flex-col items-center text-center">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 tracking-tight animate-slide-up">
                    {SITE_CONTENT.brand.shortName.toUpperCase()}
                </h1>
                <p className="max-w-2xl text-lg md:text-xl text-zinc-300 mb-8 animate-slide-up [animation-delay:200ms]">
                    {SITE_CONTENT.hero.subheadline}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-slide-up [animation-delay:400ms]">
                    <Button size="lg" className="shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] transition-shadow">
                        <a href="#contact">{SITE_CONTENT.hero.ctaPrimary}</a>
                    </Button>
                    <Button variant="outline" size="lg">
                        <a href="#plans">{SITE_CONTENT.hero.ctaSecondary}</a>
                    </Button>
                </div>
            </Container>
        </section>
    );
}

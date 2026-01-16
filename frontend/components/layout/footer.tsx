import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SITE_CONTENT } from "@/lib/content";
import { Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-white/10 py-12">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-display font-bold text-white mb-4">
                            {SITE_CONTENT.brand.name}
                        </h3>
                        <p className="text-zinc-400 text-sm max-w-sm">
                            Potencialize seus resultados com uma metodologia focada em alta performance e saúde.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Navegação</h4>
                        <ul className="flex flex-col gap-2">
                            <li><Link href="#services" className="text-sm text-zinc-400 hover:text-brand-neon">Serviços</Link></li>
                            <li><Link href="#plans" className="text-sm text-zinc-400 hover:text-brand-neon">Planos</Link></li>
                            <li><Link href="#about" className="text-sm text-zinc-400 hover:text-brand-neon">Sobre</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="flex flex-col gap-2">
                            <li><Link href="/politica-de-privacidade" className="text-sm text-zinc-400 hover:text-brand-neon">Privacidade</Link></li>
                            <li><Link href="/termos-de-uso" className="text-sm text-zinc-400 hover:text-brand-neon">Termos de Uso</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-zinc-500">
                        © {new Date().getFullYear()} {SITE_CONTENT.brand.name}. Todos os direitos reservados.
                    </p>
                    <div className="flex items-center gap-4">
                        <a
                            href={SITE_CONTENT.brand.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-brand-magenta transition-colors"
                        >
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

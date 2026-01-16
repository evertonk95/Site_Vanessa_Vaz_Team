"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SITE_CONTENT } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { label: "Início", href: "#hero" },
        { label: "Serviços", href: "#services" },
        { label: "Planos", href: "#plans" },
        { label: "Sobre", href: "#about" },
        { label: "FAQ", href: "#faq" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-md border-b border-white/10">
            <Container>
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        {/* Placeholder for Logo Image - Using text for now as requested/fallback */}
                        <div className="flex flex-col">
                            <span className="text-2xl font-display font-bold text-white tracking-widest leading-none">
                                VANESSA VAZ
                            </span>
                            <span className="text-xs font-sans font-semibold text-brand-neon tracking-[0.3em] uppercase">
                                Team
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-zinc-300 hover:text-brand-neon transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button variant="secondary" size="sm" asChild>
                            <Link href="#contact" className="ml-4">
                                Consultoria
                            </Link>
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-zinc-300 hover:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </Container>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-brand-dark border-b border-white/10 animate-fade-in">
                    <Container className="py-4 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-base font-medium text-zinc-300 hover:text-brand-neon py-2 border-b border-white/5"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button variant="default" className="w-full mt-2" onClick={() => setIsOpen(false)} asChild>
                            <Link href="#contact">Quero treinar</Link>
                        </Button>
                    </Container>
                </div>
            )}
        </header>
    );
}

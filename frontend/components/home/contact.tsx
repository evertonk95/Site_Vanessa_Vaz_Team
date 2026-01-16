"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SITE_CONTENT } from "@/lib/content";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, CheckCircle2 } from "lucide-react";

// Schema Validation
const formSchema = z.object({
    name: z.string().min(2, "Nome muito curto"),
    email: z.string().email("E-mail inválido"),
    phone: z.string().min(10, "Telefone inválido"),
    goal: z.string().min(5, "Conte um pouco mais sobre seu objetivo"),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        // Simulate API call
        console.log("Form Data:", data);
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSuccess(true);
        reset();

        // Redirect to thank you page or reset after delay
        // window.location.href = "/obrigado"; 
    };

    return (
        <Section id="contact" className="bg-brand-dark border-t border-white/5">
            <Container>
                <div className="max-w-3xl mx-auto bg-zinc-900/50 p-8 md:p-12 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            Comece sua <span className="text-brand-neon">Evolução</span>
                        </h2>
                        <p className="text-zinc-400">
                            Preencha o formulário abaixo para receber informações sobre a consultoria.
                        </p>
                    </div>

                    {isSuccess ? (
                        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-8 text-center animate-fade-in">
                            <div className="flex justify-center mb-4">
                                <CheckCircle2 className="w-16 h-16 text-brand-neon" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Mensagem Enviada!</h3>
                            <p className="text-zinc-300">Em breve entraremos em contato com você.</p>
                            <Button
                                variant="outline"
                                className="mt-6"
                                onClick={() => setIsSuccess(false)}
                            >
                                Enviar nova resposta
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-zinc-300">Nome</label>
                                    <input
                                        {...register("name")}
                                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-magenta transition-colors"
                                        placeholder="Seu nome completo"
                                    />
                                    {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-zinc-300">WhatsApp</label>
                                    <input
                                        {...register("phone")}
                                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-magenta transition-colors"
                                        placeholder="(00) 00000-0000"
                                    />
                                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-zinc-300">E-mail</label>
                                <input
                                    {...register("email")}
                                    type="email"
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-magenta transition-colors"
                                    placeholder="seu@email.com"
                                />
                                {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="goal" className="text-sm font-medium text-zinc-300">Qual seu principal objetivo?</label>
                                <textarea
                                    {...register("goal")}
                                    rows={4}
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-magenta transition-colors resize-none"
                                    placeholder="Ex: Hipertrofia, Emagrecimento, Condicionamento..."
                                />
                                {errors.goal && <p className="text-red-500 text-xs">{errors.goal.message}</p>}
                            </div>

                            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...
                                    </>
                                ) : (
                                    "Solicitar Contato"
                                )}
                            </Button>
                        </form>
                    )}
                </div>
            </Container>
        </Section>
    );
}

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SITE_CONTENT } from "@/lib/content";

export default function PrivacyPolicy() {
    return (
        <Section>
            <Container className="max-w-4xl">
                <h1 className="text-4xl font-display font-bold text-white mb-8">Política de Privacidade</h1>
                <div className="prose prose-invert prose-zinc max-w-none">
                    <p>Última atualização: {new Date().toLocaleDateString()}</p>

                    <h2>1. Coleta de Dados</h2>
                    <p>
                        Nós coletamos informações que você nos fornece diretamente, como nome, e-mail e telefone ao preencher nosso formulário de contato.
                    </p>

                    <h2>2. Uso das Informações</h2>
                    <p>
                        Usamos suas informações para:
                    </p>
                    <ul>
                        <li>Entrar em contato sobre os serviços solicitados.</li>
                        <li>Melhorar nossos serviços e atendimento.</li>
                        <li>Enviar novidades e promoções, caso consentido.</li>
                    </ul>

                    <h2>3. Compartilhamento</h2>
                    <p>
                        Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros sem o seu consentimento, exceto quando necessário para fornecer o serviço (ex: processamento de pagamentos).
                    </p>

                    <h2>4. Segurança</h2>
                    <p>
                        Implementamos medidas de segurança para proteger suas informações pessoais. No entanto, nenhum método de transmissão pela Internet é 100% seguro.
                    </p>

                    <h2>5. Contato</h2>
                    <p>
                        Se tiver dúvidas sobre esta política, entre em contato através do e-mail: {SITE_CONTENT.brand.email}.
                    </p>
                </div>
            </Container>
        </Section>
    );
}

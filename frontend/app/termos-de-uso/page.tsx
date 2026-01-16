import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SITE_CONTENT } from "@/lib/content";

export default function TermsOfUse() {
    return (
        <Section>
            <Container className="max-w-4xl">
                <h1 className="text-4xl font-display font-bold text-white mb-8">Termos de Uso</h1>
                <div className="prose prose-invert prose-zinc max-w-none">
                    <p>Última atualização: {new Date().toLocaleDateString()}</p>

                    <h2>1. Aceitação dos Termos</h2>
                    <p>
                        Ao acessar e usar o site da {SITE_CONTENT.brand.name}, você aceita e concorda em cumprir os seguintes termos e condições.
                    </p>

                    <h2>2. Serviços Oferecidos</h2>
                    <p>
                        A {SITE_CONTENT.brand.name} fornece consultoria de treinamento físico online e presencial. Os resultados podem variar de pessoa para pessoa e dependem da dedicação individual.
                    </p>

                    <h2>3. Propriedade Intelectual</h2>
                    <p>
                        Todo o conteúdo deste site, incluindo textos, gráficos, logotipos e imagens, é propriedade da {SITE_CONTENT.brand.name} e está protegido por leis de direitos autorais.
                    </p>

                    <h2>4. Responsabilidades</h2>
                    <p>
                        A prática de exercícios físicos envolve riscos. Recomendamos que você consulte um médico antes de iniciar qualquer programa de treinamento. A {SITE_CONTENT.brand.name} não se responsabiliza por lesões decorrentes da execução incorreta dos exercícios sem a devida supervisão, quando aplicável.
                    </p>

                    <h2>5. Alterações</h2>
                    <p>
                        Reservamo-nos o direito de alterar estes termos a qualquer momento. O uso contínuo do site após as alterações constitui aceitação dos novos termos.
                    </p>
                </div>
            </Container>
        </Section>
    );
}

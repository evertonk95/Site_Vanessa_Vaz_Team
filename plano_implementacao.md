# Plano de Implementação - MVP Vanessa Vaz Team

## Objetivo
Desenvolver um "MVP de apresentação" para Vanessa Vaz Team (consultoria fitness), focado em alta performance, design moderno (High Performance/Neon) e conversão de leads. O site será estático (SSG) para hospedagem inicial no GitHub Pages.

## Itens de Revisão do Usuário
> [!IMPORTANT]
> **Hospedagem GitHub Pages**: O projeto será configurado com `output: 'export'` para gerar arquivos estáticos. Funcionalidades que exigem servidor (API Routes, headers dinâmicos complexos) serão adaptadas ou removidas. O formulário será "mockado" ou usará serviço externo (ex: Formspree) se permitido, mas inicialmente será apenas visual/console.log.

> [!NOTE]
> **Identidade Visual**: A logo fornecida (`Gemini_Generated_Image...`) será a base da paleta de cores (Magenta/Verde Neon).

## Mudanças Propostas

### Estrutura do Projeto (Pasta: `Site-VanessaVazTeam`)
#### [NOVO] [Configuração]
- Inicializar Next.js 14+ (App Router).
- Configurar `next.config.js` para `output: "export"` e `images: { unoptimized: true }` (necessário para GitHub Pages padrão).
- `tailwind.config.ts`: Definir cores da marca (brand-magenta, brand-neon, brand-dark).
- `app/layout.tsx`: Layout base com metadados e fontes (Inter/Outfit).

### Componentes (Compartilhados)
#### [NOVO] [UI]
- `components/ui/button.tsx`: Variantes (primário, secundário, outline).
- `components/ui/container.tsx`: Wrapper padrão de largura.
- `components/layout/header.tsx`: Navbar fixa com links âncora.
- `components/layout/footer.tsx`: Rodapé com links legais e sociais.
- `components/ui/card.tsx`: Estilo base para cards.

### Seções da Landing Page (`app/page.tsx`)
#### [NOVO] [Seções]
- `components/home/hero.tsx`: Headline forte + CTA.
- `components/home/services.tsx`: Grid de serviços.
- `components/home/plans.tsx`: Cards de planos.
- `components/home/about.tsx`: Bio com foto.
- `components/home/contact.tsx`: Formulário (Mock).

### Páginas Auxiliares
#### [NOVO] [Rotas]
- `app/politica-de-privacidade/page.tsx`: Texto legal.
- `app/termos-de-uso/page.tsx`: Termos de uso.
- `app/obrigado/page.tsx`: Página de sucesso pós-contato.

### Dados e Conteúdo
#### [NOVO] [Registro]
- `lib/content.ts`: Arquivo central com textos, planos e FAQ para fácil alteração.

## Plano de Verificação

### Testes Automatizados
- Executar `npm run build` para garantir que o export estático funcione sem erros.
- Verificar Linting.

### Verificação Manual
- **Responsividade**: Testar em Mobile, Tablet e Desktop.
- **Navegação**: Verificar se o scroll suave funciona entre as seções.
- **Micro-interações**: Hover em botões e cards.

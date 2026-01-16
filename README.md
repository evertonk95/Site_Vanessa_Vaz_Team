# Vanessa Vaz Team - Institucional (MVP)

Este é o MVP do site de consultoria fitness da Vanessa Vaz Team, construído com foco em **Alta Performance**, design moderno (Neon/Dark) e segurança.

## 🚀 Tecnologias

- **Framework**: Next.js 14 (App Router)
- **Estilização**: TailwindCSS + Animations
- **Linguagem**: TypeScript
- **Componentes**: React + Lucide Icons + Framer Motion (opcional/ready)
- **Deploy**: Static Export (Compatível com GitHub Pages/Vercel)

## 🛠️ Como rodar localmente

1. **Instalar dependências**:
   ```bash
   cd frontend
   npm install
   ```

2. **Rodar servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
   Acesse `http://localhost:3000`.

3. **Build para Produção (Estático)**:
   ```bash
   npm run build
   # Os arquivos finais estarão na pasta 'out'
   ```

## 🔒 Segurança & DevSecOps

Este projeto segue diretrizes do OWASP para sites institucionais estáticos:

- **CSP (Content Security Policy)**: Implementado via `<meta>` tag no `layout.tsx` para mitigar XSS.
- **X-Content-Type-Options**: `nosniff` forçado.
- **Referrer Policy**: `strict-origin-when-cross-origin`.
- **Validação de Formulário**: Zod SchemaValidation no client-side.
- **Dependências**: Fixadas no `package.json` para evitar supply chain attacks automáticos.

### Checklist de Implementação de Segurança
- [x] Sem hardcoded secrets (API Keys, etc).
- [x] Validação de input (e-mail, telefone) antes do envio.
- [x] Sanitização automática do React contra XSS.
- [x] Configuração de `images: { unoptimized: true }` para evitar vulnerabilidades de processamento de imagem on-the-fly em servidores não confiáveis.

## 📂 Estrutura do Projeto

- `/app`: Rotas e Páginas (Next.js App Router).
- `/components`: Componentes reutilizáveis (UI, Layout, Seções).
- `/lib`: Utilitários e **Content Registry** (`content.ts`).
- `/public`: Ativos estáticos (imagens, fontes).

## 📝 Como Atualizar Conteúdo (Fase 2)

Para alterar textos, preços ou dúvidas frequentes SEM mexer no código visual:
1. Abra o arquivo `frontend/lib/content.ts`.
2. Edite os valores dentro do objeto `SITE_CONTENT`.
3. Rode o build novamente.

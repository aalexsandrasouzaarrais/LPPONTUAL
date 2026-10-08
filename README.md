# 🌟 LANDING PAGE OFICIAL - PONTUAL

Esta pasta contém **todos os arquivos e recursos exclusivos da Landing Page** do sistema **Pontual**, desenvolvida com base no layout da referência visual e nas cores e conteúdos oficiais da sua aplicação.

Você pode **copiar ou mover esta pasta inteira** para qualquer outro local do seu computador ou repositório.

---

## 📁 Estrutura da Pasta

```text
LANDING_PAGE_PONTUAL/
├── CLIQUE_AQUI_PARA_ABRIR_LANDING_PAGE.html   ⭐ Versão autônoma (basta dar 2 cliques)
├── index.html                                 📄 Mesma versão autônoma pronta para hospedagem web
├── INSTRUCOES.txt                             📝 Guia rápido em texto
├── README.md                                  📖 Documentação completa
├── react/                                     ⚛️ Código-fonte em React + TypeScript
│   ├── LandingPage.tsx                        Componente React modular
│   └── landing.css                            Estilos CSS dedicados
└── assets/                                    🎨 Logotipos e imagens da marca Pontual
    ├── logo-pontual-white.png
    ├── logo-pontual-black.png
    ├── logo-pontual-header.png
    └── logo-painel.png
```

---

## 🚀 Como Utilizar

### Modo 1: Abrir no Navegador (Sem Instalar Nada) ⭐
1. Dê um duplo clique no arquivo:
   👉 **`CLIQUE_AQUI_PARA_ABRIR_LANDING_PAGE.html`** (ou **`index.html`**)
2. O site abrirá imediatamente em tela cheia no seu navegador favorito (Google Chrome, Microsoft Edge, Brave, etc.).
3. Todos os ícones, fontes, relógio ao vivo e simulação interativa de ponto no celular funcionam 100% offline e sem dependências externas.

---

### Modo 2: Usar em Projetos React / Next.js / Vite
Se você quiser reaproveitar a Landing Page dentro de outro projeto React:

1. Copie os arquivos da pasta `react/`:
   * `LandingPage.tsx`
   * `landing.css`
2. Certifique-se de ter os ícones do Lucide instalados no projeto de destino:
   ```bash
   npm install lucide-react
   ```
3. Importe e utilize no seu código:
   ```tsx
   import { LandingPage } from './LandingPage';

   export default function App() {
     return (
       <LandingPage 
         onGoToLogin={() => window.location.href = '/login'} 
       />
     );
   }
   ```

---

### Modo 3: Publicar em Servidores Web (Vercel, Netlify, GitHub Pages, Apache)
Basta fazer o upload do arquivo `index.html` (e opcionalmente a pasta `assets/`). Ele funciona como um site estático moderno e ultra rápido.

---

## 🎨 Paleta de Cores Oficial Pontual Utilizada

| Cor | Código HEX | Utilização na Landing Page |
| :--- | :--- | :--- |
| **Vinho Escuro** | `#640C1E` | Sombras profundas, fundos sofisticados e bordas |
| **Bordô / Vinho** | `#9F243C` | Gradientes principais, ícones de destaque e botões |
| **Laranja Solar** | `#F59242` | Acentos vibrantes, badges ativos e transições |
| **Creme / Champagne** | `#F9DE97` | Botões primários (pill), métricas e destaques |
| **Dark Base** | `#08090C` | Fundo luxuoso com iluminação radial |
| **Superfície Clara** | `#F8FAFC` | Fundo dos cards e seções alternadas |

---
*Desenvolvido para o ecossistema Pontual - Gestão de Escalas & Ponto Digital GPS.*

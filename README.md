# VitaTop Landing Page

Uma landing page moderna e responsiva para a VitaTop, focada em profissionais de saúde que buscam soluções naturais para complementar seus tratamentos.

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação e Execução](#instalação-e-execução)
- [Funcionalidades](#funcionalidades)
- [Design System](#design-system)
- [Responsividade](#responsividade)
- [Performance](#performance)
- [SEO](#seo)
- [Contribuição](#contribuição)
- [Licença](#licença)

## 🎯 Visão Geral

Esta landing page foi desenvolvida para apresentar a VitaTop como uma marca confiável de produtos naturais para profissionais de saúde. O site possui:

- **Design moderno** com efeitos glassmorphism
- **Formulário multi-etapas** para captura de leads
- **Layout responsivo** mobile-first
- **Otimização para conversão** com CTAs estratégicos
- **Performance otimizada** com carregamento rápido

## 🛠 Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos com variáveis CSS
- **JavaScript (Vanilla)** - Interatividade e validação de formulários
- **Font Awesome** - Ícones vetoriais
- **Google Fonts** - Tipografia (Poppins)

### Ferramentas de Desenvolvimento
- **Live Server** - Servidor de desenvolvimento
- **HTTP Server** - Servidor estático
- **Git** - Controle de versão

## 📁 Estrutura do Projeto

```
vitatop-landing-page/
├── index.html                 # Página principal
├── package.json              # Configurações do projeto
├── .gitignore               # Arquivos ignorados pelo Git
├── README.md                # Documentação do projeto
└── assets/                  # Recursos estáticos
    ├── css/
    │   └── styles.css       # Estilos principais
    ├── js/
    │   └── script.js        # JavaScript principal
    ├── images/              # Imagens do projeto
    │   ├── logo-horizontal.png
    │   ├── ebook.png
    │   └── loja-mokup.png
    └── fonts/               # Fontes personalizadas (se houver)
```

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js (versão 14 ou superior)
- NPM ou Yarn

### Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/vitatop/landing-page.git
cd vitatop-landing-page
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Execute o servidor de desenvolvimento:**
```bash
npm run dev
```

4. **Acesse no navegador:**
```
http://localhost:8000
```

### Comandos Disponíveis

```bash
npm start      # Inicia servidor HTTP na porta 8000
npm run dev    # Inicia live-server com auto-reload
npm run build  # Processo de build (futuro)
npm run lint   # Verificação de código (futuro)
```

## ⚡ Funcionalidades

### 1. Hero Section
- **Background dinâmico** com imagem e overlay
- **Logo flutuante** com efeito glassmorphism
- **Formulário integrado** multi-etapas
- **Texto persuasivo** com destaque em verde

### 2. Formulário Multi-Etapas
- **Etapa 1:** Coleta de dados pessoais
- **Etapa 2:** Confirmação e validação
- **Validação em tempo real** com feedback visual
- **Integração WhatsApp** para envio de dados
- **Animações suaves** entre etapas

### 3. Seção de Valor
- **3 cards principais** com ícones Font Awesome
- **Gradientes personalizados** em verde
- **Efeitos hover** interativos
- **Layout responsivo** em grid

### 4. Seção eBook
- **Card estilizado** com glassmorphism
- **Logo integrada** no card
- **5 benefícios** organizados em cards
- **Layout assimétrico** (benefícios à esquerda, eBook à direita)

### 5. Footer
- **Grid complexo** com 4 áreas
- **Informações de contato**
- **Links sociais** com ícones
- **Logo centralizada** no grid

## 🎨 Design System

### Paleta de Cores
```css
/* Cores Principais */
--primary-green: #11998E    /* Verde principal */
--accent-green: #38EF7D     /* Verde accent */
--neutral-dark: #2D3748     /* Texto escuro */
--neutral-medium: #6C7881   /* Texto médio */
--neutral-light: #F7FAFC    /* Fundo claro */

/* Cores de Fundo */
--background-page: #FDEFD5  /* Fundo da página */
--background-card: #F2E7CA  /* Fundo do card */
```

### Tipografia
- **Fonte Principal:** Poppins (Google Fonts)
- **Pesos:** 300, 400, 500, 600, 700
- **Hierarquia:** Títulos em verde, subtítulos em cinza

### Espaçamentos
```css
--spacing-xs: 8px
--spacing-sm: 12px
--spacing-md: 16px
--spacing-lg: 24px
--spacing-xl: 32px
--spacing-2xl: 48px
--spacing-3xl: 64px
```

### Efeitos Visuais
- **Glassmorphism:** Backdrop-filter com transparência
- **Gradientes:** Verde em múltiplas direções
- **Sombras:** Múltiplas camadas para profundidade
- **Transições:** Cubic-bezier para movimento natural

## 📱 Responsividade

### Breakpoints
```css
/* Mobile First */
@media (max-width: 480px)           /* Mobile pequeno */
@media (min-width: 481px) and (max-width: 768px)  /* Mobile grande */
@media (min-width: 769px) and (max-width: 1024px) /* Tablet */
@media (min-width: 1025px)          /* Desktop */
@media (min-width: 1440px)          /* Desktop grande */
```

### Adaptações por Dispositivo
- **Mobile:** Layout em coluna única, logos menores
- **Tablet:** Grid 2 colunas, tamanhos intermediários
- **Desktop:** Layout completo, efeitos hover

## ⚡ Performance

### Otimizações Implementadas
- **CSS minificado** e organizado
- **Imagens otimizadas** (PNG com compressão)
- **Fontes web** carregadas de CDN
- **JavaScript vanilla** sem dependências pesadas
- **Lazy loading** para imagens (futuro)

### Métricas de Performance
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1

## 🔍 SEO

### Meta Tags
```html
<title>VitaTop - Cuidado Natural para Profissionais de Saúde</title>
<meta name="description" content="Descubra como a VitaTop oferece soluções inovadoras e acessíveis para complementar a saúde e o bem-estar, com a qualidade que você, profissional de saúde, busca.">
```

### Estrutura Semântica
- **HTML5 semântico** com tags apropriadas
- **Alt text** em todas as imagens
- **Hierarquia de headings** (H1, H2, H3, H4)
- **ARIA labels** para acessibilidade

## 🧪 Testes

### Validação de Formulário
- **Campos obrigatórios** com validação
- **Formato de email** verificado
- **Telefone** formatado automaticamente
- **Feedback visual** para erros

### Compatibilidade
- **Chrome/Edge:** 100% compatível
- **Firefox:** 100% compatível
- **Safari:** 100% compatível
- **Mobile browsers:** 100% compatível

## 🚀 Deploy

### Opções de Deploy
1. **GitHub Pages:** Deploy automático
2. **Netlify:** Deploy com preview
3. **Vercel:** Deploy com otimizações
4. **Servidor próprio:** Upload via FTP

### Comandos de Deploy
```bash
# Build para produção
npm run build

# Deploy para GitHub Pages
npm run deploy
```

## 🤝 Contribuição

### Como Contribuir
1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrões de Código
- **CSS:** BEM methodology
- **JavaScript:** ES6+ com comentários
- **HTML:** Semântico e acessível
- **Commits:** Conventional Commits

## 📝 Changelog

### v1.0.0 (2025-01-02)
- ✅ Landing page inicial
- ✅ Formulário multi-etapas
- ✅ Design responsivo
- ✅ Integração WhatsApp
- ✅ Efeitos glassmorphism
- ✅ SEO básico

## 🐛 Problemas Conhecidos

- [ ] Otimização de imagens para WebP
- [ ] Implementação de PWA
- [ ] Analytics e tracking
- [ ] Testes automatizados

## 📞 Suporte

Para dúvidas ou suporte:
- **Email:** contato@vitatop.com
- **WhatsApp:** (43) 9 9999-9999
- **Issues:** [GitHub Issues](https://github.com/vitatop/landing-page/issues)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido com ❤️ para a VitaTop**

*Transformando conhecimento em renda extra para profissionais de saúde*

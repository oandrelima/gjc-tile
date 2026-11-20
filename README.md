# GJC Tile Inc. — Premium & Modern Redesign

Projeto de extração de dados e redesign completo do site oficial da [GJC Tile Inc.](https://www.gjctile.com/) com uma estética **ultra-premium, moderna e de alta conversão**, projetada especificamente para o mercado imobiliário e de reformas de alto padrão de **Tampa Bay, Flórida**.

---

## 💎 Destaques do Redesign

1. **Estética de Luxo & Design System**:
   - Paleta de cores sofisticada: *Obsidian Dark* (`#080B10`), *Champagne Gold* (`#CCA43B`), *Deep Surface Navy* (`#0F1523`), *Crisp White/Marble* com sutis reflexos e efeitos de vidro fosco (*glassmorphism*).
   - Tipografia editorial refinada combinando **Playfair Display**, **Cinzel** e **Plus Jakarta Sans**.
   - Fotografia em alta resolução de projetos reais do cliente, sem perda de qualidade.

2. **Funcionalidades Interativas Modernas**:
   - **Calculadora Instantânea de Estimativa**: Permite ao cliente simular faixas de custo preliminares por m² (Walk-In Shower, Banheiro Completo, Backsplash, Pisos de Porcelanato) com seleção de materiais.
   - **Galeria Interativa Filtrável**: Portfólio de 16 projetos reais com filtros instantâneos por categoria (Banheiros, Chuveiros, Cozinhas, Pisos, Comercial) e *Lightbox Fullscreen* para inspecionar os detalhes dos acabamentos.
   - **Formulário de Agendamento & Modal de Estimativa Rápida**: Totalmente integrado com seleção de serviço, timeline e botão de chamada direta para Geraldo Silva.
   - **Seção de Prova Social & Avaliações Google**: Destaque para a nota 5.0 estrelas, depoimentos reais e badges das avaliações do Google.
   - **Acordeão de Perguntas Frequentes (FAQ)**: Respostas transparentes sobre impermeabilização Schluter/Hydro-Ban, prazos, garantias e preparação.
   - **Barra de Ação Rápida Mobile**: Botões fixos de chamada direta e solicitação de orçamento para visitantes em smartphones.

---

## 📁 Estrutura de Arquivos

```text
├── index.html                   # Site completo, moderno e responsivo
├── server.mjs                   # Servidor de preview local em Node.js
├── gjc_extracted_data.json      # Base de dados estruturada com 100% das informações extraídas
├── images/                      # 63 imagens originais em alta resolução baixadas do site
│   ├── eccf2d_48a33eb0...~mv2.png   # Logo transparente GJC Tile Inc.
│   ├── eccf2d_07b6546b...~mv2.jpg   # Banheiros de luxo (1536x2048)
│   ├── eccf2d_5e84611fa...~mv2.jpg  # Chuveiros customizados (1536x2048)
│   ├── eccf2d_28ee8186...~mv2.jpg   # Cozinha e backsplashes (1536x2048)
│   ├── eccf2d_6076702b...~mv2.jpg   # Pisos de grande formato (1536x2048)
│   └── ...                          # Badges, avaliações Google e imagens de artigos
├── parsed_blog_feed.json        # 20 artigos reais do blog do proprietário Geraldo Silva
```

---

## 🚀 Como Visualizar

Você pode abrir diretamente o arquivo `index.html` em qualquer navegador ou iniciar o servidor local:

```bash
# Iniciar o servidor local:
node server.mjs
```

Acesse no navegador:
👉 **http://localhost:3000**

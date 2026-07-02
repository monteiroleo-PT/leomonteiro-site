# Leo Monteiro — Demo do site novo

Demo privada do site renovado para [leomonteiro.pt](https://leomonteiro.pt), construída em HTML/CSS puro com base no posicionamento estratégico Taguspark + dor de coluna.

## Como pré-visualizar (rápido, sem deploy)

1. Descomprime o ficheiro ZIP numa pasta no teu computador
2. Faz duplo-clique em **`index.html`**
3. Abre no teu browser
4. Navega entre as páginas usando o menu

Tudo funciona offline. Não precisas de instalar nada.

## Estrutura

```
leomonteiro-demo/
├── index.html          → Home page
├── sobre.html          → Página Sobre
├── corporate.html      → Página para empresas (B2B)
├── contactos.html      → Página de contactos
├── styles.css          → Sistema de design partilhado
├── leo-monteiro.jpg    → Foto profissional
├── robots.txt          → Bloqueio de motores de busca
├── DEPLOY.md           → Guia para colocar online (Netlify)
└── README.md           → Este ficheiro
```

## Características técnicas

- **Sem dependências:** HTML/CSS puro. Funciona em qualquer browser moderno.
- **Mobile-first responsive:** Adapta-se a telemóvel, tablet e desktop.
- **SEO completo:** Title, meta description, Open Graph e schema JSON-LD em cada página.
- **Performance otimizada:** ~30KB de CSS, fontes via Google Fonts com preconnect, sem JavaScript pesado.
- **Acessibilidade:** Skip links, ARIA labels, contraste adequado, navegação por teclado.
- **Privacidade:** `robots.txt` bloqueia indexação. `<meta robots="noindex">` em cada página.

## Sistema de design

- **Cores:** Azul-petróleo (#1E4A5C), turquesa (#3A8B9E), coral (#E07856), creme (#FAF7F2)
- **Tipografia:** Cormorant Garamond (display) + DM Sans (body)
- **Layout:** Editorial moderno, máximo 1280px, padding generoso

## Próximos passos

1. Abre as 4 páginas localmente para avaliar
2. Lê o ficheiro `DEPLOY.md` se quiseres pôr online num link privado
3. Anota o que queres ajustar (textos, cores, layout)
4. Decidimos juntos: avançar com esta direção ou ajustar

---

Construído como demo de avaliação. Não para produção sem revisão.

# Guia de Deploy — Colocar a demo online no Netlify

> **Objetivo:** colocar a demo num URL privado (não-indexado) que possas partilhar.
> **Tempo necessário:** 10-15 minutos.
> **Custo:** gratuito.

---

## Antes de começares

A demo está pronta a usar **localmente** — basta abrir `index.html` no browser. Só precisas fazer este deploy se quiseres:

- Aceder à demo a partir do telemóvel sem transferir ficheiros
- Mostrar a demo a alguém (família, RH de empresa, designer)
- Testar a versão mobile real (não só simulada)

Se só queres ver no teu computador, **podes ignorar este guia** e voltar à conversa.

---

## Passo 1 — Criar conta no Netlify (grátis, 2 minutos)

1. Vai a **https://www.netlify.com**
2. Clica em **"Sign up"** (canto superior direito)
3. Escolhe **"Sign up with email"** (mais simples) ou usa o Google/GitHub se preferires
4. Confirma o email se necessário

**Importante:** o plano gratuito é mais que suficiente para esta demo. Não precisas de cartão de crédito.

---

## Passo 2 — Fazer deploy por drag-and-drop (3 minutos)

A forma mais simples de pôr o site online:

1. Depois de logado, vais ao **Dashboard** do Netlify
2. Procura a secção que diz **"Add new site"** → clica
3. Escolhe **"Deploy manually"** (ou "Drag and drop")
4. Aparece uma área grande com texto "Drag and drop your site output folder here"
5. **Volta à pasta `leomonteiro-demo` no teu computador**
6. **Seleciona todos os ficheiros** dentro da pasta (Ctrl+A no Windows, Cmd+A no Mac)
7. **Arrasta os ficheiros para a área do Netlify**
8. Aguarda 30-60 segundos enquanto o Netlify processa

Quando terminar, vais ver o URL do site — algo como:

```
https://random-name-12345.netlify.app
```

**Está online!** Abre o URL para confirmar que funciona.

---

## Passo 3 — Mudar o nome do URL (opcional)

O URL automático tem palavras aleatórias. Para algo mais reconhecível:

1. No dashboard do site, vai a **"Site settings"** (ou "Domain management")
2. Procura **"Change site name"**
3. Escreve um nome — sugestões:
   - `leomonteiro-preview`
   - `leomonteiro-demo`
   - `leo-novo-site`
4. Guarda

O URL fica então:

```
https://leomonteiro-preview.netlify.app
```

(se esse nome estiver disponível — se não, escolhe outro)

---

## Passo 4 — Confirmar privacidade

A demo já vem configurada para **não aparecer no Google**:

- Tem `robots.txt` a bloquear todos os motores de busca
- Cada página tem `<meta name="robots" content="noindex, nofollow">`

**Como confirmar:**

1. Abre o URL final em janela anónima
2. Verifica que carrega normalmente
3. Pesquisa no Google: `site:leomonteiro-preview.netlify.app`
4. Não deve aparecer nada (pode demorar dias até o Google rastrear, mas o bloqueio impede indexação)

---

## Passo 5 — Partilhar

O URL final é o teu link privado. Podes:

- Abrir no teu telemóvel para ver responsive real
- Enviar a alguém para feedback
- Testar com diferentes browsers
- Usar como referência ao mostrar a RHs ou clientes

---

## Atualizações futuras

Quando quiseres mudar algo no site:

1. Edita os ficheiros HTML/CSS no teu computador
2. Vai ao Netlify → site → **Deploys**
3. Arrasta a pasta inteira **outra vez** para fazer novo deploy
4. O site atualiza-se automaticamente em 30-60 segundos

---

## Problemas comuns

### "O site mostra a página em branco"
- Verifica que arrastaste **os ficheiros** (não a pasta que os contém)
- Confirma que o `index.html` está na raiz

### "A foto não aparece"
- Confirma que o ficheiro `leo-monteiro.jpg` foi incluído no upload
- Verifica que o nome está exatamente igual (sem maiúsculas/minúsculas trocadas)

### "As fontes não carregam"
- Algumas redes corporativas bloqueiam Google Fonts
- O site continua funcional mas com fontes de sistema (fallback)

### "Quero remover o site"
- Site settings → General → **Delete this site** (no fundo da página)

---

## Próximo passo

Depois de teres a demo online (ou só local), volta à conversa.

Vou pedir-te para avaliares:
- O que funciona bem
- O que querias diferente
- Se queres avançar com esta direção ou ajustar

A partir daí decidimos se migramos `leomonteiro.pt` para esta nova estrutura, ou se ajustamos primeiro.

Boa avaliação.

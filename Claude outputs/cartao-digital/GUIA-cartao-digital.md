# Cartão de visita digital, QR e NFC

Guia prático para o cartão em `leomonteiro.pt/cartao`.

---

## O que foi criado

| Ficheiro | Onde ficou | Para que serve |
|---|---|---|
| `cartao.astro` | `src/pages/` | A página do cartão |
| `leonardo-monteiro.vcf` | `public/` | O contacto que o botão "Guardar contacto" descarrega |
| `cartao-qr.svg` | `public/` | O QR que aparece dentro da própria página |
| `leo-avatar.jpg` | `public/` | Foto recortada em quadrado, leve, para carregar depressa |
| `_headers` | `public/` | Diz ao Netlify que o `.vcf` é um contacto, não um ficheiro qualquer |
| Pasta `qr/` | `Claude outputs/cartao-digital/` | Os QR em alta resolução para imprimir |

O endereço do cartão é sempre o mesmo: **https://leomonteiro.pt/cartao**

Este endereço nunca muda. É isso que torna o sistema seguro: se amanhã mudar de telefone, de sala ou de horário, edita a página e todos os cartões já impressos e todas as tags já gravadas continuam certos.

---

## Os ficheiros de QR, qual usar em cada caso

Estão em `Claude outputs/cartao-digital/qr/`.

| Ficheiro | Quando usar |
|---|---|
| `cartao-qr-vetor-fundo-branco.svg` | **Para a gráfica.** É vetor, ou seja, não perde qualidade seja qual for o tamanho. É este que envia para quem imprime cartões. |
| `cartao-qr-vetor-transparente.svg` | Igual, mas sem fundo. Útil se o designer quiser pôr sobre uma cor clara. |
| `cartao-qr-com-logo-2000px.png` | O mais bonito, com o bambu ao centro. Para Instagram, apresentações, slides, folheto. |
| `cartao-qr-simples-2000px.png` | Versão limpa, sem logo. Para quando o espaço é pequeno. |

Todos foram testados e lêem corretamente, inclusive reduzidos a 300 pixéis.

### Regras para o QR não falhar

- **Tamanho mínimo de impressão: 2 cm de lado.** Abaixo disso a câmara do telemóvel tem dificuldade.
- **Deixar margem branca à volta.** Já vem incluída no ficheiro, não a corte.
- **Não esticar.** Tem de ficar sempre quadrado.
- **Não inverter as cores.** O escuro tem de ser o escuro, o claro o claro.

---

## As tags NFC

### O que comprar

Procure por **"NTAG215 NFC tag"** no Amazon.es, no Amazon.com ou no AliExpress.

- **NTAG215** é o modelo certo. Tem 504 bytes, espaço de sobra para o link.
- Evite as NTAG213, são mais baratas mas mais apertadas.
- Formatos úteis: autocolante redondo de 25 mm para colar na secretária ou atrás do telemóvel, e cartão de PVC do tamanho de um cartão de crédito para dar na mão.
- Custo de referência: 10 a 20 euros por 10 unidades.

Atenção a um detalhe: **NFC não funciona bem colado a metal.** Se quiser colar numa superfície metálica, compre tags "anti-metal" ou "on-metal", que trazem uma camada de ferrite.

### Como gravar o link na tag

Precisa de uma aplicação gratuita. As duas de referência são **NFC Tools** (iPhone e Android) e **NFC TagWriter by NXP** (Android).

Com o NFC Tools:

1. Instale a app e abra-a.
2. Toque em **Escrever** (Write).
3. Toque em **Adicionar um registo** (Add a record).
4. Escolha **URL / URI**.
5. Escreva exatamente: `https://leomonteiro.pt/cartao`
6. Toque em **OK** e depois em **Escrever / 1 registo**.
7. Encoste a tag à parte de trás do telemóvel, na zona da câmara, e mantenha uns segundos até aparecer "Escrita concluída".

Repita para cada tag.

### Bloquear a tag, opcional mas recomendado

Na mesma app, em **Outros** (Other), existe **Bloquear tag** (Lock tag). Isto impede que alguém reescreva o link. É irreversível, por isso só faça depois de testar que a tag abre a página certa.

Se der tags a clientes ou deixar uma na sala de espera, vale a pena bloquear. Se for uma tag só sua, pode deixar aberta para poder mudar depois.

### Como testar

- **iPhone 7 ou mais recente**: com o ecrã ligado e desbloqueado, encoste o topo do telemóvel à tag. Aparece uma notificação com o link.
- **Android**: verifique que o NFC está ligado nas Definições, depois encoste a zona central das costas do telemóvel à tag.

Se não funcionar à primeira, mexa ligeiramente a posição. A antena NFC não está no mesmo sítio em todos os modelos.

---

## Onde usar cada coisa

| Situação | O que usar |
|---|---|
| Cartão de papel que dá em eventos | QR impresso no verso |
| Alguém à sua frente, com telemóvel na mão | Tag NFC no bolso ou na secretária, encosta e está |
| Assinatura de email | O link em texto, não o QR |
| Instagram, bio | O link |
| Vidro ou porta do consultório | QR impresso, tamanho 5 cm ou mais para ler à distância |
| Apresentação a uma empresa, último slide | QR grande com logo |
| Crachá em congresso | Tag NFC colada atrás |

Ter os dois faz sentido. O NFC é mais elegante mas depende do modelo de telemóvel da outra pessoa. O QR funciona sempre.

---

## Manutenção

Quando algum dado mudar, o que se altera é sempre a página, nunca os QR nem as tags.

- **Horário, morada, telefone**: editar `src/pages/cartao.astro`.
- **Dados que ficam guardados nos contactos de quem clica em "Guardar contacto"**: editar `public/leonardo-monteiro.vcf`. É um ficheiro de texto simples, abre no VS Code.

Depois é publicar como sempre, e em dois minutos está atualizado para toda a gente.

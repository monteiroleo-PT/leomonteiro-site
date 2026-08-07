# Regras de escrita e trabalho neste projeto

Site de Leonardo Monteiro, acupuntor clínico no Taguspark, Porto Salvo, Oeiras.
Astro + Tailwind, publicado no Netlify a partir do push para `main`.

## Escrita

**Nunca usar travessões.** Nada de `—` em texto visível ou em comentários.
Onde a ideia precisa de pausa, usar vírgula, dois pontos ou ponto final.
Esta é a regra mais importante deste ficheiro e já foi pedida várias vezes.

Outras regras:

- Português europeu sempre. Nunca formas brasileiras (crônica, controle, gestação, manejo, eletrônico).
- Linguagem de leigo. Se um termo técnico for inevitável, explicá-lo na mesma frase.
- Termos coloquiais ou aproximados vão entre aspas: um "formigueiro", testes "neurológicos", pontinhos "trigger".
- Nunca escrever "nós de tensão". Usar pontinhos "trigger".
- Frases curtas. Sem hipérbole, sem adjetivos de marketing, sem promessas de cura.
- Explicar o mecanismo antes de propor a solução.

## Enquadramento profissional

Leonardo Monteiro é **acupuntor clínico**, não médico. Cédula profissional
C-05000400, registo ERS E143188.

- Não escrever nada que sugira "ato médico", reserva de mercado ou subordinação a outra profissão.
- A acupuntura é regulamentada em Portugal: licenciatura de quatro anos, estágios, cédula emitida pela ACSS, locais registados na ERS.
- Sinais de alerta clínicos (cauda equina, febre com dor, perda de peso inexplicada) mantêm-se por segurança do doente, enquadrados como cuidado clínico e não como deferência.
- Não mencionar agulhamento seco / dry needling.

## Dados fixos

| Campo | Valor |
|---|---|
| Nome | Leo Monteiro - Acupuntura |
| Email | info@leomonteiro.pt (o antigo `leo@` foi descontinuado) |
| Telefone / WhatsApp | +351 916 345 523 |
| Morada | Taguspark, Edifício Núcleo Central, 3º Piso, Sala 340, 2740-122 Porto Salvo, Oeiras |
| Horário | Segunda a quinta, 10h00 às 17h00 |
| Instagram | instagram.com/leomonteiropt |
| Sessões | Uma a três por semana no início; tratamento ativo de um a três meses |

Manter estes valores coerentes em todas as páginas e no schema do `Layout.astro`.

## Cores e tipografia

`--ink #1E4A5C` · `--ink-deep #143847` · `--teal #3A8B9E` · `--coral #E07856`
`--cream #FAF7F2` · `--cream-warm #F4EFE6`. Tipografia: Montserrat.

Em SVG, nada de texto abaixo de 14px.

## Fluxo de publicação

O `npm run build` encrava na máquina do Leo. **Não pedir builds locais.**
Publicar com `git add -A && git commit -m "..." && git push` e deixar o Netlify
compilar. Um deploy falhado não substitui o site em produção.

Agrupar alterações e fazer um só push, para não gastar deploys.

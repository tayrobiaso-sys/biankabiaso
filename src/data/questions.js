export const questions = [
  {
    label: 'Pergunta 1 de 6',
    text: 'Ao observar seu corpo de frente, como você descreveria a relação entre ombros e quadril?',
    opts: [
      { txt: 'Ombros e quadril alinhados, cintura visível entre eles', scores: { A: 2 } },
      { txt: 'Quadril notavelmente mais amplo que os ombros', scores: { T: 2 } },
      { txt: 'Ombros notavelmente mais amplos que o quadril', scores: { I: 2 } },
      { txt: 'Linhas uniformes — ombros, cintura e quadril com medidas próximas', scores: { R: 2 } },
      { txt: 'O volume central torna difícil perceber essa proporção', scores: { O: 2 } },
    ],
  },
  {
    label: 'Pergunta 2 de 6',
    text: 'Sua cintura é naturalmente definida em relação ao restante do corpo?',
    opts: [
      { txt: 'Sim, bem marcada — entra nitidamente entre o busto e o quadril', scores: { A: 2 } },
      { txt: 'Levemente perceptível, mas não é o ponto mais marcante', scores: { T: 1, I: 1 } },
      { txt: 'Pouco perceptível — meu tronco é mais tubular', scores: { R: 2 } },
      { txt: 'O volume na região central interfere na definição', scores: { O: 2 } },
      { txt: 'Varia muito conforme a fase do corpo', scores: { R: 1, O: 1 } },
    ],
  },
  {
    label: 'Pergunta 3 de 6',
    text: 'Quando seu corpo muda ou ganha volume, onde ele se concentra primeiro?',
    opts: [
      { txt: 'De forma equilibrada — cintura e quadril crescem proporcionalmente', scores: { A: 2 } },
      { txt: 'Quadris, coxas e glúteos', scores: { T: 2 } },
      { txt: 'Ombros, costas e região do busto', scores: { I: 2 } },
      { txt: 'Uniformemente, sem área de concentração definida', scores: { R: 2 } },
      { txt: 'Abdômen e flancos — região central do corpo', scores: { O: 2 } },
    ],
  },
  {
    label: 'Pergunta 4 de 6',
    text: 'Ao experimentar uma calça de cintura marcada, o que geralmente acontece?',
    opts: [
      { txt: 'Veste bem na cintura e no quadril ao mesmo tempo', scores: { A: 2 } },
      { txt: 'Fecha no quadril, mas sobra na cintura', scores: { T: 2 } },
      { txt: 'Fecha na cintura, mas o quadril fica folgado', scores: { I: 2 } },
      { txt: 'Cintura e quadril têm medidas próximas — sobe sem ajuste', scores: { R: 2 } },
      { txt: 'O abdômen pressiona mesmo em numerações maiores', scores: { O: 2 } },
    ],
  },
  {
    label: 'Pergunta 5 de 6',
    text: 'Qual situação você reconhece com mais frequência ao se vestir?',
    opts: [
      { txt: 'Com roupas largas, perco completamente minha silhueta', scores: { A: 2 } },
      { txt: 'Blusa e calça raramente vestem no mesmo tamanho', scores: { T: 2 } },
      { txt: 'O ombro nunca fecha corretamente nas blusas estruturadas', scores: { I: 2 } },
      { txt: 'As roupas ficam sem forma no meu corpo — tudo fica tubular', scores: { R: 2 } },
      { txt: 'O abdômen fica evidenciado mesmo em peças maiores', scores: { O: 2 } },
    ],
  },
  {
    label: 'Pergunta 6 de 6',
    text: 'O que você mais deseja conseguir com o seu guarda-roupa?',
    opts: [
      { txt: 'Realçar minhas curvas com elegância e sem exagero', scores: { A: 2 } },
      { txt: 'Equilibrar visualmente quadril e ombros — criar harmonia', scores: { T: 2 } },
      { txt: 'Suavizar a largura dos ombros e valorizar a parte inferior', scores: { I: 2 } },
      { txt: 'Criar a ilusão de curvas e definição de cintura', scores: { R: 2 } },
      { txt: 'Alongar o corpo e redefinir o centro visualmente', scores: { O: 2 } },
    ],
  },
]
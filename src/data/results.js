import { questions } from './questions'

export const results = {
  A: {
    type: 'Tipo Ampulheta',
    sub: 'Equilíbrio e proporção natural',
    text: 'Seu corpo já carrega o equilíbrio que muitas mulheres buscam através da roupa. Ombros e quadril alinhados, cintura naturalmente definida — sua silhueta é considerada a proporção clássica da moda e da alfaiataria. O seu desafio não é criar forma, mas preservá-la. Roupas que apagam sua cintura roubam sua principal força visual. Peças estruturadas, cinturas marcadas e tecidos com caimento são seus melhores aliados.',
    princ: [
      'Priorize peças que marquem a cintura — esse é o seu ponto de poder visual',
      'Tecidos com caimento estruturado valorizam sem adicionar volume desnecessário',
      'Evite sobreposições sem intenção — elas distorcem o que já é naturalmente harmônico',
      'Decotes que equilibrem busto e quadril funcionam com consistência',
    ],
  },

  T: {
    type: 'Tipo Triangular',
    sub: 'Estrutura de base — elegância na proporção',
    text: 'Sua base é ampla, estruturada, feminina — e isso é um recurso estratégico, não uma limitação. Com quadril mais amplo que os ombros, sua arquitetura corporal pede equilíbrio visual: trabalhar a parte superior para criar harmonia com a base. O objetivo não é esconder — é distribuir o olhar com intenção e construir a proporção que o seu estilo merece.',
    princ: [
      'Invista em estrutura, volume e detalhes na parte superior do corpo',
      'Decotes horizontais e ombros levemente estruturados ampliam visualmente o topo',
      'Na parte inferior, prefira tecidos com caimento liso e paleta neutra',
      'Evite volume, babados e estampas expressivas na região do quadril e coxas',
    ],
  },

  I: {
    type: 'Tipo Invertida',
    sub: 'Presença no ombro — estratégia na base',
    text: 'Seus ombros têm presença, estrutura, força visual. Com a parte superior mais ampla que o quadril, você carrega naturalmente a postura de quem comanda. O equilíbrio aqui vem de valorizar a base enquanto suaviza a ênfase no topo. A chave é criar massa visual na parte inferior sem adicionar volume ao ombro.',
    princ: [
      'Prefira decotes em V, U ou assimétricos — criam verticalidade e suavizam ombros',
      'Saias midi com volume e calças de corte largo são aliados estruturais',
      'Evite ombros estruturados, detalhes horizontais e volumes excessivos no busto',
      'Adicione cor, estampa e textura na parte inferior para reequilibrar a silhueta',
    ],
  },

  R: {
    type: 'Tipo Retilínea',
    sub: 'A liberdade de construir sua silhueta',
    text: 'Linhas uniformes, silhueta mais reta, proporções equilibradas — este é o corpo para o qual a maioria das roupas é cortada. Você tem a liberdade de criar curvas ou eliminá-las conforme o posicionamento que deseja transmitir. Cinturas marcadas, sobreposições e texturas funcionam sem distorção. Sua arquitetura corporal é uma tela — você tem mais liberdade de estilo do que imagina.',
    princ: [
      'Cinturas marcadas e cintos criam a ilusão de um corpo mais curvilíneo',
      'Sobreposições e volumes estratégicos funcionam sem distorcer a silhueta',
      'Texturas, recortes e estampas são aliados — o corpo absorve com facilidade',
      'Experimente peças que outras silhuetas não conseguem sustentar — você consegue',
    ],
  },

  O: {
    type: 'Tipo Oval',
    sub: 'Verticalidade e direcionamento do olhar',
    text: 'Seu volume se concentra no centro do corpo, e sua estratégia de imagem é sobre direcionamento do olhar — verticalmente. A silhueta oval é sofisticada quando trabalhada com intenção: linhas que alongam, tecidos que fluem, posicionamento estratégico do ponto focal para criar autoridade visual a partir de cima.',
    princ: [
      'Decotes que abrem o rosto e alongam o pescoço posicionam o foco no lugar certo',
      'Cinturas marcadas logo abaixo do busto — não na linha natural — elevam o ponto focal',
      'Prefira tecidos com caimento e movimento — evite estruturados que comprimem',
      'Evite cintos na barriga, estampas horizontais e volumes centralizados',
    ],
  },
}

export function computeResult(answers) {
  const scores = { A: 0, T: 0, I: 0, R: 0, O: 0 }

  answers.forEach((ai, qi) => {
    if (ai === null || !questions[qi]) return
    const s = questions[qi].opts?.[ai]?.scores
    if (!s) return
    Object.keys(s).forEach(k => scores[k] += s[k])
  })

  const winner = Object.keys(scores)
    .reduce((a, b) => scores[a] >= scores[b] ? a : b)

  return results[winner]
}
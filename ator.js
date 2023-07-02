let yAtor = 590;
let xAtor = 500;
let colisao = false; // personagem nasce embaixo, portanto no início do jogo não tem colisão
let meusPontos = 0;

function mostraAtor() {
  imagemDaEstrada(imagemDoAtor, xAtor, yAtor, 30, 30);
  print(yAtor);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) { // Limita a movimentação do ator para que não passe do limite da tela
      yAtor += 3;
    }
  }
}

function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor, 15);
    if (colisao) {
      voltaAtorPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()) {
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorPosicaoInicial() {
  yAtor = 590;
}

// desenha o placar na tela
function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, width / 5, 35); // define a posição onde aparece o texto
}

// faz a alteração dos pontos
function marcaPonto() {
  if (yAtor < 15) { // define uma posição específica que o ator alcança ao marcar os pontos
    meusPontos += 1;
    somDosPontos.play();
    voltaAtorPosicaoInicial();
  }
}

function pontosMaiorQueZero() {
  return meusPontos > 0;
}

function podeSeMover() { // Verifica se o ator está na posição inicial
  return yAtor === 590;
}

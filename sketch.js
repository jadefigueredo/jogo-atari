function setup() {
  createCanvas(1000, 620);
  somDaTrilha.loop();
}

function draw() {
  background(0);
  image(imagemDaEstrada, 0, 0);
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPontoPartida();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}
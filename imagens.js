// Imagens do jogo
let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro1;
let imagemDoCarro2; 
let imagemDoCarro3;

// Sons do jogo
let somDaTrilha;
let somDosPontos;
let somDaColisao;

function preload() {
  somDaTrilha = loadSound("imgs/trilha.mp3");
  somDosPontos = loadSound("imgs/pontos.wav");
  somDaColisao = loadSound("imgs/colidiu.mp3");
  imagemDaEstrada = loadImage("imgs/estrada.png");
  imagemDoAtor = loadImage("imgs/ator-1.png");
  imagemDoCarro1 = loadImage("imgs/carro-1.png");
  imagemDoCarro2 = loadImage("imgs/carro-2.png");
  imagemDoCarro3 = loadImage("imgs/carro-3.png");
  imagemCarros = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3, imagemDoCarro1, imagemDoCarro2, imagemDoCarro3 ];
}
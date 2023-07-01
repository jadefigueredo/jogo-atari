  function setup() {
    createCanvas(500, 400);
  }
  
  function draw() {
    background(0);
    image(imagemDaEstrada, 0, 0);
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
    image(imagemDoCarro1, xCarro1, yCarro1, 40, 30);
    movimentaCarro();
    movimentaAtor();
  }
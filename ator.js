  // variáveis ator
  let yAtor = 366;
  let xAtor = 100;
  
  function movimentaAtor(){
    if(keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
    if(keyIsDown(DOWN_ARROW)){
      yAtor += 3;
    }
  }
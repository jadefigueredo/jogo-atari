let yCarros = [60, 120, 200, 300, 400, 500];
let xCarros = [1000, 1000, 1000, 1000, 1000, 1000];
let velocidadeCarros = [2.5, 3.5, 4, 4.5, 5, 6];
let alturaCarros = 30;
let comprimentoCarros = 40;

function mostraCarro(){
    for (let i = 0; i < imagemCarros.length; i++){ // mede tamanho da lista e soma mais um
        image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
    }
}

function movimentaCarro(){
    for (let i = 0; i < imagemCarros.length; i++){
        xCarros[i] -= velocidadeCarros[i]; 
    }  
}

function voltaPontoPartida(){
    for (let i = 0; i < imagemCarros.length; i++){
        if (passouTodaTela(xCarros[i])){ 
                xCarros[i] = 1000;
        }
    }
}

function passouTodaTela(xCarros){
   return xCarros < -50;
}
  
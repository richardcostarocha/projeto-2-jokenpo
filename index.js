var continuar = "s";
var reescolha = 1;
var vitorias = 0;
var vitoriasComputador = 0;
var ganhador = 0;
for(; continuar !== "n";){
    let jogadas = prompt("digite quantas jogadas vc deseja jogar? ");
    for(let i = 0; i < jogadas; i++){
      var escolha = prompt("escolha entre pedra, papel e tesoura: ");
      for(;reescolha === 1;){
        if(escolha === "pedra"){
          escolha = 0;
          reescolha = 0;
        }else if (escolha === "papel"){
          escolha = 1;
          reescolha = 0;
        }else if (escolha === "tesoura"){
          escolha = 2;
          reescolha = 0;
        }else {
          reescolha = 1;
          console.log("escolha invalida!");
          var escolha = prompt("escolha entre pedra, papel e tesoura: ");
        }
      }
      reescolha = 1;
      let computador = Math.floor(Math.random() * (2 - 0 + 1) + 0);
      if(escolha === 0 && computador === 0){
        console.log("pedra com pedra é impate!")
      }else if(escolha === 0 && computador === 1){
        console.log("pedra com papel é derrota!")
        vitoriasComputador++;
      }else if(escolha === 0 && computador === 2){
        console.log("pedra com tesoura é vitória!")
        vitorias++;
      }else if(escolha === 1 && computador === 0){
        console.log("papel com pedra é vitória!")
        vitorias++;
      }else if(escolha === 1 && computador === 1){
        console.log("papel com papel é impate!")
      }else if(escolha === 1 && computador === 2){
        console.log("papel com tesoura é derrota!")
        vitoriasComputador++;
      }else if(escolha === 2 && computador === 0){
        console.log("tesoura com pedra é derrota!")
        vitoriasComputador++;
      }else if(escolha === 2 && computador === 1){
        console.log("tesoura com papel é vitória!")
        vitorias++;
      }else if(escolha === 2 && computador === 2){
        console.log("tesoura com tesoura é impate!")
      }
    }
    console.log(vitorias);
    console.log(vitoriasComputador);
    if (vitorias > vitoriasComputador){
      console.log("vc é o grande ganhador!");
    }else if (vitorias < vitoriasComputador){
      console.log("o computador é o grande ganhador!")
    }else {
      console.log("deu empate!")
    }
    vitorias=0;
    vitoriasComputador=0;
    continuar = prompt("deseja continuar jogando? (s/n) ");
      if(continuar === "N"){
      continuar = "n";
    }
}
function sleep(n) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
}
var continuar = "s";
var vitorias = 0;
var vitoriasComputador = 0;
for(; continuar !== "n";){
  let tabelajogador = []
  let tabelacomputador = []
  let tabelaresultado = []
    var jogadas = prompt("digite quantas jogadas vc deseja jogar? "); 
    console.clear();
    for(let i = 0; i < jogadas; i++){
      var escolha = prompt("escolha entre pedra, papel e tesoura: ");
      let reescolha = 1;
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
          var escolha = prompt("escolha novamente entre pedra, papel e tesoura: ");
        }
      }
      tabelajogador.push(escolha);
      let computador = Math.floor(Math.random() * (2 - 0 + 1) + 0);
      tabelacomputador.push(computador);
      if(escolha === 0 && computador === 0){
        console.log("pedra com pedra é impate!")
        tabelaresultado.push("impate ")
      }else if(escolha === 0 && computador === 1){
        console.log("pedra com papel é derrota!")
        vitoriasComputador++;
        tabelaresultado.push("derrota")
      }else if(escolha === 0 && computador === 2){
        console.log("pedra com tesoura é vitória!")
        vitorias++;
        tabelaresultado.push("vitória")
      }else if(escolha === 1 && computador === 0){
        console.log("papel com pedra é vitória!")
        vitorias++;
        tabelaresultado.push("vitória")
      }else if(escolha === 1 && computador === 1){
        console.log("papel com papel é impate!")
        tabelaresultado.push("impate ")
      }else if(escolha === 1 && computador === 2){
        console.log("papel com tesoura é derrota!")
        vitoriasComputador++;
        tabelaresultado.push("derrota")
      }else if(escolha === 2 && computador === 0){
        console.log("tesoura com pedra é derrota!")
        vitoriasComputador++;
        tabelaresultado.push("derrota")
      }else if(escolha === 2 && computador === 1){
        console.log("tesoura com papel é vitória!")
        vitorias++;
        tabelaresultado.push("vitória")
      }else if(escolha === 2 && computador === 2){
        console.log("tesoura com tesoura é impate!")
        tabelaresultado.push("impate ")
      }
      sleep(3000);
      console.clear();
    }
    console.log("=============================");
    console.log("||usuário||  PC   ||Evento ||");
    for(let i=0;i<jogadas;i++){
      if(tabelacomputador[i] === 0){
        tabelacomputador[i] = "pedra  ";
      }else if(tabelacomputador[i] === 1){
        tabelacomputador[i] = "papel  ";
      }else if(tabelacomputador[i] === 2){
        tabelacomputador[i] = "tesoura";
      }
      if(tabelajogador[i] === 0){
        tabelajogador[i] = "pedra  ";
      }else if(tabelajogador[i] === 1){
        tabelajogador[i] = "papel  ";
      }else if(tabelajogador[i] === 2){
        tabelajogador[i] = "tesoura";
      }
        console.log(`||${tabelajogador[i]}||${tabelacomputador[i]}||${tabelaresultado[i]}||`);
      
    }
    console.log("=============================");
    
    if (vitorias > vitoriasComputador){
      console.log("=========================");
      console.log("|vc é o grande ganhador!|");
      console.log("=========================");
    }else if (vitorias < vitoriasComputador){
      console.log("===================================");
      console.log("|o computador é o grande ganhador!|");
      console.log("====================================");
    }else {
      console.log("=============");
      console.log("|deu empate!|");
      console.log("=============");
    }
    vitorias=0;
    vitoriasComputador=0;
    console.log();
    continuar = prompt("deseja continuar jogando? (s/n) ");
      if(continuar === "N"){
      continuar = "n";
    }
    console.clear();
}
function jogar(escolhaUsuario){
    var opcoes = ["pedra", "papel", "tesoura"];
    var indice = Math.floor(Math.random()*3);
    var escolhaComputador = opcoes[indice];

    var resultado = determinarVencedor(escolhaUsuario, escolhaComputador)

    document.querySelector("#escolhaUsuario").innerHTML = "Você escolheu: " + escolhaUsuario;
    document.querySelector("#escolhaComputador").innerHTML = "O computador escolheu: " + escolhaComputador;
    document.querySelector("#vencedor").innerHTML = resultado;
}

function determinarVencedor(usuario, computador){
    if(usuario === computador){
        return "<p style='color:purple'> Empate! </p>";
    }
    if((usuario === "pedra" && computador == "tesoura") || (usuario === "tesoura" && computador === "papel") || (usuario == "papel" && computador === "pedra")){
        return "<p style='color:green'> Você ganhou! </p>";
    } else {
        return "<p style='color:red'> Você perdeu! </p>";
    }
}
const numMinimo = 0
const numMaximo = 9
const resposta = Math.floor(Math.random() * (numMaximo - numMinimo + 1) + numMinimo);

let tentativas = 3
let numEscolhido;
let jogoRodando = true;

console.log(resposta);

alert("ADIVINHE O NÚMERO!\nO jogo mais divertido do mundo!");

for(i = 0; i < tentativas; i++) 

while(jogoRodando){
    numEscolhido = window.prompt(`Adivinhe um número entre ${numMinimo} e ${numMaximo}: `);
    
    if (isNaN(numEscolhido)) {
        window.alert("Favor inserir um número válido.");
    } else if (numEscolhido < numMinimo || numEscolhido > numMaximo) {
        window.alert("Favor inserir um número válido.");
    } else {
        tentativas--;
        if(numEscolhido < resposta){
            window.alert(`Baixo demais! Tente novamente.\nTentativas restantes: ${tentativas}`);
        } else if (numEscolhido > resposta) {
            window.alert(`Alto demais! Tente novamente.\nTentativas restantes: ${tentativas}`);
        } else {
            window.alert(`Correto! A resposta é ${resposta}`);
            jogoRodando = false;
        }
        // O código abaixo, que leva à condição de perda do jogo, é original.
        if (tentativas <= 0){
            window.alert(`Fim de jogo. A resposta era ${resposta}.`);
            jogoRodando = false;
        }
    }
}

// Baseado no tutorial de Bro Code: https://www.youtube.com/watch?v=maB0r59KOUk
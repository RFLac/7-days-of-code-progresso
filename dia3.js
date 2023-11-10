// Perguntar: quer estudar front-end ou back-end?
// Se front-end: React ou Vue?
// Se back-end: C# ou Java?
// Especializar na área escolhida ou estudar para se tornar fullstack?
// Perguntar sobre quais tecnologias o usuário quer conhecer

const ladoDev = ['Front-End', 'Back-End'];
let ladoDevEscolha = null;
const linguagemDeProg = ['React', 'Vue', 'C#', 'Java'];
let linguagemDeProgEscolha = null;

const nome = prompt('Digite seu nome: ');

alert(`Seu nome é ${nome} e você escolheu transcender de sua vida pobre e mísera ao profissionalizar-se na ilustre área da programação. O porquê disso nada importa, somente o como.`);
pergunta();

function pergunta(){
    let resposta = prompt(`"Sendo assim, você se debruça sobre a seguinte dúvida: em que lado de desenvolvimento você trabalhará? O ${ladoDev[0]} (1) ou o ${ladoDev[1]} (2)?"\nDigite 1 ou 2 para responder esta e as próximas perguntas.`);
    if (resposta == 1){
        ladoDevEscolha = ladoDev[0];
        alert(`Você escolheu estudar ${ladoDevEscolha}.`);
        perguntaFrontEnd();
    } else if (resposta == 2){
        ladoDevEscolha = ladoDev[1];
        alert(`Você escolheu estudar ${ladoDevEscolha}.`);
        perguntaBackEnd();
    } else {
        alert('Resposta inválida.');
        pergunta();
    }
}


function perguntaFrontEnd(){
    let resposta = prompt(`Que linguagem de programação deste âmbito você pretende aprender? ${linguagemDeProg[0]} (1) ou ${linguagemDeProg[1]} (2)?`); 
    if (resposta == 1){
        linguagemDeProgEscolha = linguagemDeProg[0];
        alert(`Você escolheu estudar ${linguagemDeProgEscolha}.`);
        perguntaPenultima();
    } else if (resposta == 2){
        linguagemDeProgEscolha = linguagemDeProg[1];
        alert(`Você escolheu estudar ${linguagemDeProgEscolha}.`);
        perguntaPenultima();
    } else {
        alert('Resposta inválida.');
        perguntaFrontEnd();
    }
}

function perguntaBackEnd(){
    let resposta = prompt(`Que linguagem de programação deste âmbito você pretende aprender? ${linguagemDeProg[2]} (1) ou ${linguagemDeProg[3]} (2)?`);
    if (resposta == 1){
        linguagemDeProgEscolha = linguagemDeProg[2];
        alert(`Você escolheu estudar ${linguagemDeProgEscolha}.`);
        perguntaPenultima();
    } else if (resposta == 2){
        linguagemDeProgEscolha = linguagemDeProg[3];
        alert(`Você escolheu estudar ${linguagemDeProgEscolha}.`);
        perguntaPenultima();
    } else {
        alert('Resposta inválida.');
        perguntaBackEnd();
    }
}

function perguntaPenultima(){
    let resposta2 = prompt(`Lado de Desenvolvimento: ${ladoDevEscolha}\nLinguagem de Programação: ${linguagemDeProgEscolha}\nVocê pretende se especializar em ${ladoDevEscolha} (1) ou se tornar um desenvolvedor Full-Deck (2)?`);
    if (resposta2 == 1){
        alert(`Está decidido. Você almeja ser um especialista em programação ${ladoDevEscolha} com domínio da linguagem ${linguagemDeProgEscolha}.\n Que você alcance seu objetivo e traga dinheiro à sua carteira e orgulho aos seus antepassados. Boa sorte, ${nome}, e até logo.`);
        perguntaUltima();
    } else if (resposta2 == 2){
        alert(`Está decidido. Você almeja ser um especialista em programação Full-Deck e sua primeira linguagem de programação será o ${linguagemDeProgEscolha}.\n Que você alcance seu objetivo e traga dinheiro à sua carteira e orgulho aos seus antepassados. Boa sorte, ${nome}, e até logo.`);
        perguntaUltima();
    } else {
        alert('Resposta inválida.');
        perguntaPenultima();
    }
}

function perguntaUltima(){
    let resposta3 = prompt('Mas antes de terminar esta sequência de prompts e te deixar seguir seus sonhos, por favor, me diga quais tecnologias você deseja aprender.');
    let num = 0;
    alert(`${resposta3}? Boa escolha. Qualquer tecnologia em que você se interessar vale a pena conhecer.`);

    while (num < 5) {    
        resposta3 = prompt('Tem mais alguma que você gostaria de aprender?')
        resposta3 = alert(`Interessante. Vale a pena aprender ${resposta3} também.`)
        num++;
    }
    alert(`Ok, estou feliz por ti, ${nome}, mas estou exausto de ler e escrever código por um dia. Te vejo amanhã, tchau.`);
}

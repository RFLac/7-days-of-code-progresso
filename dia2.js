// - Qual o seu nome?
// - Quantos anos você tem?
// - Qual linguagem de programação você está estudando?

const nome = "Machado de Assis";
const idade = "184";
const lingProg = "JavaScript";

alert(`Olá, ${nome}. Você tem ${idade} anos de idade e já está aprendendo ${lingProg}.\nVocê gosta de estudar ${lingProg}? Responda com o número 1 para SIM ou 2 para NÃO.`);

const resposta = prompt("Digite a sua resposta (1 ou 2): ");

if (resposta == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.")
} else if (resposta == 2){
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
} else {
    alert("Resposta inválida.")
}

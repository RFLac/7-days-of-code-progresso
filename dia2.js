// - Qual o seu nome?
// - Quantos anos você tem?
// - Qual linguagem de programação você está estudando?

const nome = "Roger";
const idade = "23";
const lingProg = "JavaScript";

console.log(`Olá, ${nome}. Você tem ${idade} anos de idade e já está aprendendo ${lingProg}.\n Você gosta de estudar ${lingProg}? Responda com o número 1 para SIM ou 2 para NÃO.`);

const resposta = prompt("Digite a sua resposta (1 ou 2): ");

if (resposta == 1){
    console.log("Muito bom! Continue estudando e você terá muito sucesso.")
} else if (resposta == 2){
    console.log("Ahh que pena... Já tentou aprender outras linguagens?")
} else {
    console.log("Resposta inválida.")
}

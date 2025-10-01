let dinheiro = 10
let precoSorvete = 2.50
let saborEscolido = "chocolate"

console.log("Boa noite! Bem-Vindo");

if (dinheiro >= precoSorvete) {
    console.log("Temos os seguintes sabores: Chocolate, Morango e Creme");
    if (saborEscolido == "chocolate" || "Morango" || "Creme") {
        console.log("Aqui está seu sorvete de " + saborEscolido);
    }
    else{
        console.log("Não temos esse sabor escolhidos, desculpe-me");
    }
}
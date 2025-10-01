let credencial = ""

if (credencial == "visitante") {
    console.log("Você só pode ir onde seu anfitrião for.");
}
else if (credencial == "estagiario") {
    console.log("Você pode acessar as baias de trabalho e refeitório");
}
else if (credencial == "Joven aprendiz") {
    console.log("Você pode acessar as áreas de lazer, baias de trabalho e refeitório");
}
else if (credencial == "CLT") {
    console.log("Você pode acessar tudo menos a diretoria");
}
else if (credencial == "CEO") {
    console.log("Só não entra no mesmo QTO que alguém, de resto pode tudo!");
}
else{
    console.log("Credencial inválida. ACESSO NEGADO! ❌");
}
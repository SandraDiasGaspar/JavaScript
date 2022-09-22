var idade = 12;
var nome = "Joana";

if(nome == "João" || idade > 14) {
    console.log("Pode entrar na discoteca!");
} else {
    console.log("Não pode entrar!");
}

if(nome == "Joana" && (30 > 20 || 10 == 10)) {
    console.log("Testando");
} else {
    console.log("Falhou no teste")
}
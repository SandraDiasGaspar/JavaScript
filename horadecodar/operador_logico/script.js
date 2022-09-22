var idade = 16;
var nome = "Mónica";

if (nome == "Sandra" && idade == 16){
    console.log("A Sandra pode entrar na Discoteca.");
} else {
    console.log("Esta não é a Sandra.");
}

if (1 == 1 && 3 > 2 && true) {
    console.log("Passou");
}

if((1 == 1 && 3 > 3) && true) {
    console.log("Passou!");
} else if(nome === "Sandra" && idade >= 14) {
    console.log("Aqui passa!");
}

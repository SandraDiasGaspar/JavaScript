function carregar() {
var msg = window.document.getElementById("msg")
var img = window.document.getElementById("imagem")
var data = new Date()
//var hora = data.getHours()
var hora = 19
msg.innerHTML =`Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    //Bom dia
    img.src = "fotododia.png"
    document.body.style.background = "#88c4dd"
} else if (hora >= 12 && hora <= 18) {
    // Boa tarde
    img.src = "fotodatarde.png"
    document.body.style.background ="#6d462e"
} else {
    img.src = "fotodanoite.png"
    document.body.style.background = "#472658"
}
}
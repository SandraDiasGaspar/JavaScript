function tabuada() {
var num = window.document.getElementById("txtnum")
var tab = window.document.getElementById("txtab")

if (num.value.length == 0) {
    window.alert ("[ERRO] Digite um número!")
} else {
    var n = Number(num.value)
    var c = 1
    tab.innerHTML = ""
    while ( c <= 10) {
        var item = document.createElement("option")
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
    }
}
}
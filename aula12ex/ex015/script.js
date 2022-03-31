function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById("txtano")
  var res = document.getElementById("res")
  if (fano.value.length == 0 || Number (fano.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var género = ""
        if (fsex[0].checked) {
            género = "homem"
            if (idade >=0 && idade < 10) {
                // criança
                img.setAttribute("src", "foto-bebe-m.png")
            } else if (idade < 21) { 
                // jovem
                img.setAttribute("src", "foto-jovem-m.png")
            } else if (idade < 40) {
                // adulto
                img.setAttribute("src", "foto-adulto-m.png")
            } else (idade < 60) {
                // idoso
                img.setAttribute("src", "foto-idoso-m.png")
            }
        } else if (fsex[1].checked) {
            género = "mulher"
            if (idade >=0 && idade < 10) {
                // criança
                img.setAttribute("src", "foto-bebe-f.png")
            } else if (idade < 21) { 
                // jovem
                img.setAttribute("src", "foto-jovem-f.png")
            } else if (idade < 40) {
                // adulto
                img.setAttribute("src", "foto-adulto-f.png")
            } else (idade < 60) {
                // idoso
                img.setAttribute("src", "foto-idoso-f.png")
            }
        }
    }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${género} com ${idade} anos.`
        res.appendChild(img)
    }

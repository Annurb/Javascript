let lista = [];
let num = document.getElementById("number")
let resultado = document.getElementById("lista")
let div = document.getElementById("oi")

function eNumero(n){
    if( Number(n)>=1 && Number(n)<=100 ){
        return true
    }else{
        return false
    }
}

function repetido(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){

    if(eNumero(num.value) && !repetido(num.value, lista)){
        lista.push(Number(num.value))
        let item = window.document.createElement("option")
        item.text = `Valor ${num.value} adicionado.`
        resultado.appendChild(item)

        
    }else{
        window.alert("[ERRO] valor inválido ou já encontrado na lista.")
        
}
num.value = ""
num.focus()
}

function finalizar(){
    if (lista.length == 0){
        window.alert("[ERRO] Insira um valor antes de finalizar")
    }
    else{
        div.innerHTML = ""
        let total = lista.length
        lista.sort()
        let menor = lista[0]
        let maior = lista[lista.length - 1]
        let soma = 0
        for(let i in lista){
            soma += lista[i]
        }
        let media = soma / total

        div.innerHTML += `<p> Ao todo, temos ${total} números cadastrados.</p>`
        div.innerHTML += `<p> O menor valor informado foi o ${menor}.</p>`
        div.innerHTML += `<p> O maior valor informado foi o ${maior}.</p>`
        div.innerHTML += `<p> Somando todos os valores, temos ${soma}.</p>`
        div.innerHTML += `<p> A média total dos valores digitados é ${media}</p>`
    }
}

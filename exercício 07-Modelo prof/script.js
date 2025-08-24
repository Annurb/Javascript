let num = document.getElementById("fnum")//Cria variável num de acordo com o input digitado pelo usuário
let lista = document.querySelector("select#flista")//Criação de uma variável lista que chama a lista criada do html
let res = document.querySelector("div#res")//Criação de uma variável para a div vazia do resultado
let valores = []//Criação de uma lista de valores

function isNumero(n){//Chamamento da função isNumero
    /*Essa função será necessária para determinar se o número vai estar entre 1 e 100
    Então, se o parâmetro n for maior que 1 e menor que 100, vai retornar verdadeiro
    */
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{//No entanto, se não, retorna falso
        return false
    }

}

function inLista(n, l){//Chamento da função isNumero, dessa vez com dois parâmetros 
    /* indexOf busca valores dentro de um vetor
    Logo, o indexOf irá analizar a lista valores para ver se, sentro daquela lista tem o número digitado
    Nesse caso, caso não encontre, ele atribui com -1
    Logo, se estiver o número, ele retorna como verdadeiro 
    */
    if(l.indexOf(Number(n)) != -1){

        return true
    }else{//caso não tenha o número, ele retorna como falso
        return false
    }

}

function adicionar(){//Chama função adicionar do botão 
    /*Chamamento de uma função (isNumero) que pegue a variável digitada no input e jogue como parâmetro
    Criação de uma função (inLista) que pegue a variável digitada no input e joga como parâmetro, além de pegar a lista e também colocar conmo parãmetro
    Se o retorno da função isNumero for verdadeiro e o retorno da função inLista for falso:
    */
    if(isNumero(num.value) && !inLista(num.value, valores)){
    
        valores.push(Number(num.value))//Adiciona um número no final da lista
        let item = document.createElement("option")
        item.text =`Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ""
        
    }else{//se não
        window.alert("Valor inválido ou já encontrado na lista!")
    }
    num.value = ""
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        window.alert("Adicione valores antes de finalizar!")
    }else{
        let tot = valores.length
        valores.sort()
        let menor = valores[0]
        let maior = valores[valores.length-1]
        let soma = 0 
        for(let pos in valores){
            soma += valores[pos]
        }
        let media = soma/tot

        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados`
        res.innerHTML += `<p>O menor valor informado foi ${menor}`
        res.innerHTML += `<p>O maior valor informado foi ${maior}`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}`
        res.innerHTML += `<p>A média dos valores digitados é ${media}`
    }
}
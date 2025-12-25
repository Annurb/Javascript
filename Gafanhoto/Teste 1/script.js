
var numero = document.getElementById("numero");
var lista = document.getElementById("lista");
var valor = [];
var res = document.getElementById("res");

function estanalista(n, v){//Para saber se o número está na lista criada
    if(v.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}

function adicionar() {

    if (numero.value != 0 && !estanalista(numero.value, valor)){//colocar um valor na lista e adicionar na caixa de texto
        valor.push(Number(numero.value));
        var item = document.createElement("option");
        item.text = `Número ${numero.value}`
        lista.appendChild(item);
        res.innerHTML = "";
    
    }
    else{
        window.alert("Erro! Número inválido ou já inserido na lista!")
    }
    numero.value = "";
    numero.focus();
}

function filtrar(){
    if(valor.length == 0){
        window.alert("Adicione valores antes de finalizar!")
    }
    else{
        var par = 0;
        var parzito = [];

        for(let pos in valor){//contagem de números pares e adicionando os valores pares na lista parzito
            if(valor[pos] % 2 == 0){
                par += 1;
                parzito.push(valor[pos]);               
            }

        }
        res.innerHTML = `<p>Ao todo, temos ${par} números pares cadastrados`
        if (parzito ==""){//Caso não tenha números pares
            res.innerHTML += `<p>Não há números pares`
        }else{ //Caso tenha números pares
        res.innerHTML += `<p>Os números pares são ${parzito}`
        }
    }
}

function limpar(){//Função para limpar tudo
    valor = [];
    lista.innerHTML = "";
    res.innerHTML = "";
    numero.value = "";
}
let res= document.getElementById('res')
let item = document.getElementById("item")
let lista = []
let ritem = document.getElementById("ritem")

function estanalista(i, l){
    if(l.indexOf(i) == - 1){
        return true
    }else{
        return false
    }
}

function ealgo(i){
    if(i.value == ""){
        return false
    }
    else{
        return true
    }
}

function adicionar(){
    if(estanalista(item.value, lista) && ealgo(item)){
        lista.push(item.value)
        res.innerHTML += `<p>- ${item.value}</p>`
    }
    else{
        alert("[ERRO] Item já na lista ou campo vazio")
    }
    item.value = ""
    item.focus()
}

function remover(){
    if(lista.length > 0 && !estanalista(ritem.value, lista)){
        res.innerHTML = ""
        lista = lista.filter(item => item != ritem.value)

        for (let pos in lista){
            res.innerHTML += `<p> - ${lista[pos]}`
        }
    }
    else{
        window.alert("[ERRO] Campo vazio ou item não encontrado")
    }
}

function limpar(){
    res.innerHTML = ""
    lista = []
    item.value = ""
    ritem.value= ""
    item.focus()
}
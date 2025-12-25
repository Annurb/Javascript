function clicar(){
    let number = window.document.getElementById('number');
    let resultado = window.document.getElementById("seltab")

    if(number.value.length == 0 ){
        window.alert("Por favor, digite um número!")
    }else{
        let numero = Number(number.value)
        let c = 1
        resultado.innerHTML = ''

        while (c<=10){
            let item = document.createElement('option');//cria um elemento dentro da lista
            item.text = `${numero} x ${c} = ${numero*c}`//coloca no texto, é como se fosse um innerHTML versão lista
            item.value = `tab${c}`
            resultado.appendChild(item)
            c++
        }
    }}

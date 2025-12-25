//Chamando a função contar
function contar(){
    //Criando as variáveis
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo');
    var res = document.getElementById('res');

    //Transformando tudo em um valor numérico
    //Outra forma de fazer é colocar inicio.value.length no If
    var comeco = Number(inicio.value);
    var final = Number(fim.value);
    var passar = Number(passo.value);

    //Testando as possibilidades de contagem e incompatibilidade
    if(comeco == 0 || final == 0 ){

        res.innerHTML = "<p>Impossível contar</p>"
        window.alert("[ERRO] Faltam dados!");
    }else{
        if(passar == 0){
            res.innerHTML = "<p>Impossível contar</p>"
            window.alert("Passo inválido! Considerando Passo = 1:");
            passar = 1;
        }

        res.innerHTML = '<p>Contando: <br></p>';

        if (comeco <final){
            //Contagem crecente
            for(comeco; comeco<= final; comeco+=passar){
                res.innerHTML += `${comeco}  \u{1F449}`	;//colocando emoji
            }
        }
        else{//Contagem regressiva
            for(comeco;comeco>= final; comeco-=passar)
            res.innerHTML+= `${comeco} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`//colocando emoji no final
    }


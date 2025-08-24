function verificar(){
    var resultado = window.document.getElementById('txtano');//pegar o input do ano em que nasceu
    var res = window.document.getElementById('res');//Criar variável para a div do resultado
    var fano = Number(resultado.value);//Pegar o valor do input e transformar em número

    var data = new Date();//pegar a data atual
    var ano = data.getFullYear();//dessa data, isolar o ano atual

    if (fano <= 1900  || fano >ano){//verificar se o ano é menor que 1900 ou maior que o ano atual
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    }else{
        var fsex = window.document.getElementsByName('radsex');//pegar o input de sexo
        var idade = ano - fano;//calculo da idade
        var gênero = "";
        var img = document.createElement('img');//criar variável de imagem
        img.setAttribute('id', 'foto')//colocar id da imagem

        if(fsex[0].checked){//verificar se é masculino
            gênero = " homem"
            if(idade >= 0 && idade < 12 ){
                //criança
                img.setAttribute('src', 'homemcrianca.png')

            }
            else if(idade <21){
                //jovem
                img.setAttribute('src', 'homemjovem.png')
            }else if (idade <50){
                //adulto
                img.setAttribute('src', 'homemadulto.png')
            }else{
                //idoso
                img.setAttribute('src', 'homemidoso.png')
            }

        }else{
            gênero = "a mulher"
            if(idade >= 0 && idade < 12 ){
                    //criança
                    img.setAttribute('src', 'mulhercrianca.png')
                }
            else if(idade <21){
                    //jovem
                    img.setAttribute('src', 'mulherjovem.png')
            }else if (idade <50){
                    //adulto
                    img.setAttribute('src', 'mulheradulta.png')
            }else{
                    //idoso
                    img.setAttribute('src', 'mulheridosa.png')
            }
    }
        res.style.textAlign = 'center';//centralizar o resultado
        res.innerHTML = `<p>Detectamos um${gênero} com ${idade} anos.</p>`;//resultado
        res.appendChild(img);//adiciona as imagens

    }
}
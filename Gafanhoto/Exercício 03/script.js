function carregar(){
var mensagem = window.document.getElementById('msg');
var img = window.document.getElementById('imagem');

var data = new Date();
var hora = data.getHours();
var minuto = data.getMinutes()

if (minuto !== 1){
    var s = 's';
}
else{var s = ''}

mensagem.innerHTML = `Agora são ${hora} horas e ${minuto} minuto${s}.`;


if (hora >= 0 && hora < 12){
    img.src = 'fotomanha.png';//modifica para a foto da manha
    document.body.style.background = '#f3dac1'//muda a cor de fundo

}else if (hora >= 12 && hora < 18){//modifica para a foto da tarde
    img.src = 'tarde.png';
    document.body.style.background = '#bb703e'//muda a cor de fundo

}else{
    img.src = 'noite.png';//modifica para a foto da noite
    document.body.style.background = '#2c2930'//muda a cor de fundo
}}
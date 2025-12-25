var agora = new Date()//pega a data
var hora = agora.getHours()//pega a hora do sistema naquele momento

console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12 && hora >= 6){
    console.log(`Bom dia !`)
}else if(hora <=18 && hora >=12){
    console.log(`Boa tarde !`)

}
else if (hora > 18 && hora<24){
    console.log(`Boa noite !`)
}else{
    console.log(`Boa madrugada`)}
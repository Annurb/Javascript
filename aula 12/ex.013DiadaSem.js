agora = new Date()
diasem = agora.getDay()//dia da semana 0 a 6
/*
domingo = 0
seg = 1
ter = 2
quar = 3
quin = 4
sex = 5
sab = 6
*/
switch(diasem){
    case 0 :
        console.log(`Domingo`)
        break
    case 1:
        console.log(`Segunda`)
        break
    case 2:
        console.log(`Terça`)
        break
    case 3:
        console.log(`Quarta`)
        break   
    case 4:
        console.log(`Quinta`)
        break
    case 5:
        console.log(`Sexta`)
        break
    case 6:
        console.log(`Sábado`)
        break
    default:
        console.log(`[ERRO] Dia inválido`)
        break
    
}

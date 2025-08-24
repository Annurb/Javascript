let valores = [8,1, 7,4,2,9]
/*
for(let indice = 0; indice<valores.length; indice++){
    console.log(`A posição ${indice} tem o valor ${valores[indice]}`)
}*/
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
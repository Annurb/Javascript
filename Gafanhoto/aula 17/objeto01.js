let amigo = {Nome:"José", 
    Sexo:"m", 
    Peso:85.4, 
    engordar(p=0){
        console.log("Engordou")
        this.Peso += p
    }}
amigo.engordar(2)
console.log(`O ${amigo.Nome} pesa ${amigo.Peso} KG` )

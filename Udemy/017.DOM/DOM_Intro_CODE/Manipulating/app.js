const allImages = document.getElementsByTagName('img');
for(let img of allImages){
    console.log(img.src)
}
document.querySelector('a[title="Java"]')

//getAtributte() pra pegar um atributo tipo href
//setASttribute('a', 'b') transformar um atributo em outra coisa

//podemos mudar ou adicionar uma clsse a um elemento
//h2.classList.add('idk')
//h2.classList.remove('idk')
//h2.classList.toggle('idk') - adiciona quando usado uma vez, remove em outra

//parent and children
//nextSibling and previousSibling
//nextElementSibling -> o proximo elemento

//criar um elemento
//const newImg = document.createElement('img')
//setamos src ou qqr outra coisa

//para adicionar uma crianca no pai
//document.body.appendChild(newImg)
//para criar um elemento temos que adiciona-lo onde quisermos

//para paragrafos - append
//p.append('yeahhh')

//prepend - cria no inicio de um elemento

//h1.after(h3) adiciona um elemento depois do outro
//tem o before tambem

//nao da pra remover diretsamente
//portanto fazemos primeiro o pai
//const ul = firstLi.parentEleemnt
//ul.removeChild(firstLi)
//ou b.parentChild.removeChild(b)

//para remover uma imagem é diretamente
//img.remove()
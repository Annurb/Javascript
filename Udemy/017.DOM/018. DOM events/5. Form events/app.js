const form = document.querySelector('#shelterform')
const input = document.querySelector('#catName')
const list = document.querySelector('#list')
form.addEventListener('submit', function(e){
    e.preventDefault()
    console.log(input.value)
    const newLi = document.createElement('LI')
    const catName = input.value;
    newLi.innerText = catName
    console.log(newLi)
    list.append(newLi)
    input.value = ''
})
const h2 = document.querySelector('h2')

const input2 = document.querySelector('#type')
input2.addEventListener('change', function(e){
    h2.innerText = input2.value
})
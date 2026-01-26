document.querySelector('button').addEventListener('click', function(evt){
    alert(evt)
})
const input = document.querySelector('input')
//input.addEventListener('keydown', function(e){
 //   console.log(e.key)
//    console.log(e.code)
//})

window.addEventListener('keydown', function(e){
    console.log(e.code)
    switch(e.code){
        case 'ArrowUp':
            console.log('up!');
            break
        case 'ArrowDown':
            console.log('down!')
            break
        case 'ArrowLeft':
            console.log('left!')
            break
        case 'ArrowRight':
            console.log('right!')
            break
    }
})

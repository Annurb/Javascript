const btn = document.querySelector('#v2');
btn.onclick = function(){
    console.log('You clicked me')
}
function scream(){
    console.log('aaaaaaahhhhh')
    alert('stop touching me')
}
btn.onmouseenter = scream;
const btn3 = document.querySelector('#v3')
btn3.addEventListener('mousedown', function(){
    twist(), scream()
})
const ts = document.querySelector('#ts')
ts.addEventListener('click', twist, {once:true})
ts.addEventListener('click', shout)

function twist() {
    alert('TWIST')
}
function shout() {
    alert('SHOUT')
}
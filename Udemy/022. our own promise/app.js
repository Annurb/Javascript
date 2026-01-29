const fakeRequest = (url) =>{
    return new Promise((resolve, reject) =>{
        const rand = Math.random()
        setTimeout(() => {
            if (rand < 0.7){
                resolve('your fake data here')
            }
            else{
                reject('request error')
            }
        }, 1000)
    })
}
fakeRequest('/dogs/1')
.then((ok) =>{
    console.log('DONE WITH REQUEST', ok)
})
.catch((err) =>{
    console.log('ok no!!', err)
})

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, rejected) => {
        setTimeout (() =>{
            document.body.style.backgroundColor = color
            resolve()
        }, delay)
    })
}
delayedColorChange('red', 1000)
.then (() =>{
    return delayedColorChange('orange', 1000)
})
.then (() =>{
    return delayedColorChange('blue', 1000)
})
.then (() =>{
    return delayedColorChange('purple', 1000)
})



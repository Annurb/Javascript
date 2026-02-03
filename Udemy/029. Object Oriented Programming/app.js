function hex(r, g, b){
    return '#' + ((1<<24) + (r << 16) + ( g << 8)+ b).toString(16).slice(1)
}
function rgb(r, g, b){
    return `rgb(${r}, ${g},${b} )`
}
//const navColor = new Color('carrot', [230, 126, 34])
//const logoColor = new Color('emerald', [46, 204, 113])
console.log(hex(255, 100, 24))

//Jeito ruim de fazer
function makeColor(r, g, b){
    const color = {}
    color.r = r
    color.g = g
    color.b = b
    color.rgb = function (){
        const {r, g, b} = this

        return `rgb(${r}, ${g}, ${b} )`
}
    color.hex = function(){
    return '#' + ((1<<24) + (r << 16) + ( g << 8)+ b).toString(16).slice(1)
}
    return color
}
const firstColor = makeColor(35, 255, 255)
console.log(firstColor.rgb())
console.log(firstColor.hex())
firstColor.r = 255
console.log(firstColor.rgb())


//Jeito melhor de fazer( inclui as funções no prototype)
function Color(r, g, b){
    this.r = r
    this.g = g
    this.b = b
    console.log(this)
}
Color.prototype.rgb = function(){
    const {r, g, b} = this
    return `rgb(${r}, ${g}, ${b} )`
}

Color.prototype.hex = function(){
    const {r, g, b} = this
    return '#' + ((1<<24) + (r << 16) + ( g << 8)+ b).toString(16).slice(1)
}
Color.prototype.rgba = function(a=1.0){
    const {r, g, b} = this
    return `rgba(${r}, ${g}, ${b}, ${a})`
}

const color1 = new Color(255, 255, 0)
console.log(color1.rgb())
console.log(color1.hex())

const color2 = new Color( 0, 0, 0)
console.log(color1.hex === color2.hex)

console.log(color1.rgba(0.5))

//Maneira melhor ainda (FINALMENTE CLASSES)

class ColorClass{
    constructor(r, g, b, name){
        this.r = r
        this.g = g
        this.b = b
        this.colorName = name
    }
}

const c1 = new ColorClass( 255, 67, 7)
console.log
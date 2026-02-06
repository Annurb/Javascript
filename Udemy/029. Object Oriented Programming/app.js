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
        this.calcHSL()
    }
    innerRGB(){
        const { r, g, b} = this
        return `${r}, ${g}, ${b}`
    }
    rgb(){
        return `rgb(${this.innerRGB()})`
    }
    greet(){
        return `HELLO FROM ${this.colorName}`
    }
    hex(){
        const { r, g, b} = this
        return '#' + ((1<<24) + (r << 16) + ( g << 8)+ b).toString(16).slice(1)
    }
    rgba(a=1.0){
        return `rgba(${this.innerRGB()}, ${a})`
    }
    hsl(){
        const {h, s, l} = this
        return `hsl(${h}, ${s}%, ${l}%)`

    }
    opposite(){
        const {h, s, l} = this
        const newHue = (h+180)%360
        return `hsl(${newHue}, ${s}%, ${l}%)`
    }
    fullySaturated(){
        const {h, s, l} = this
        return `hsl(${h}, 100%, ${l}%)`
    }
    calcHSL(){
        let { r, g, b} = this
        r/=255
        g/=255
        b/=255

        let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b), 
        delta = cmax-cmin,
        h = 0,
        s=0,
        l=0
        if(delta == 0) h=0
        else if(cmax == r) h = (g-b)/delta%6
        else if(cmax == g) h = (b-r)/delta+2
        else h = (r-g)/delta+4

        if(h<0) h+=360
        l = (cmax+cmin)/2
        s = delta == 0? 0: delta/ (1-Math.abs(2*l-1))
        s = +(s*100).toFixed(1)
        l = +(l*100).toFixed(1)
        this.h = h
        this.s = s
        this.l = l

    }
}

const c1 = new ColorClass( 255, 67, 7, "orange")
console.log(c1.greet())
console.log(c1.rgb())
console.log(c1.hex())
console.log(c1.rgba(0.7))
console.log(c1.hsl())
console.log(c1.opposite())
console.log(c1.fullySaturated())
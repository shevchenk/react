//Object Literal Enhacement
const banda = 'Metalica'
const genero = 'Heay Metal'
const canciones = ['Master of puppets', 'Seek & Destroy', 'Enter Sandman']

const Metalica = {banda, genero, canciones}

console.log(Metalica)

//Object Destructuring
const aprendiendoJS = {
    version: {
        nueva : 'ES6',
        anterior: 'ES5'
    },
    frameworks: ['Reacts', 'VueJS', 'AngularJS']
}

let {anterior} = aprendiendoJS.version;

console.log(anterior)
console.log(Object.keys(aprendiendoJS))

//Arreglos, maps, objectKeys

const carrito = ['P1', 'P2', 'P3']

let html = '';
carrito.forEach( producto => {
    html +=  `<li>${producto}</li>`
})

console.log(html)

carrito.map( producto => {
    return 'EL producto es' + producto
})

//Sprear operator
let lenguajes = ['Javascript', 'PHP', 'Python']
let frameworks = ['React', 'Laravel', 'Django']

let combinacion = [...lenguajes, ...frameworks]
let [ultimo] = lenguajes.reverse()
let [ultimomejorado] = [...lenguajes].reverse() //aqui mantienes tu datos sin tocarse


console.log(combinacion)

// Metodos en arreglos
const personas = [
    {nombre: 'P1', edad: 15, aprendiendo: 'JS'},
    {nombre: 'P2', edad: 19, aprendiendo: 'Laravel'},
    {nombre: 'P3', edad: 25, aprendiendo: 'Vue'},
    {nombre: 'P4', edad: 14, aprendiendo: 'React'},
    {nombre: 'P5', edad: 22, aprendiendo: 'Angular'},
    {nombre: 'P6', edad: 30, aprendiendo: 'React'},
]

const mayores = personas.filter( persona => {
    return persona.edad > 18
})

const p1 = personas.filter( persona => {
    return persona.nombre === 'P1'
})

const total = personas.reduce( (edadTotal, persona) => {
    return edadTotal + persona.edad
}, 0)

console.log(mayores)
console.log(p1[0].aprendiendo)
console.log( (total / personas.length).toFixed(2) )
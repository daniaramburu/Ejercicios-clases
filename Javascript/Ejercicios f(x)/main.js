// Ejercitación de JS

//1//
const sumar = (num1, num2) => {
    return (num1 + num2)

}

sumar(2,3)
sumar(1.2,3.4)
sumar(3,-5)

console.log (sumar(2,3))
console.log (sumar(1.2,3.4))
console.log (sumar (3,-5))

//2//

const restar = (num1, num2) => {
    return (num1 - num2)
}

restar(3,2)
restar(10,5.5)
restar(3,5)

console.log (restar(3,2))
console.log (restar(10,5.5))
console.log (restar(3,5))

//3//

const multiplicar = (num1,num2) => {
    return (num1 * num2)
}

multiplicar (2,3)
multiplicar (4,0.5)

console.log (multiplicar(2,3))
console.log (multiplicar(4,0.5))

//4//

const dividir = (num1,num2) => {
    return (num1/num2)
}

dividir (2,3)
dividir (1.2,3.4)
dividir (3,-5)

console.log (dividir(2,3))
console.log (dividir(1.2,3.4))
console.log(dividir(3,-5))

//5//

const calcularAreaTriangulo = (base,altura) => {
    return (base*altura)
}

calcularAreaTriangulo (3,4)
calcularAreaTriangulo (5,6)

console.log (calcularAreaTriangulo(3,4))
console.log (calcularAreaTriangulo(5,6))

//6//
const gritar = (frase) => {
    return "¡" + frase + "!"
}

console.log (gritar("Hola"))

const gritarr = (frase) => {
    return frase + "aaa"
}

console.log (gritarr("Hola"))

//7//
const obtenerNombreCompleto = (nombre, apellido) => {
return nombre +" " + apellido
}

console.log (obtenerNombreCompleto("nombre, apellido"))


//8//
const saludar = (saludo, nombre) => {
    return saludo + " " + nombre + ", un gusto conocerte"
}

console.log(saludar("saludo, nombre"))

//9
const saludarGritando = (nombre, apellido) => {
    let obtenerNombreCompleto = obtenerNombreCompleto(nombre, apellido)
    let saludo = saludar (obtenerNombreCompleto)
    let grito = gritar (saludo)
    return grito
}
console.log (saludarGritando("nombre, apellido"))//

//10//

//19//
const calcularPuntaje = (facil, normal, dificil) => {
    const totalFaciles = facil* 3
    const totalNormales = normal * 5
    const totalDificiles = dificil *10

    return totalDificiles + totalNormales + totalFaciles
}
    console.log(calcularPuntaje(3,0,0))
    console.log(calcularPuntaje(0, 2, 1))
    console.log(calcularPuntaje(5, 1, 2))


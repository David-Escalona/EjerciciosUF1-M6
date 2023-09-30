//Probamos el funcionamiento de java
console.log("hola")

//Creamos una variable botonOperacion en java que sera = al id="botonOperacion" que esta selecionado en documento html
const botonOperacion = document.querySelector('#botonOperacion')

//Al botnOperacion de java le añadimos un evento llamado click que estara dentro de la funcion
botonOperacion.addEventListener('click', operacion)

//Creamos la variable y la asociamos
const resultadojava = document.querySelector('#resultado')

//Cremaos una funcion con un evento que sera el clic
function operacion(event){
    //Este codigo sirve para que al realizar la operacion por consola en vez de que los datos se envian a un servidor
    event.preventDefault()

    //Dentro de la funcion creamos una variable input1 que estara asociada a num1 del html
    const input1 = document.querySelector('#num1')
    //Creamos una variable llamada valorInput1 que nos guardara el valor del input1
    const valorInput1 = input1.value
    //Creaomos una variable llamada valorInput1Num que guardara la operacion, gracias a parseInt que de una cadena de texto nos devuelve un número entero
    const valorInput1Num = parseInt(valorInput1)
    //Moostranos valorInput1 por consola
    console.log(valorInput1)

    //Hacemos lo mismo con el siguiente numero
    const input2 = document.querySelector('#num2')
    const valorInput2 = input2.value
    const valorInput2Num = parseInt(valorInput2)

    //Lo mostramos por consola
    console.log('valor input1 : ', valorInput1)
    console.log('valor input2 : ', valorInput2)

    //Hacemos la operacion y la mostramos por consola
    const resultado = valorInput1Num + valorInput2Num
    console.log(resultado)
    const resultado2 = valorInput1Num - valorInput2Num
    console.log(resultado2)
    const resultado3 = valorInput1Num * valorInput2Num
    console.log(resultado3)
    const resultado4 = valorInput1Num / valorInput2Num
    console.log(resultado4)

    //Con .innerHTML inyectamos el codigo en html mediante el valor resultado java
    //Luego creamos el codigo html y con ${ } te permite crear cadenas de texto que incluyan valores de variables 
    resultadojava.innerHTML = `
        Suma: ${resultado} <br>
        Resta: ${resultado2} <br>
        Multiplicación: ${resultado3} <br>
        División: ${resultado4}
    `
}


console.log("hola")

//Creamos una variable botonjava en java que sera = al id="llamarBoton" que esta selecionado en documento html
const botonjava = document.querySelector('#llamarBoton')

//Al botonjava de java le añadimos un evento llamado click que estara dentro de la funcion
botonjava.addEventListener('click', agrupar)

function agrupar(event){//Con la funcion agrupo todo los valores

    event.preventDefault()
    //Llamamos una variable const la cual le metemos un nombre y le añadimos y valor mediante el =, con document.querySelector llamamos al selector que esta en el documento HTML
    //("#inputNombre") sirve para llamar al input que es la etiqueta donde esta el id="inputNombre" y el value no da el valor del input cuyo id es inputNombre
    const inputNombre = document.querySelector("#inputNombre").value
    //Sacamos por consola un texto y la variable inputNombre
    console.log('valor del inputNombre: ', inputNombre)

    //Creamos una variable constante que tendra siempre el mismo valor que es inputApellido y le añadimos mediante el selector de documentos una variable llamada inputApellido que esta dentro
    //de un input cuyo id es inputApellido y que tiene su propio valor que prevalece sobre el input el cual tiene un id con el nombre inputApellido
    const inputApellido = document.querySelector("#inputApellido").value
    //Sacamos por consola un texto y la variable inputApellido
    console.log('valor del inputApellido: ', inputApellido)

    //Creamos una variable constante que tendra siempre el mismo valor que es inputSegundoApellido y le añadimos mediante el selector de documentos una variable llamada inputSegundoApellido que esta dentro
    //de un input cuyo id es inputSegundoApellido y que tiene su propio valor que prevalece sobre el input el cual tiene un id con el nombre inputSegundoApellido
    const inputSegundoApellido = document.querySelector("#inputSegundoApellido").value
    //Sacamos por consola un texto y la variable inputSegundoApellido
    console.log('valor del inputSegundoApellido: ', inputSegundoApellido)

    //Creamos una variable constante que tendra siempre el mismo valor que es inputDni y le añadimos mediante el selector de documentos una variable llamada inputDni que esta dentro
    //de un input cuyo id es inputDni y que tiene su propio valor que prevalece sobre el input el cual tiene un id con el nombre inputDni
    const inputDni = document.querySelector("#inputDni").value
    //Sacamos por consola un texto y la variable inputDni
    console.log('valor del inputDni: ', inputDni)

    //Creamos una variable constante que tendra siempre el mismo valor que es inputUrl y le añadimos mediante el selector de documentos una variable llamada inputUrl que esta dentro
    //de un input cuyo id es inputUrl y que tiene su propio valor que prevalece sobre el input el cual tiene un id con el nombre inputUrl
    const inputUrl = document.querySelector("#inputUrl").value
    //Sacamos por consola un texto y la variable inputUrl
    console.log('valor del inputUrl: ', inputUrl)

    //Metemos el contenido de nombre el cual esta dentro de un id con la etiqueta span que nos metera el valor inputNombre en la tarjeta
    document.querySelector("#nombre").innerHTML = inputNombre + ' '
    document.querySelector("#apellido").innerHTML = inputApellido + ' '
    document.querySelector("#apellidoDos").innerHTML = inputSegundoApellido + ' '
    document.querySelector("#dni").innerHTML = inputDni + ' '
    document.querySelector("img").setAttribute("src",inputUrl)
}
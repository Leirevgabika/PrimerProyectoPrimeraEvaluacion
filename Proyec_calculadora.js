// array con el historial de operaciones realizadas
let historial = []
// primer numero para las operaciones
let num1 = 0;
// segundo numero para las operaciones
let num2 = 0;
// resultado de las operaciones
let resultado = 0;

// funcion suma: recibe 2 numeros y devuelve su suma
function suma(a, b) {
    return a + b;
}
// funcion resta: recibe 2 numeros y devuelve su resta
function resta(a, b) {
    return a - b;
}
// funcion multiplicacion: recibe 2 numeros y devuelve su multiplicacion
function multiplicacion(a, b) {
    return a * b;
}
// funcion division: recibe 2 numeros y devuelve su division
// el divisor no puede ser 0
function division(a, b) {
    return a / b;
}
// funcion raiz cuadrada: recibe 1 numero no negativo y devuelve su raiz cuadrada
function raiz_cuadrada(numero) {
    return Math.sqrt(numero)
}

// Mapa que relaciona los nombres de las operaciones de la calculadora 
// con las funciones que las ejecutan
let mapa_operaciones = new Map([["suma", suma], ["resta", resta],
["multiplicacion", multiplicacion],
["division", division],
["raiz cuadrada", raiz_cuadrada]]);
// Mapa que relaciona los nombres de las operaciones de la calculadora 
// con sus simbolos matematicos. Este mapa se utiliza para mostrar los
// resultados y el historial en formato matematico
let mapa_simbolos = new Map([["suma", "+"], ["resta", "-"],
["multiplicacion", "*"],
["division", "/"]]);

// funcion que ejecuta una operacion matematica (tipo) sobre
// 2 numeros (num1, num2)
function operacion(num1, num2, tipo) {
    // busca la funcion correspondiente al nombre almacenado en tipo
    let funcion = mapa_operaciones.get(tipo);
    // si el tipo de operacion es raiz cuadrada solo se va a utilizar un numero
    if (tipo == "raiz cuadrada") {
        // llama a la funcion raiz y devuelve su resultado
        return funcion(num1);
    }
    // en el resto de los casos se utilizan 2 numeros
    else {
        // llama a la funcion y devuelve su resultado
        return funcion(num1, num2);
    }
}

// Funcion que muestra todas las operaciones guardadas en el historial
function mostrar_historial() {
    // Utiliza un forEach y le pasa la funcion flecha que muestra cada operacion
    historial.forEach((operacion) => console.log(operacion));
}

// Funcion que guarda la ultima operacion realizada en el historial
function guardar_operacion(num1, num2, opcion, resultado) {
    // la operacion raiz cuadrada tiene un formato distinto
    if (opcion == "raiz cuadrada") {
        // la operacion se guarda con el formato raiz(x) = resultado
        historial.push(`raiz(${num1}) = ${resultado}`);
    }
    // el resto de operaciones tienen un formato con 2 numeros y resultado
    else {
        // buscar el simbolo matematico de la operacion
        // por ejemplo: "suma" daria "+"
        let operacion = mapa_simbolos.get(opcion);
        // guardar la operacion con los datos necesarios
        historial.push(`${num1} ${operacion} ${num2} = ${resultado}`);
    }
}

// Funcion que valida el input de la calculadora
// Lee las variables globales num1 y num2 y recibe un parametro operacion con la operacion seleccionada
// la funcion devuelve true si no hay errores o false si hay errores de entrada
function validar_input(operacion) {
    // si el numero 1 no es un numero valido se muestra un error
    if (isNaN(num1)) {
        console.log("Error: el primer numero introducido no tiene formato numerico");
        return false;
    }
    // si el numero 2 no es un numero valido se muestra un error
    if (isNaN(num2)) {
        console.log("Error: el segundo numero introducido no tiene formato numerico");
        return false;
    }
    // si el divisor en una division es 0 se muestra un error
    if (operacion == "division" && num2 == 0) {
        console.log("Error: division por 0");
        return false;
    }
    // si se hace una raiz negativa se muestra un error
    if (operacion == "raiz cuadrada" && num1 < 0) {
        console.log("Error: raiz negativa");
        return false;
    }
    // si la operacion no es una de las esperadas se muestra un error
    if (operacion != "suma" && operacion != "resta" && operacion != "multiplicacion" && operacion != "division" && operacion != "raiz cuadrada") {
        console.log("Error: operacion no valida");
        return false;
    }
    // no se ha detectado ningun error
    return true;
}

// Funcion principal de la calculadora
function calculadora() {
    // bucle infinito, termina cuando se elija la opcion salir
    while (true) {
        // leer la operacion a realizar
        let opcion = prompt("Elige una operacion \n suma \n resta \n multiplicacion \n division \n raiz cuadrada \nmostrar historial \n salir");
        // si la opcion es salir se termina la funcion principal
        if (opcion == "salir") {
            return;
        }
        // opcion mostrar historial
        else if (opcion == "mostrar historial") {
            mostrar_historial();
        }
        // si la opcion es una operacion numerica
        else {
            // leer el primer numero
            num1 = parseInt(prompt("Introduce el primer numero"));
            // si la operacion es raiz cuadrada solo hace falta un numero
            if (opcion != "raiz cuadrada") {
                // leer el segundo numero
                num2 = parseInt(prompt("Introduce el segundo numero"));
            }
            // validar el input
            // si no hay errores se ejecuta la operacion
            if (validar_input(opcion)) {
                // calcular el resultado llamando a la funcion operacion
                resultado = operacion(num1, num2, opcion);
                // mostrar el resultado en consola
                // el formato es igual que el del historial
                if (opcion == "raiz cuadrada") {
                    console.log(`raiz(${num1}) = ${resultado}`);
                }
                else {
                    let operacion = mapa_simbolos.get(opcion);
                    console.log(`${num1} ${operacion} ${num2} = ${resultado}`);
                }
                // guardar la operacion realizada en el historial
                guardar_operacion(num1, num2, opcion, resultado);
            }
        }
    }
}
// llamar a la funcion principal
calculadora();
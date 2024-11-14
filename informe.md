# Informe del proyecto

La estructura del programa ha tratado de ceñirse a las especificaciones que se detallan en el documento de la tarea.

El programa ejecuta un bucle infinito en la funcion principal calculadora que continua hasta que la opcion introducida sea "salir". La operacion de mostrar historial se trata aparte por tener un uso diferente a las operaciones matematicas. Las operaciones matematicas se tratan todas del mismo modo, excepto la raiz cuadrada que toma solo un operando. 

Las operaciones matematicas se representan con una funcion cada una. Hay otra funcion operacion que escoge la funcion matematica adecuada segun el input introducido por el usuario. Esta funcion busca el nombre de la operacion en un mapa que asocia los nombres de las operaciones con cada funcion. Esta decision se debe en parte a que habia que utilizar un mapa en algun punto del codigo y a que habia que relacionar un string con el nombre de la operacion matematica con una funcion. Se podria haber utilizado tambien un grupo de ifs o un switch.

## Control de errores

Se validan todos los inputs tras ser introducidos con comprobaciones if. Si se introduce algun input no valido la funcion de validacion devuelve false e informa a la funcion principal de que hay un error y que la operacion no se debe llevar a cabo.

## Historial

El historial se representa con un array de strings. Cada vez que se realiza una operacion con exito se crea el string con formato adecuado y se inserta en el array.

A la hora de mostrarlo simplemente se recorre el array utilizando el metodo forEach y se utiliza una funcion flecha para mostrar cada entrada del array por consola.

## Desafios

Esta es una lista de los principales desafios de la tarea:

- Organizar y conectar cada parte del codigo siguendo las direcciones del documento de la tarea. Sin estas direcciones habria organizado todo el programa en un solo bloque, sin funciones. He comprobado que este modo, (con funciones) de organizar los programas es mas claro y facil de manejar, aunque cuesta un poco mas inicialmente.
- Encontrar un uso para el mapa. Debido a que no tengo mucha experiencia usando mapas me ha costado entender como aplicarlo en esta situacion, aunque una vez lo he visto he encontrado un segundo uso para asociar el nombre de las operaciones con los simbolos matematicos.
- Estructurar correctamente la funcion principal que tiene muchos casos especiales para cada situacion. Me ha hecho falta probar cada combinacion y ajustar el codigo cada vez que encontraba una situacion que producia un error u otro problema. Al principio no sabia como detener la operacion cuando se detectaba un error desde la funcion validar_input, hasta que se me ocurrio que devolviera true o false para comprobar si habia habido errores.
- Encontrar un modo de mostrar el resultado de las operaciones. Inicialmente hice un gran bloque con instrucciones if para convertir los nombres de las operaciones en simbolos matematicos, pero el codigo era muy largo y repetitivo. Luego lo cambie por el metodo del mapa que habia utilizado para las funciones y pude eliminar todos los ifs.
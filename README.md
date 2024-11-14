# Proyecto calculadora

Proyecto calculadora interactiva en javascript.

# Instrucciones de uso

Para utilizar la calculadora basta con abrir la pagina index asociada que cargara el codigo javascript que hace funcionar la calculadora.

La calculadora pedira al usuario el nombre de la operacion que desea realizar. Las operaciones disponibles se muestran junto con el prompt para que el usuario no cometa errores.

Cuando el usuario desee salir del programa tendra que introducir la operacion "salir" en el prompt inicial.

### Operaciones matematicas

Si el usuario introduce el nombre de una operacion matematica (suma, resta, multiplicacion, division o raiz cuadrada) la calculadora procedera a solicitar los numeros que se van a emplear en el calculo. En el caso de la raiz cuadrada solo se pide un numero, pero en las otras operaciones se piden dos.

Una vez introducidos numeros validos el resultado de la operacion junto con los detalles de la misma apareceran en el log de la consola, y el programa volvera al prompt inicial.

Por ejemplo, si la operacion es multiplicacion, los numeros son 3 y 5 se mostrara el resultado `3 * 5 = 15`.

Todas las operaciones validas se guardan en el historial.

### Mostrar historial

La calculadora guarda un historial de todas las operaciones ejecutadas. Al elegir la operacion "mostrar historial" en la seleccion inicial el programa mostrara en el log de la consola en el mismo formato que los resultados.

### Control de errores

El programa controla que los inputs de cada parte sean validos. Si el input introducido para la operacion o para alguno de los operandos no es valido se muestra un mensaje de error y se vuelve al prompt inicial. Las operaciones con errores de input no se guardan en el historial.

La calculadora tambien controla que no se realicen operaciones ilegales como la division por 0 y las raices cuadradas de numeros negativos. Estos casos se manejan igual que el input invalido.
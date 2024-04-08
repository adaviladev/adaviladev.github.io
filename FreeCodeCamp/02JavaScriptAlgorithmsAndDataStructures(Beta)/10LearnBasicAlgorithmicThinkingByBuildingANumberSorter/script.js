// Step 1
// In this project, you will be building a number sorter. The HTML and CSS have been provided for you. Feel free to explore them.

// When you are ready, declare a sortButton variable and assign it the value of .getElementById() with the argument "sort".

    // Este código está utilizando JavaScript para encontrar un elemento HTML con el id "sort" y guardarlo en una variable llamada sortButton.

const sortButton = document.getElementById("sort");

// Step 2
// To prepare your project's logic, use const and arrow syntax to declare a sortInputArray function. It should take a single event parameter.

    // Este código define una función llamada `sortInputArray`. Sin embargo, la función está vacía, lo que significa que no hace nada en este momento. Cuando se ejecuta, la función `sortInputArray` espera recibir un parámetro `event`, que probablemente será un evento de algún tipo, como un clic del ratón o un envío de formulario.

// const sortInputArray = (event) => {

// }

// Step 3
// You will be using this as an event listener for the sortButton. Because buttons associated with a form element submit by default, you need to prevent that behavior. Call event.preventDefault() in your function to do this.

    // Este código define una función llamada `sortInputArray`. Esta función toma un parámetro llamado `event`, que probablemente representa algún tipo de evento del navegador, como hacer clic en un botón o enviar un formulario. 
    // Dentro de la función, `event.preventDefault()` se utiliza para evitar el comportamiento predeterminado del navegador asociado con el evento. Por ejemplo, si la función está vinculada a un formulario y se llama cuando el formulario se envía, `event.preventDefault()` evitará que el formulario se envíe y la página se recargue.

// const sortInputArray = (event) => {
//     event.preventDefault()
//   }

// Step 4
// To test your code as you write it, mount an event listener to your sortButton element. It should listen for the "click" event, and take sortInputArray as the callback.

    // Este código agrega un "escuchador de eventos" al elemento guardado en la variable `sortButton`. Cuando se hace clic en ese elemento (probablemente un botón), se llamará a la función `sortInputArray`.

    // Dado que la función `sortInputArray` tiene `event.preventDefault()`, el comportamiento predeterminado del clic del botón se prevendrá.

        // El comportamiento predeterminado de hacer clic en un elemento HTML, como un botón, depende del contexto en el que se encuentra ese elemento y de cómo se haya configurado.

        // Por ejemplo:

        // Si el botón está dentro de un formulario y tiene el atributo type="submit", el comportamiento predeterminado sería enviar el formulario.
        // Si el botón está dentro de un enlace <a> sin un atributo href, el comportamiento predeterminado sería no hacer nada (excepto quizás ejecutar eventos de JavaScript asociados).
        // Si el botón está dentro de un enlace <a> con un atributo href, el comportamiento predeterminado sería seguir el enlace.

sortButton.addEventListener("click", sortInputArray);

// Step 5
// Back in your sortInputArray function, you need to get the values from your select elements. Since they all have the class values-dropdown, you can query them all at once.

// Use document.getElementsByClassName() to get all the elements with this class by passing in the argument "values-dropdown". Assign that to an inputValues variable with const.

    // Este código define una función llamada sortInputArray, que toma un parámetro event. Dentro de la función:

    // event.preventDefault(); se utiliza para prevenir el comportamiento predeterminado del evento. En este caso, evitará que se realice la acción predeterminada asociada al evento, como el envío de un formulario o el seguimiento de un enlace.

    // const inputValues = document.getElementsByClassName("values-dropdown"); busca todos los elementos HTML que tienen la clase "values-dropdown" y los guarda en la variable inputValues. La función getElementsByClassName() devuelve una lista de todos los elementos que tienen la clase especificada.
        // getElementsByClassName devuelve una colección de elementos (un array-like object), no un array en sí mismo.

// const sortInputArray = (event) => {
//     event.preventDefault();
//     const inputValues = document.getElementsByClassName("values-dropdown")
  
//   }


// Step 6
// Remember that .getElementsByClassName() returns an array-like object. You can use the spread operator to convert it into an array.
  
// Convert the document.getElementsByClassName() call to an array with the spread operator and assign it to a variable called inputValues.

    // [...document.getElementsByClassName("values-dropdown")], el operador de propagación (...) se utiliza para convertir esta colección de elementos en un array. Esto puede ser útil si prefieres trabajar con un array en lugar de una colección de elementos.

// const sortInputArray = (event) => {
//   event.preventDefault();

//   const inputValues = [...document.getElementsByClassName("values-dropdown")];
// }

// Step 7
// You need to get the values from your select elements. However, these values are strings, and you need them to be numbers.

// Since you have an array, you can use the map method to convert each value to a number. Do this by passing a callback function to map that takes a dropdown parameter and returns Number(dropdown.value).

// You should chain the map method directly on your array.
// Your map callback function should use arrow function syntax.
// Your map callback function should take a dropdown parameter.
// Your map callback function should implicitly return Number(dropdown.value).

// La función map se aplica a cada elemento del array resultante. En este caso, se aplica una función de flecha (dropdown) => Number(dropdown.value). Esta función convierte el valor de cada elemento (que se espera que sean valores numéricos) en un número utilizando la función Number(). El resultado final es un array de números, que representa los valores de los elementos con la clase "values-dropdown".

// const sortInputArray = (event) => {
//     event.preventDefault();
  
//     const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => Number(dropdown.value));
//   }

// Step 8
// You need a function to update the display with the sorted numbers. Start by using arrow syntax to declare an updateUI function that takes a single array parameter.

// Because you will be writing algorithms that won't immediately have a return value, set a fallback value for array to be an empty array. Here is an example of a function that has a fallback value:

//     const myFunction = (string = "") => {

//     }

// You should use const to declare an updateUI variable.
// updateUI should be a function.
// updateUI should use arrow syntax.
// updateUI should take a single array parameter.
// updateUI should have a fallback value of an empty array for array.
// updateUI should be empty.

// El código proporcionado define una función llamada updateUI utilizando la sintaxis de funciones flecha en JavaScript. Esta función toma un parámetro llamado array, que tiene un valor predeterminado de un array vacío [].

// const updateUI = (array = []) => {

// }

// Step 9
// To perform an action on each element in the array, use the method that is meant for iterating over arrays.

// Use the forEach() method, and pass it an empty callback which takes num and i as the parameters.

// Dentro de la función, se utiliza el método forEach del objeto array para iterar sobre cada elemento del array. El método forEach ejecuta una función de retorno de llamada una vez por cada elemento en el array.

// En este caso, la función de retorno de llamada que se proporciona a forEach es una función de flecha (num, i) => {}, pero actualmente está vacía, lo que significa que no contiene ningún código dentro de las llaves {}.

// Por lo tanto, la función updateUI actualmente itera sobre cada elemento del array array, pero no realiza ninguna acción dentro de la iteración.

// const updateUI = (array = []) => {
//     array.forEach((num, i) => {})
//   }


// Step 10
// Create a variable named outputValueNode and set its value to the result of calling the document.getElementById() method. Use template literal syntax to pass in the output-value-${i} string to .getElementById().

// Use const to declare an outputValueNode variable in your .forEach() callback.
// outputValueNode should be assigned the value of calling document.getElementById().
// Use template literal syntax to pass in the output-value-${i} string to .getElementById().

// En este código, la función `updateUI` toma un parámetro `array` que tiene un valor predeterminado de un array vacío `[]`. Dentro de la función, se utiliza el método `forEach` para iterar sobre cada elemento del array.

// Dentro del bucle `forEach`, se está accediendo a cada elemento `num` del array y a su índice `i`. Luego, se está intentando obtener un elemento del documento con el id `"output-value-"` seguido del índice `i`. Este enfoque asume que hay elementos en el documento que tienen identificadores de la forma `"output-value-0"`, `"output-value-1"`, etc., correspondientes a cada índice del array.

// Por ejemplo, si `array` tiene tres elementos, se espera que haya elementos en el documento con los ids `"output-value-0"`, `"output-value-1"` y `"output-value-2"` para que este código funcione correctamente.

// Sin embargo, en este fragmento de código actual, no se está haciendo nada más que obtener una referencia al elemento del documento con el id específico. No hay ninguna acción o modificación realizada en los elementos obtenidos dentro del bucle `forEach`.

// const updateUI = (array = []) => {
//     array.forEach((num, i) => {
//         const outputValueNode = document.getElementById(`output-value-${i}`)
//     })
//   }

// Step 11
// Set the innerText property of outputValueNode to num.

// Con la línea `outputValueNode.innerText = num;`, ahora estamos asignando el valor del elemento `num` del array al texto interno del elemento `outputValueNode`. Esto significa que cada elemento del array se mostrará dentro del elemento correspondiente en el documento HTML.

// Por ejemplo, si `array` contiene los valores `[10, 20, 30]`, y hay elementos en el documento con ids `"output-value-0"`, `"output-value-1"` y `"output-value-2"`, entonces después de ejecutar `updateUI(array)`, el texto interno de cada uno de estos elementos se establecerá respectivamente como "10", "20" y "30", mostrando así los valores del array en el documento HTML.

const updateUI = (array = []) => {
    array.forEach((num, i) => {
      const outputValueNode = document.getElementById(`output-value-${i}`);
        outputValueNode.innerText = num;
    })
  }

// Step 12
// In your sortInputArray() function, call your updateUI() function and pass inputValues as the argument.
  
// You should now be able to click the Sort button and see the inputted array in the Output section.

// Al llamar a la función `updateUI(inputValues);`, se está pasando el array `inputValues` como argumento a la función `updateUI`. Esto significa que dentro de la función `updateUI`, el parámetro `array` contendrá los mismos valores que `inputValues`.

// Entonces, si `inputValues` es un array que contiene algunos valores, como `[10, 20, 30]`, al llamar `updateUI(inputValues);`, la función `updateUI` iterará sobre estos valores y los mostrará en los elementos correspondientes en el documento HTML, asumiendo que los elementos del documento tienen los ids adecuados definidos como `"output-value-0"`, `"output-value-1"`, etc.

// Por ejemplo, si `inputValues` contiene `[10, 20, 30]`, y hay elementos en el documento con los ids correspondientes, después de llamar a `updateUI(inputValues);`, los elementos del documento mostrarán "10", "20" y "30" respectivamente como su texto interno.

const sortInputArray = (event) => {
    event.preventDefault();
  
    const inputValues = [
      ...document.getElementsByClassName("values-dropdown")
    ].map((dropdown) => Number(dropdown.value));
  
    updateUI(inputValues);
  }


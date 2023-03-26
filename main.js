// Ejercicios de lógica de programación

// 1.- Para cargar un array con números aleatorios en JavaScript, se puede utilizar el siguiente código:

let numeros = [];
for (let i = 0; i < 10; i++) {
  numeros.push(Math.floor(Math.random() * 100));
}

// Este código crea un array vacío llamado `numeros` y luego utiliza un bucle `for` para agregar 10 números aleatorios al array. En este caso, los números aleatorios son enteros entre 0 y 99.

// Para encontrar el número mayor y menor en el array, se puede utilizar el siguiente código:

let mayor = numeros[0];
let menor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > mayor) {
    mayor = numeros[i];
  }
  if (numeros[i] < menor) {
    menor = numeros[i];
  }
}

// Este código inicializa las variables `mayor` y `menor` con el primer elemento del array y luego utiliza un bucle `for` para comparar cada elemento del array con las variables `mayor` y `menor`. Si el elemento es mayor que `mayor`, se actualiza la variable `mayor`. Si el elemento es menor que `menor`, se actualiza la variable `menor`.




// 2.- A partir de un array de números dado desordenarlos de alguna manera

// Para desordenar un array en JavaScript, puedes crear una función personalizada como la que se muestra a continuación²:


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // Mientras queden elementos a mezclar
  while (0 !== currentIndex) {

    // Seleccionar un elemento sin mezclar
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // Intercambiarlo con el elemento actual
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Esta función utiliza el método `Math.random()` para generar un número aleatorio y el método `floor()` para redondear hacia abajo. Luego, utiliza un bucle while para recorrer el array y mezclar los elementos².



// 3.- En un array de números aleatorios obtener los valores pares.

const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(numero => numero % 2 === 0);
console.log(pares); // [2, 4]

// En este ejemplo, se utiliza el método filter() para crear un nuevo array llamado pares que contiene todos los números pares del array original

// Alternativa usando un bucle for, en lugar del metodo filter:
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var pares = [];

for (var i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    pares.push(numeros[i]);
  }
}

console.log(pares);




// 4.- Cargar un array con números aleatorios y ordenarlos de mayor a menor.

const numeros = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
console.log(numeros); // [ 87, 23, 45, 12, 98, 34, 56, 78, 90, 1 ]
// En este ejemplo se crea un array llamado numeros con una longitud de 10 elementos y se llena con números aleatorios entre 0 y 100 utilizando el método Math.random()1.

// Para ordenar los elementos del array de mayor a menor puedes utilizar el método sort()2. Este método ordena los elementos de un array localmente y devuelve el array ordenado. Por defecto, el método sort() ordena los elementos en orden alfabético o numérico ascendente. Para ordenar los elementos en orden numérico descendente puedes utilizar la siguiente función:

const numerosOrdenados = numeros.sort((a, b) => b - a);
console.log(numerosOrdenados); // [ 98, 90, 87, 78, 56, 45, 34, 23, 12, 1 ]

// En este ejemplo se utiliza una función de comparación para ordenar los elementos del array de mayor a menor.




// 5.- Crear una función llamada “hacerDescuento” que tenga dos parámetros:
// Tipo de cliente. Puede ser de dos tipos: “permanente” o “temporal”
// Precio. Una cantidad decimal
// Dicha función deberá devolver el descuento aplicado a la cantidad. Si el cliente es permanente se le aplicará un descuento del 50%, si es temporal un 20% y en otro caso no se aplicará descuento alguno. 


function hacerDescuento(tipoCliente, precio) {
    let descuento = 0;
    if (tipoCliente === "permanente") {
      descuento = precio * 0.5;
    } else if (tipoCliente === "temporal") {
      descuento = precio * 0.2;
    }
    return descuento;
  }
  
  console.log(hacerDescuento("permanente", 100)); // 50
  console.log(hacerDescuento("temporal", 100)); // 20
  console.log(hacerDescuento("otro", 100)); // 0
//   En este ejemplo se define una función llamada hacerDescuento() que toma dos parámetros: tipoCliente y precio. La función utiliza una estructura condicional para determinar el descuento a aplicar según el tipo de cliente y el precio.




// 6.- Crear una clase Libro
// Propiedades: ISBN, titulo, autor, paginas
// Crear un método para información relativa al libro con el siguiente formato: “El libro con ISBN creado por el autor tiene páginas”
// Crear 2 objetos Libro (los valores que se quieran) y mostrarlos por pantalla.
// Por último, indicar cuál de los 2 tiene más páginas. 

class Libro {
    constructor(ISBN, titulo, autor, paginas) {
      this.ISBN = ISBN;
      this.titulo = titulo;
      this.autor = autor;
      this.paginas = paginas;
    }
  
    informacion() {
      return `El libro con ISBN ${this.ISBN} creado por ${this.autor} tiene ${this.paginas} páginas.`;
    }
  }
  
  const libro1 = new Libro("1234567890", "El Quijote", "Miguel de Cervantes", 863);
  const libro2 = new Libro("0987654321", "La Odisea", "Homero", 541);
  
  console.log(libro1.informacion());
  console.log(libro2.informacion());
  
  if (libro1.paginas > libro2.paginas) {
    console.log(`El libro "${libro1.titulo}" tiene más páginas que el libro "${libro2.titulo}".`);
  } else if (libro1.paginas < libro2.paginas) {
    console.log(`El libro "${libro2.titulo}" tiene más páginas que el libro "${libro1.titulo}".`);
  } else {
    console.log(`Ambos libros tienen la misma cantidad de páginas.`);
  }
//   Este código crea una clase Libro con las propiedades ISBN, titulo, autor y paginas. También se crea un método llamado “informacion” que devuelve una cadena de texto con la información del libro. Luego se crean dos objetos Libro con los valores que se quieran y se muestran por pantalla utilizando el método “informacion”. Por último, se indica cuál de los dos tiene más páginas utilizando una estructura condicional.





// 7.- Calcula la letra de un DNI, pediremos el DNI por teclado y nos devolverá el DNI completo. Para calcular la letra, cogeremos el resto de dividir nuestro DNI entre 23, el resultado debe estar entre 0 y 22.
// Haz un método donde según el resultado de la anterior fórmula busque en un array de caracteres la posición que corresponda a la letra.
// Por ejemplo si escribimos: 32670089 nos devolverá: 32670089S
// El codigo divide entre 23 porque hay 23 letras diferentes que se pueden asignar a un número de DNI. 
// Al dividir el número del DNI entre 23 y tomar el resto, se obtiene un número entre 0 y 22 que se utiliza para buscar la letra correspondiente en una cadena de caracteres. 
// La letra correspondiente se encuentra en la posición del número obtenido en la cadena de caracteres.

function calcularLetraDNI(dni) {
    const caracteres = "TRWAGMYFPDXBNJZSQVHLCKE";
    const resto = dni % 23;
    const letra = caracteres.charAt(resto);
    return dni + letra;
  }
  
  const dni = prompt("Introduce tu DNI sin letra:");
  const dniCompleto = calcularLetraDNI(dni);
  console.log(dniCompleto);

// Este código define una función llamada “calcularLetraDNI” que recibe un número de DNI y devuelve el DNI completo con la letra correspondiente. Para ello, se utiliza una cadena de caracteres que contiene las letras correspondientes a cada resto de la división entre 23. 
// Luego se utiliza el método “charAt” para obtener la letra correspondiente al resto del DNI introducido. 
// Por último, se utiliza el método “prompt” para pedir al usuario que introduzca su DNI sin letra y se llama a la función “calcularLetraDNI” para obtener el DNI completo con la letra correspondiente. 
// El resultado se muestra por consola.

// Codigo alternativo sin utilizar 'charAT' y cambiando los prompt y console.log por window dialog para que no lo haga por consola:

function calcularLetraDNI(dni) {
  const caracteres = "TRWAGMYFPDXBNJZSQVHLCKE";
  const resto = dni % 23;
  const letra = caracteres[resto];
  return dni + letra;
}

const dni = window.prompt("Introduce tu DNI sin letra:");
const dniCompleto = calcularLetraDNI(dni);
window.alert(dniCompleto);




// 8.- Ejercicio DOM basico: https://github.com/webferrol/js-basic-node-exercise

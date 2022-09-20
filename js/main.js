{
  /*

  console.log('----------------------Ejercicio 01----------------------');

// Declara 2 variables numéricas (con el valor que desees), indica cual es mayor de
// los dos. Si son iguales indicalo también. Puedes ir cambiando los valores
// para comprobar que funciona.

  const var01 = 8;
  const var02 = 8;

  if (var01 > var02) {
    console.log(
      'la variable var01 con valor de ' +
        var01 +
        ' es mayor que la variable var02 con valor de ' +
        var02
    );
  } else if (var01 < var02) {
    console.log(
      'la variable var02 con valor de ' +
        var02 +
        ' es mayor que la variable var01 con valor de ' +
        var01
    );
  } else {
    console.log(
      ' las variables var01 y var02 tienen el mismo valor ' +
        var01 +
        ' y ' +
        var02
    );
  }
  console.log('--------------------------------------------------------');
  */
}

{
  /*
  console.log('----------------------Ejercicio 02----------------------');

// Declara un String que contenga tu nombre, después muestra un mensaje de
// bienvenida por consola. Por ejemplo: si introduzco “Fernando”, me aparezca
// “Bienvenido Fernando”.

  const miNombre = 'Israel';

  console.log('Bienvenido ' + miNombre);

  console.log('--------------------------------------------------------');
  */
}

{
  /*
  console.log('----------------------Ejercicio 03----------------------');

// Modifica la aplicación anterior, para que nos pida el nombre que queremos
// introducir (recuerda usar prompt).

  const miNombrePromtp = prompt('Introduce tu nombre');

  console.log(' Bienvenido ' + miNombrePromtp);

  console.log('--------------------------------------------------------');
  */
}

{
  /*

  console.log('----------------------Ejercicio 04----------------------');

// Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá
// por teclado (recuerda pasar de String a double con parseDouble). Usa la
// constante PI.

  const PI = 3.1416;
  const userRadio = parseInt(prompt('Introduce el radio'));
  const area = PI * userRadio ** 2;
  console.log('el Area del circulo con radio ', userRadio, ' es ', area);

  console.log('--------------------------------------------------------');
*/
}

{
  /*
  console.log('----------------------Ejercicio 05----------------------');

// Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es,
// también debemos indicarlo.

  const userInput = parseFloat(prompt('Introduce el número'));

  if (userInput % 2 == 0) {
    console.log('Es divisible entre 2');
  } else {
    console.log('No es divisible entre 2');
  }

  console.log('--------------------------------------------------------');
  */
}

{
  /*
  console.log('----------------------Ejercicio 06----------------------');

// Lee un número por teclado que pida el precio de un producto (puede tener
// decimales) y calcule el precio final con IVA. El IVA sera una constante que sera
// del 21%

  const userInput = parseFloat(prompt('Precio de producto'));
  const IVA = (userInput * 21) / 100;
  console.log(
    `El IVA  del precio ${userInput} es ${IVA}. \n El precio total es ${
      userInput + IVA
    }`
  );

  console.log('--------------------------------------------------------');
  */
}

{
  /*
  console.log('----------------------Ejercicio 07----------------------');

// Muestra los números del 1 al 100 (ambos incluidos). Usa un bucle while.

  let i = 1;

  while (i <= 100) {
    console.log(i);
    i++;
  }

  console.log('--------------------------------------------------------');
  */
}

{
  /*
  console.log('----------------------Ejercicio 08----------------------');

  // Haz el mismo ejercicio anterior con un bucle for.

  let i = 1;

  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }

  console.log('--------------------------------------------------------');
  */
}

{
  /*
  console.log('----------------------Ejercicio 09----------------------');

// Muestra los números del 1 al 100 (ambos incluidos) divisibles entre 2 y 3. Utiliza
// el bucle que desees.

  let i = 1;

  while (i < 100) {
    if (i % 2 == 0 && i % 3 === 0) {
      console.log(i);
    }
    i++;
  }

  console.log('--------------------------------------------------------');
  */
}

{
  /*
  console.log('----------------------Ejercicio 10----------------------');

// Realiza una aplicación que nos pida un número de ventas a introducir, después
// nos pedirá tantas ventas por teclado como número de ventas se hayan indicado.
// Al final mostrara la suma de todas las ventas. Piensa que es lo que se repite y lo
// que no.

  const userInput = parseInt(prompt('Ventas?'));
  const arrayVentas = [];
  let precioTotal = 0;

  for (let i = 0; i < userInput; i++) {
    const precio = parseInt(prompt('Precio de venta'));
    arrayVentas.push(precio);

    //precioTotal+=parseInt(prompt('Precio de venta'));
  }
  precioTotal = arrayVentas.reduce((a, b) => a + b, 0);

  console.log(precioTotal);
  console.log('--------------------------------------------------------');
  */
}

{
  /*
  console.log('----------------------Ejercicio 11----------------------');

  // Crea una aplicación que nos pida un día de la semana y que nos diga si es un día
  // laboral o no. Usa un switch para ello.

  const userInput = prompt('¿Que día de la semana es?');
  userInput.toLowerCase;
  switch (userInput) {
    case 'lunes':
      console.log('Hoy es laboral');
      break;
    case 'martes':
      console.log('Hoy es laboral');
      break;
    case 'miercoles':
      console.log('Hoy es laboral');
      break;
    case 'jueves':
      console.log('Hoy es laboral');
      break;
    case 'viernes':
      console.log('Hoy es laboral');
      break;
    case 'sabado':
      console.log('Hoy es festivo');
      break;
    case 'domingo':
      console.log('Hoy es festivo');
      break;
    default:
      console.log('Introduce un día valido');
      break;
  }
  console.log('--------------------------------------------------------');
  */
}

{
  /*
  console.log('----------------------Ejercicio 12----------------------');

  // Escribe una aplicación con un String que contenga una contraseña cualquiera.
  // Después se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando
  // aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo
  // “Enhorabuena”. Piensa bien en la condición de salida (3 intentos y si acierta sale,
  // aunque le queden intentos).

  let userInput = prompt('Introduce contraseña');
  const password = 'kilO';
  const intentos = 3;

  if (password === userInput) {
    alert('Contraseña correcta');
  } else {
    for (let i = intentos - 1; i > 0; i--) {
      alert(`Incorrecto, te quedan ${i} intentos`);
      userInput = prompt('Introduce contraseña');
    }
  }

  // TODO REVISAR EL CÓDIGO Y LOS MENSAGES
  console.log('--------------------------------------------------------');
  */
}

{
  console.log('----------------------Ejercicio 13----------------------');

  // Crea una aplicación llamada CalculadoraInversa, nos pedirá 2 operandos (int) y
  // un signo aritmético (String), según este último se realizará la operación
  // correspondiente. Al final mostrara el resultado en un cuadro de dialogo.
  // Los signos aritméticos disponibles son:
  // +: suma los dos operandos.
  // -: resta los operandos.
  // *: multiplica los operandos.
  // /: divide los operandos, este debe dar un resultado con decimales (double)
  // ^: 1o operando como base y 2o como exponente.
  // %: módulo, resto de la división entre operando1 y operando2.

  const dato01 = parseInt(prompt('dato 1'));
  const operacion = prompt(
    'operacion',
    'sumar +, restar -, multiplicar *, dividir /, exponente **, resto %'
  ).toLowerCase();
  const dato02 = parseInt(prompt('dato 2'));

  const suma = (valor01, valor02, simbolo) => {
    if (simbolo === '+' || simbolo === 'sumar') return valor01 + valor02;
  };
  const resta = (valor01, valor02, simbolo) => {
    if (simbolo === '-' || simbolo === 'restar') return valor01 - valor02;
  };
  const multiplicacion = (valor01, valor02, simbolo) => {
    if (simbolo === '*' || simbolo === 'multiplicar') return valor01 * valor02;
  };
  const division = (valor01, valor02, simbolo) => {
    if (simbolo === '/' || simbolo === 'dividir') return valor01 / valor02;
  };
  const base = (valor01, valor02, simbolo) => {
    if (simbolo === '**' || simbolo === 'exponente') return valor01 ** valor02;
  };
  const resto = (valor01, valor02, simbolo) => {
    if (simbolo === '%' || simbolo === 'resto') {
      return (valor01 / valor02) % 2;
    }
  };

  const resultado = (valor01, valor02, simbolo) => {
    return (
      suma(valor01, valor02, simbolo) ||
      resta(valor01, valor02, simbolo) ||
      multiplicacion(valor01, valor02, simbolo) ||
      division(valor01, valor02, simbolo) ||
      base(valor01, valor02, simbolo) ||
      resto(valor01, valor02, simbolo) ||
      'Introduce valores validos'
    );
  };

  console.log(resultado(dato01, dato02, operacion));

  console.log('--------------------------------------------------------');
}

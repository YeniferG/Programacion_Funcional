const suma = (a, b) => a + b;

const resta = (a, b) => a - b;

const multiplicacion = (a, b) => {
    
    let n = 0;

    b % 2 !== 0 ? (n = division(b, 2) + 1) : (n = division(b, 2));

    let acum = 0;

    for (let index = 0; index < n; index++) {
        if (n > 1) {
            acum += suma(a, a);
            n -= 1;
        }
        if (n === 1) {
            acum += resta(suma(a, a), a);
        }
    }

    return acum;
};

const division = (a, b) => {
    const resto = a % b;
    let contador = 0;

    while (a > resto) {
        contador++;
        a = resta(a, b);
    }

    return contador;
};

console.log(`Suma `, suma(556, 444));

console.log(`Resta `, resta(100,85));

console.log(`Multiplicacion `, multiplicacion(5, 5));

console.log(`Division `, division(5, 2));


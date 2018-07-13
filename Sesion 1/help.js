
//str

var str = "pepe pecas pica papas";
var str_prueba = str.replace(/p/g, "f");

console.log(str_prueba);


//Math 
/* 
    No se te olvide enseñar residuos
*/
var random = Math.floor(Math.random() * 10); 
console.log(random);


//Arrays
/* 
    Que no se te olvide tambien enseñar pop, shift y unshift,
    Comentar que existe delete pero Splice es mejor para eliminar elementos
    Explicar reverse
*/
var odd = new Array(1, 3, 5, 7, 9);
var even = [0, 2, 4, 6, 8];
var evenLength = even.length;
var nums = [3, 6, 2, 7, 1, 89, 9, 4];

var sorted_nums = nums.sort(function (a, b) { return b - a });
console.log(sorted_nums);

var zero_nine = odd.concat(even).sort();
console.table(zero_nine);

console.log(odd.slice(2, 4));

var even_join = even.join("=^.^=");
console.log(even_join);

even.splice(0, 2, 10, 12, 14);
console.table(even);

var sumOddEven = [];
for (let i = 0; i < odd.length; i++) {
    sumOddEven.push(odd[i] + even[i]);
}
console.table(sumOddEven);

for (let num of odd) {
    console.log(num);
}

odd.forEach(function (valor) {
    console.log(valor);
})

function letVar() {
    if (1) {
        var a = "var";
        let b = "let";
    }
    console.log(a);
    console.log(b);
}

//Funciones

var a = 10;
var b = 5;

var suma = function (a, b) {
    return a + b;
}
var c = suma(a, b);

console.log(c);

console.table(tanhArray(odd));
console.log(tanhArray(a));

function tanhArray(x) {
    if (x instanceof Array) {
        let r = [];
        for (let num of x) {
            r.push(Math.tanh(num));
        }
        return r;
    } else {
        return Math.tanh(x);
    }
}

var nombre = "Marco";
console.log(saludo(nombre));

function saludo(str) {
    return "Hola " + nombre + "!";
}


var num1 = 9;
var num2 = 10;

toHundred(num1, num2);

function toHundred(a, b) {
    let x = a;
    let y = b;
    let r = a * b;
    if (r < 1000) {
        x += a;
        y += b;
        toHundred(x, y);
    } else {
        console.log("x: " + x);
        console.log("y: " + y);
        console.log("r: " + r)
    }
}


/* 
    Reto crear un array de 30 elementos con valores aleatorios con numeros del 1 al 100,
    encontrar aquellos que son divisibles de 7 y aplicarles tanh
    encontrar el numero 13, si existe reemplazarlo por "Patito de goma" e imprimir su index

    imprimir cada paso
*/

var random_arr = randomArr(30);
var seven = sevenizer(random_arr);

console.table(random_arr);
console.table(seven);
thirteenToDuck(random_arr);

function randomArr(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}

function thirteenToDuck(arr) {
    let index = arr.indexOf(13);
    if (index != -1) {
        arr[index] = "Patito"
        console.log("Patito: " + index);
        thirteenToDuck(arr);
    }
}

function sevenizer(arr) {
    let r = [];
    for (let num of arr) {
        if (num % 7 == 0 && num != 0) {
            r.push(num);
        }
    }
    return r;
}
//  Afisati maximul dintre trei/patru numere
const numbers = [23, 13, 44, 21];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
  }
}

console.log(max);

/*
Să se scrie un program  care verifică ca un numar este par sau impar.
*/
let number = 13;
if (number % 2 === 0) {
  console.log('par');
} else {
  console.log('impar');
}

/*
Se dau trei numere naturale a b x. Să se verifice dacă numărul x aparține intervalului [a,b].
*/
let a = 5;
let b = 12;
let c = 3;

if (c > a && c < b) {
  console.log(`Numarul ${c} este intre ${a} si ${b}`);
} else {
  console.log(`Numarul ${c} NU face parte din interval`);
}

/**
 * Afisam suma primelor 10 numere naturale ---> while
 */
let sum = 0;
let i = 1;

while (i <= 10) {
  sum = sum + i;
  i++;
}

i = 10;
sum = 0;
while (i <= 10 && i > 0) {
  sum = sum + i;
  i--;
}
//   i=1 => sum =sum +1 => i-- = 0
//   i=0 => sum =sum +0 => i-- = -1
// i=-1 => sum =sum + (-1)

console.log(sum);

/**
 * Sa afisam toate numerele intre 1 si 20, care se impart(divizibile) fix si la 3 si la 5
 */
number = 1;

while (number <= 20) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log(number);
  } else {
    console.log('no such number');
  }

  number++;
}

/**
 * Afisati numerele de la 1 la 10 ---> do...while
 */

number = 1;
do {
  console.log(number);
  number++;
} while (number <= 10);

/**
 * Adunati numere incepand cu 1, pana cand suma lor este mai mica sau egala cu 50 ---> do...while
 */
number = 1;
sum = 0;
let tempSum = 0;

// do {
//   sum += number;
//   number++;
// } while (sum <= 50);

while (sum + number + 1 <= 50) {
  sum += number;
  number++;
}

console.log(sum);

/**
 * Sa se afiseze numere, incepand de la 1, daca numerele sa fie impare.
 * Opreste afisarea daca numarul curent este mai mare ca si 20 sau se imparte la 7. ---->do...while
 */
number = 1;
do {
  if (number % 2 !== 0) {
    console.log(number);
  }
  number++;
} while (number <= 20 && number % 7 !== 0);

/**
 * Stabiliți dacă dintre mai multe numere citite sunt mai multe numere pare sau mai multe impare.
 */
let countEven = 0;
let countOdd = 0;
const evenAndOdd = [23, 43, 543, 765, 66, 773, 33, 8, 88, 12, 34, 55, 67, 87];

for (let index = 0; index < evenAndOdd.length; index++) {
  if (evenAndOdd[index] % 2 === 0) {
    countEven += 1;
  } else {
    countOdd += 1;
  }
}

console.log(`Even numbers: ${countEven}`);
console.log(`Odd numbers: ${countOdd}`);

if (countEven > countOdd) {
  console.log('More even numbers');
} else if (countOdd > countEven) {
  console.log('More odd numbers');
} else {
  console.log('The counters are equal');
}

/**
 * De la un text dat, afisati caracterele in ordine inversa. "anabella" -> "allebana" --->for
 */
const text = 'anabella';
let textReversed = '';

console.log('a' + 'v');
console.log(text[3]);

for (let index = text.length - 1; index >= 0; index--) {
  textReversed = textReversed + text[index];
}
console.log(textReversed);

/**
 * TEMA: Aflati daca un cuvant este palindrom. ex: "madam"->"madam" la fel si scris de la coada la cap
 */

/**
 * git fetch --> sa va aduceti toate branch-urile
 * sa accesati js-conditional-exercises branch
 */

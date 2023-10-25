"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

function sum (a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Вы ввели не число'
    } else {
        return a + b;
    }
}

function Difference (a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Вы ввели не число';
    } else if (a < b){
        return b - a;
    } else if (a === b){
        return 0;
    } else {
        return a - b;
    }
}

function Multiplication (a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Вы ввели не число'
    } else if (a === 0 || b === 0) {
        return 0;
    } else {
        return a * b;
    }
}

function Division(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Вы ввели не число'
    } else if (a === 0 || b === 0) {
        return 0;
    } else if (a < b){
        return b / a;
    } else {
        return a / b;
    }
}

let numberFirst = +prompt('Введите первое число: ');
let numberSecond = +prompt('Введите второе число: ');
console.log(`Сумма чисел равна = ${sum(numberFirst, numberSecond)}`);
console.log(`Разность чисел равна = ${Difference(numberFirst, numberSecond)}`);
console.log(`Произведение чисел равно = ${Multiplication(numberFirst, numberSecond)}`);
console.log(`Частное чисел равно = ${Division(numberFirst, numberSecond)}`);

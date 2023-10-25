"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

//вариант 1
function cube(number) {
    return number ** 3;
}
console.log(cube(2) + cube(3)); // 35

// вариант 2
let exponentiation = number => Math.pow(number, 3);
console.log(exponentiation(2) + exponentiation(3));

"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

console.log('Задание 3');

// задаем массив
function randomArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.ceil(Math.random() * 9)) 
    }
    return arr
}
let length = prompt('Введите длинну массива: ')
const myArr = randomArray(length)
console.log(`Сгенерирован новый массив - [${myArr}]`);


// 1. Рассчитать сумму элементов этого массива
function sum (arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count+=arr[i];
    }
    return count;
}
console.log(`Сумму элементов этого массива - [${sum(myArr)}]`);

// 2. Найти минимальное число
function min(arr) {
    const min = Math.min(...arr);
    return min;
}
console.log(`Минимальное число этого массива - [${min(myArr)}]`);

// 3. Найти есть ли в этом массиве число 3
function presence(number) {
    if (number > 0) {
        return `В массиве присутствует цифра 3 в количистве - ${number} шт.`
    } else {
        return `В массиве нет цифр 3`
    }
}
function three(arr) {
    count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 3) {
            count++;
        }
    }
    return presence(count);
}
console.log(three(myArr));
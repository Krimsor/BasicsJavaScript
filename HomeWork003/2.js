"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

function salary() {
    const sal = prompt('Введите сумму: ');

    if (isNaN(sal)) {
        alert('Введите корректные данные! Попробуйте ещё раз!');
        salary();
    } else {
        const result = sal * 0.87
        console.log(`Размер Вашей заработной платы с вычетом налога = ${result}`);
    }
}
salary();
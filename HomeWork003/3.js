"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

// вариант 1
const num1 = +prompt(`Введите первое число: `);
const num2 = +prompt(`Введите второе число: `);
const num3 = +prompt(`Введите третье число: `);

alert(`Максимальное число из введенных Вами - ${maximum(num1, num2, num3)}`);

function maximum(a, b, c) {
    if(a >= b && a >= b){
        return a;
    } else if (b >= a && b >= c){
        return b;
    } else{
        return c;
    }
}

// вариант 2
function maxNumber() {
    const num1 = Number(prompt(`Введите первое число: `));
    const num2 = Number(prompt(`Введите второе число: `));
    const num3 = Number(prompt(`Введите третье число: `));

    const maximum = Math.max(num1, num2, num3);
    return maximum;
}
const result =  maxNumber();
alert(`Максимальное число из введенных Вами -  ${result}.`);

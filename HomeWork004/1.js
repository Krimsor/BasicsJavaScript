"use strict";

/*
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

console.log('Задание 1');
for (let i = 0; i <= 10; i++) {
    if (i === 0){
        console.log(`${i} - это ноль`);
    } else if (i % 2 === 0) {
        console.log(`${i} - это четное число`);
    } else {
        console.log(`${i} - это нечетное число`); 
    }
}

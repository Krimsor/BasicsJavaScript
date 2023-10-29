"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

console.log('Задание 4');
for (let i = 0; i <= 19; i++) {
    let count = ''
    for (let j = 0; j <= i; j++) {
        count +='x';    
    }
    console.log(count);
}

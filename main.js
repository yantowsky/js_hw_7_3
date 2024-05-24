let num;
let count = 10;

do {
    num = prompt(`Введіть число, більше за 100. У Вас залишилось спроб: ${count}`);
} while (checkNum(num));

function checkNum(num) {
    count--;
    return (num > 100) ? console.log(`Ви ввели число ${num}, яке більше 100 з ${10 - count} спроби.`) :
        (!count) ? false : num;
}
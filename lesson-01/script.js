// Первая задача

/* let allSquare = 10;
let metrAllSquare = allSquare * 100; // Общая площадь в метрах
let garden = 15 * 25; // Площадь одной грядки
let amount = parseInt(metrAllSquare / garden); // Количество целых грядок
let freeSquare = metrAllSquare - amount * garden;
console.log(freeSquare); */

//Вторая задача

// let sm = 15 * 100; // Общая площадь в см2
// let buzy = 600;
// let free = sm - buzy;
// console.log(free); // Площадь остатка

// Третья задача

// let one = 5,
//   two = 7,
//   three = 8;
// let answer = Math.min(one, two, three);

// Четвертая задача

let number = 50;
let x = 14;
let y = 156;

if (Math.abs(x - number) > Math.abs(y - number)) {
  alert("Ближайшее к заданному числу: " + y);
} else if (Math.abs(x - number) < Math.abs(y - number)) {
  alert("Ближайшее к заданному числу: " + x);
} else {
  alert("Оба числа на одинаковом отдалении");
}

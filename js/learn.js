'use strict'
// let login = prompt('Введите логин')
// let password = prompt('Введите пароль')
// let dataLogin = 'Admin'
// let dataPassword = '12345'
// console.log(login)
// console.log(password)
// if (login != dataLogin && password != dataPassword) {
//     alert (' В доступе отказано')
// }
// else {
//     alert ('Доступ разреш')
// }

// let year = prompt ('какой сейчас год?');
// year = Number(year);
// console.log (year % 4 == 0 && year % 100 == 1);
// if (year % 4 == 0 && year % 100 != 0) {
//     let date = prompt ('какая сейчас дата?')
//     date = Number(date);
//     if (date == 29) {
//         alert ('магическая дата')
//     }
//     else {
//         alert ('обычная дата');
//     }
// }

// let time = prompt ('какие сейчас сутки?')
// time = Number(time);
// if (time>=6 && time<=11) {
//     alert ('доброе утро!')
// }
// else if (time>=12 && time<=17) {
//     alert ('добрый день!')
// }
// else if (time>=18 && time<=22) {
//     alert ('добрый вечер!')
// }
// else if (time==23 || time>=0 && time<=5) {
//     alert ('спокойной ночи!')
// }

// let div = prompt ('проверка числа на делимость на 3 и на 5')
// div = Number(div);
// if (div %3 == 0 && div %5==0) {
//     alert ('число делится на 3 и на 5')
// }
// else if (div %3 == 0) {
//     alert ('число делится только на 3')
// }
// else if (div %5 == 0) {
//     alert ('число делится только на 5')
// }
// else if (div %3 != 0 && div %5 != 1) {
//     alert ('число не делится ни на 3, ни на 5')
// }

 
// let account = prompt ('Введите логин')
// let password = prompt ('Введите пароль')
// let datalogin = 'Admin'
// let datapassword = 'qwerty123'
// console.log (account)
// console.log (password)
// if (account != datalogin && password != datapassword ) {
//     alert ('в доступе отказано')
// } else {
//     alert ('Доступ разрешен!')
// }

let temperature = prompt ('Рекомендация по температуре')
temperature = Number(temperature)
if (temperature < -10) {
    alert ('Очень холодно! Наденьте теплую куртку, шапку и перчатки')
}
else if (temperature > -10 && temperature >= 10) {
    alert ('Прхладно! Наденьте куртку')
}
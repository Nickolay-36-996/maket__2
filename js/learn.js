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

// let temperature = prompt('Рекомендация по температуре')
// temperature = Number(temperature)
// if (temperature < -10) {
//     alert ('Очень холодно! Оденьте теплую куртку, шапку и перчатки')
// }
// else if (temperature >= -10 && temperature <= 10) {
//     alert ('Прохладно! Неденьте куртку')
// }
// else if (temperature >= 11 && temperature <= 20) {
//     alert ('Комфортно! Можно выйти в лёгкой одежде')
// }
// else if (temperature >= 21) {
//     alert ('Жарко! Одевайтесь легко')
// }

// let pay = prompt('Сумма вашей покупки?')
// pay = Number(pay)
// if (pay <= 1000) {
//     alert ('Скидка 0%')
// }
// else if (pay >= 1000 && pay <= 5000) {
//     alert ('Скидка 5%')
// }
// else if (pay >= 5001 && pay <= 10000) {
//     alert ('Скидка 10%')
// }
// else if (pay >= 10000) {
//     alert ('Скидка 15%')
// }

let login = prompt ('Введите логин')
let password = prompt ('Введите пароль')
let dataLogin = 'Admin'
let dataPassword = "qwerty123"
console.log(login)
console.log(password)
if (login != dataLogin && password != dataPassword) {
    alert ('В доступе отказано!')
}
else if (login == dataLogin && password != dataPassword) {
    alert ('Неверный пароль.')
}
else if (login != dataLogin && password == dataPassword || password != dataPassword) {
    alert ('Неверный логин.')
}
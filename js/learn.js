'use strict'
let login = prompt('Введите логин')
let password = prompt('Введите пароль')
let dataLogin = 'Admin'
let dataPassword = '12345'
console.log(login)
console.log(password)
if (login != dataLogin && password != dataPassword) {
    alert (' В доступе отказано')
}
else {
    alert ('Доступ разреш')
}
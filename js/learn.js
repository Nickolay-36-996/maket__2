'use strict'
let age = prompt('Призывной возраст?');
if (age < 18) {
    alert('гуляй');
} else if (age >= 18 && age <27) {
    alert('в армию');
} else {
    alert('на работу');
}
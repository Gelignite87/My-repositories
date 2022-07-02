

//-----------------------------------------------------------------------------------------------------------------------------------------------
// Деструктуризация.

var box = {
    color: 'green1000',
    position: 1000,
    render: ['white', 'green', 'yellow'],
};

const { color: c, position: p, render: [a1, b, v] } = box;
console.log(c, p, a1, b, v);

function gik({ color: c, position: p, render: [a, b, v] }) {
    console.log(c, p, a, b, v);
};

gik(box);

//-----------------------------------------------------------------------------------------------------------------------------------------------
// Работа с this.

var box = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.getElementsByClassName('green')[0].addEventListener('click', (x) => {
            console.log(this);
            console.log(x.target);
            var str = `This a box number = ${this.position} and color = ${this.color}`;
            console.log(str);
        });
    }
}
var box1 = {
    color: 'yellow',
    position: 1,
    clickMe: function () {
        let self = this;
        document.querySelectorAll('.yellow')[0].addEventListener('click', function (x) {
            console.log(this);
            console.log(x.target);
            var str = `This a box number = ${self.position} and color = ${self.color}`;
            console.log(str);
        });
    }
}
box.clickMe();
box1.clickMe();

//-----------------------------------------------------------------------------------------------------------------------------------------------
// Шахматы.

function chest() {
    let j = 0;
    let i = 0;
    let s = 0;
    let div = [];
    let left = 0;
    let top = 0;
    for (i = 1; i < 9; i++) {
        let letters = [];
        letters[1] = "A";
        letters[2] = "B";
        letters[3] = "C";
        letters[4] = "D";
        letters[5] = "E";
        letters[6] = "F";
        letters[7] = "G";
        letters[8] = "H";
        if (i % 2 !== 0) {
            for (j = 1; j < 9; j++) {
                s = `${j}${j}`;
                div[s] = document.createElement(`div`);
                div0.appendChild(div[s]);
                div[s].className = 'my_p';
                div[s].innerHTML = `<p>${j}${letters[i]}<p>`;
                div[s].style.width = '30px';
                div[s].style.height = '30px';
                div[s].style.lineHeight = '30px';
                div[s].style.color = 'black';
                div[s].style.background = 'white';
                div[s].style.boxSizing = 'border-box';
                div[s].style.position = 'absolute';
                div[s].style.textAlign = 'center';
                div[s].style.left = `${left}px`;
                div[s].style.top = `${top}px`;
                left += 60;
            }
            top += 30;
            left -= 450;
        } else {
            for (j = 1; j < 8; j++) {
                s = `${j}${j}`;
                div[s] = document.createElement(`div`);
                div0.appendChild(div[s]);
                div[s].className = 'my_p';
                div[s].innerHTML = `<p>${j}${letters[i]}<p>`;
                div[s].style.width = '30px';
                div[s].style.height = '30px';
                div[s].style.lineHeight = '30px';
                div[s].style.color = 'black';
                div[s].style.background = 'white';
                div[s].style.boxSizing = 'border-box';
                div[s].style.position = 'absolute';
                div[s].style.textAlign = 'center';
                div[s].style.left = `${left}px`;
                div[s].style.top = `${top}px`;
                left += 60;
            }
            top += 30;
            left -= 450;
        }
    }
}

chest()

//-----------------------------------------------------------------------------------------------------------------------------------------------
// Игра ходилка с выводом истории.

let j = 0;
let div = [];
div[j] = document.createElement('div');
div0.appendChild(div[j]);
div[j].className = 'my_p';
div[j].innerHTML = '<p>Start game<p>';

let quest = {
    direction: "RLUD",
    move: function () {
        let x = prompt(`Сhoose from 'R L U D'`);
        div[++j] = document.createElement(`div`);
        div0.appendChild(div[j]);
        div[j].className = 'my_p';
        div[j].innerHTML = '<p>Сhoose from "R L U D"<p>';
        for (; true;) {
            if (x === 'R' || x === 'L' || x === 'U' || x === 'D') {
            } else {
                x = prompt(`You entered wrong letters. Сhoose from 'R L U D'`);
                div[++j] = document.createElement(`div`);
                div0.appendChild(div[j]);
                div[j].className = 'my_p';
                div[j].innerHTML = '<p>You entered wrong letters. Сhoose from "R L U D"<p>';
                continue;
            }
            if (x === this.direction && x !== 'U') {
                switch (this.direction) {
                    case 'R':
                        console.log(`Нельзя идти дважды направо, смените направление`);
                        div[++j] = document.createElement(`div`);
                        div0.appendChild(div[j]);
                        div[j].className = 'my_p';
                        div[j].innerHTML = '<p>Нельзя идти дважды направо, смените направление<p>';
                        x = prompt(`You entered wrong path. Сhoose from 'R L U D'`);
                        break;
                    case 'L':
                        console.log(`Нельзя идти дважды налево, смените направление`);
                        div[++j] = document.createElement(`div`);
                        div0.appendChild(div[j]);
                        div[j].className = 'my_p';
                        div[j].innerHTML = '<p>Нельзя идти дважды налево, смените направление<p>';
                        x = prompt(`You entered wrong path. Сhoose from 'R L U D'`);
                        break;
                    case 'D':
                        console.log(`Нельзя идти дважды назад, смените направление`);
                        div[++j] = document.createElement(`div`);
                        div0.appendChild(div[j]);
                        div[j].className = 'my_p';
                        div[j].innerHTML = '<p>Нельзя идти дважды назад, смените направление<p>';
                        x = prompt(`You entered wrong path. Сhoose from 'R L U D'`);
                        break;
                }
            } else {
                this.direction = x;
                break;
            }
        }
        switch (this.direction) {
            case 'R':
                console.log(`Вы идёте направо`);
                div[++j] = document.createElement(`div`);
                div0.appendChild(div[j]);
                div[j].className = 'my_p';
                div[j].innerHTML = '<p>Вы идёте направо<p>';
                break;
            case 'L':
                console.log(`Вы идёте налево`);
                div[++j] = document.createElement(`div`);
                div0.appendChild(div[j]);
                div[j].className = 'my_p';
                div[j].innerHTML = '<p>Вы идёте налево<p>';
                break;
            case 'U':
                console.log(`Вы идёте прямо`);
                div[++j] = document.createElement(`div`);
                div0.appendChild(div[j]);
                div[j].className = 'my_p';
                div[j].innerHTML = '<p>Вы идёте прямо<p>';
                break;
            case 'D':
                console.log(`Вы идёте назад`);
                div[++j] = document.createElement(`div`);
                div0.appendChild(div[j]);
                div[j].className = 'my_p';
                div[j].innerHTML = '<p>Вы идёте назад<p>';
                break;
        }
    }
}

for (let a in quest) {
    console.log(a + ": " + quest[a]);
}

for (let i = 0; i < 5; i++) {
    let ov
    let sa
    switch (i) {
        case 0:
            ov = 'ов';
            sa = 'ось';
            break;
        case 1:
        case 2:
        case 3:
            ov = 'а';
            sa = 'ось';
            break;
        case 4:
            ov = '';
            sa = 'ся';
            break;
    }
    console.log(`Остал${sa} ${5 - i} шаг${ov}`);
    div[++j] = document.createElement('div');
    div0.appendChild(div[j]);
    div[j].className = 'my_p';
    div[j].innerHTML = `<p>Остал${sa} ${5 - i} шаг${ov}<p>`;
    quest.move();
}

console.log(`The game has ended`);
div[++j] = document.createElement('div');
div0.appendChild(div[j]);
div[j].className = 'my_p';
div[j].innerHTML = `<p>The game has ended<p>`;

//-----------------------------------------------------------------------------------------------------------------------------------------------
// Работа с добавлением элементов.

let div = [];
for (let i = 0; i < 10; i++) {
    div[i] = document.createElement("div");
    div[i].className = 'my_div';
    div[i].innerHTML = '<div class="block_product">    <div><img class="img" src="images/Product2.png" alt="Product2"></div>    <div class="block_text_product">        <div style="margin: 10px 0 0 0;" class="block_text_product1">ELLERY X MO CAPSULE</div>        <div class="block_text_product2">Known for her sculptural takes on traditional tailoring,            Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</div>        <div class="block_text_product3">$52.00</div>    </div></div>';
}
let body1 = document.getElementsByClassName('body1');
body1[0].insertBefore(div[0], body1[0].children[2]);
body1[0].appendChild(div[1]);

p111.style.color = "blue";
p111.setAttribute("class", "My_p112");
console.log(p111.getAttribute("class"));
p111.classList.add('p_new', 'new')
p111.classList.toggle("new");
p111.classList.toggle("new1");
p111.classList.remove("new1");
console.log(p111.classList);

//-----------------------------------------------------------------------------------------------------------------------------------------------
// Запрос DOM по классу.

let content2 = document.getElementsByClassName("block_product");
for (let a in content2) {
    console.log(a + ": " + content2[a]);
}
let cl = content2[0].classList;
let cn = content2[0].className;

//-----------------------------------------------------------------------------------------------------------------------------------------------
// Игра ходилка.

// let quest = {
//     direction: "RLUD",
//     move: function () {
//         let x = prompt(`Сhoose from 'R L U D'`);
//         for (; true;) {
//             if (x === 'R' || x === 'L' || x === 'U' || x === 'D') {
//             } else {
//                 x = prompt(`You entered wrong letters. Сhoose from 'R L U D'`);
//                 continue;
//             }
//             if (x === this.direction && x !== 'U') {
//                 switch (this.direction) {
//                     case 'R':
//                         console.log(`Нельзя идти дважды направо, смените направление`);
//                         x = prompt(`You entered wrong path. Сhoose from 'R L U D'`);
//                         break;
//                     case 'L':
//                         console.log(`Нельзя идти дважды налево, смените направление`);
//                         x = prompt(`You entered wrong path. Сhoose from 'R L U D'`);
//                         break;
//                     case 'D':
//                         console.log(`Нельзя идти дважды назад, смените направление`);
//                         x = prompt(`You entered wrong path. Сhoose from 'R L U D'`);
//                         break;
//                 }
//             } else {
//                 this.direction = x;
//                 break;
//             }
//         }
//         switch (this.direction) {
//             case 'R':
//                 console.log(`Вы идёте направо`);
//                 break;
//             case 'L':
//                 console.log(`Вы идёте налево`);
//                 break;
//             case 'U':
//                 console.log(`Вы идёте прямо`);
//                 break;
//             case 'D':
//                 console.log(`Вы идёте назад`);
//                 break;
//         }
//     }
// }

// for (let a in quest) {
//     console.log(a + ": " + quest[a]);
// }

// for (let i = 0; i < 5; i++) {
//     let ov
//     let sa
//     switch (i) {
//         case 0:
//             ov = 'ов';
//             sa = 'ось';
//             break;
//         case 1:
//         case 2:
//         case 3:
//             ov = 'а';
//             sa = 'ось';
//             break;
//         case 4:
//             ov = '';
//             sa = 'ся';
//             break;
//     }
//     console.log(`Остал${sa} ${5 - i} шаг${ov}`);
//     quest.move();
// }

// console.log(`The game has ended`);

//-----------------------------------------------------------------------------------------------------------------------------------------------
// Находим максимальное число в массиве

let ms0 = [];
let ms1 = [];

for (let i = 0; i < 5; i++) {
    ms0[i] = +prompt(`Введите ${i + 1} число массива`);
}
console.log(ms0);

function searchForTheLargestNumber() {
    // Сравниваем i элемент массива со всеми элементами массива
    for (let i = 0; i < ms0.length; i++) {
        for (let i1 = 0; i1 < ms0.length; i1++) {
            if (ms0[i] > ms0[i1]) {
                delete ms0[i1];
            }
        }
    }
    // Сравниваем i элемент массива со следующими (i + 1) элементами
    for (let i = 0; i < ms0.length; i++) {
        for (let i1 = i + 1; i1 < ms0.length; i1++) {
            if (ms0[i] === ms0[i1]) {
                delete ms0[i1];
            }
        }
    }
    // Собираем новый массив из элементов typeof number первого массива
    let i1 = 0;
    for (let i = 0; i < ms0.length; i++) {
        console.log(`Number type № ${i + 1} = ${typeof (ms0[i])}`);
        if (typeof (ms0[i]) === 'number') {
            ms1[i1++] = ms0[i];
        }
    }
}

searchForTheLargestNumber();
console.log(ms1[ms1.length - 1]);

//-----------------------------------------------------------------------------------------------------------------------------------------------
// Раскладываем массив в объект

let digit = {
    единицы: '',
    десятки: '',
    сотни: '',
};

function useDigit() {
    for (; true;) {
        let x = +prompt(`Number from 0 to 999`);
        if (x > 0 && x < 1000) {
            x = String(x);
            digit.единицы = x[0];
            digit.десятки = x[1];
            digit.сотни = x[2];
            break;
        } else {
            for (let a in digit) {
                console.log(a + ": " + digit[a]);
            }
            console.log(`Вы ввели неправильное число, попробуйте снова`);
        }
    }
}

useDigit()

for (let a in digit) {
    console.log(a + ": " + digit[a]);
}

//-----------------------------------------------------------------------------------------------------------------------------------------------
// Пирамида из X

// let ms = [];

for (let i = 0; i < 20; i++) {
    ms.push('x');
    console.log(`${ms.join(' ')}`)
}

//-----------------------------------------------------------------------------------------------------------------------------------------------
// Считаем цену товаров в корзине

"use strict";

let price1 = 123;
let price2 = 8;
let price3 = 345;
let price4 = 443;
let ms = [];
ms[0] = price1;
ms[1] = price2;
ms[2] = price3;
ms[3] = price4;
let summ = 0;


function countBasketPrice() {
    for (let i = 0; i < ms.length; i++) {
        if (typeof (ms[i]) === 'number') {
            summ += ms[i];
        } else if (typeof (ms[i]) !== 'number') {
            console.log(`Wrong type of price in ${i + 1} slot`);
            summ = '';
            break;
        }
    }
    return summ;
}

console.log(countBasketPrice());

//-----------------------------------------------------------------------------------------------------------------------------------------------
// Собрать выборочный массив и вывести без разделителя

"use strict";

let i = 0;
let i1 = 0;
let ms = [];

while (i++ < 100) {
    if (i % 2 !== 0) {
        ms[i1++] = ` ${String(i)} `;
    }
    continue;
}
console.log(`${ms.join(' ')}`)

//-----------------------------------------------------------------------------------------------------------------------------------------------
// Быки и коровы.

"use strict";

function bullCow() {
    debugger
    for (let i = 0; i < x.length; i++) {
        if (x[i] === numUser[i]) {
            console.log(`Bull ${numUser[i]} in line ${i + 1}`);
        }
    }
    for (let i = 0; i < x.length; i++) {
        if (numUser[i] === x[0]) {
            console.log(`Cow ${numUser[i]}`);
            break;
        }
    }
    for (let i = 0; i < x.length; i++) {
        if (numUser[i] === x[1]) {
            console.log(`Cow ${numUser[i]}`);
            break;
        }
    }
    for (let i = 0; i < x.length; i++) {
        if (numUser[i] === x[2]) {
            console.log(`Cow ${numUser[i]}`);
            break;
        }
    }
    for (let i = 0; i < x.length; i++) {
        if (numUser[i] === x[3]) {
            console.log(`Cow ${numUser[i]}`);
            break;
        }
    }
}

let x
let numUser

for (let i = 1; true; i++) {
    console.log(`This is ${i} game`);
    x = Math.round(Math.random() * 10000);
    x = String(x);
    x = Array.from(x);
    if (x.length < 4) { x.unshift('1') }
    console.log(`Computer ${x}`);

    for (let i = 1; i <= 10; i++) {
        console.log(`Your have ${10 - i} attempt`);
        numUser = prompt('Number 0000');
        numUser = Array.from(numUser);
        console.log(`User ${numUser}`);
        for (; numUser.length !== 4;) {
            numUser = prompt('Four Number');
            numUser = Array.from(numUser);
            console.log(`User ${numUser}`);
        }
        if (x[0] !== numUser[0] || x[1] !== numUser[1] || x[2] !== numUser[2] || x[3] !== numUser[3]) {
            bullCow();
        } else {
            console.log(`Your WIN!`);
            break;
        }
    }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------
// Рекурсия с возведением числа в степень.

"use strict";

function power(val, pow) {
    if (pow > 1) { val *= power(val, --pow) }
    return val
}

console.log(`Result '${power(2, 7)}'`);

//-----------------------------------------------------------------------------------------------------------------------------------------------
// Действия в зависимости от запроса.

let num3 = prompt('Select an action!');

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '-':
            return arg1 - arg2
        case '+':
            return arg1 + arg2
        case '/':
            return arg1 / arg2
        case '*':
            return arg1 * arg2
    }
}

console.log(`Result '${mathOperation(5, 345, num3)}'`);

//-----------------------------------------------------------------------------------------------------------------------------------------------
// Если среди операндов есть строка выводим function return = NaN. Math.sign - определяем знак числа. В операторе switch создаем строковый примитив, чтобы можно было сравнивать несколько операторов.

"use strict";

function rangeNumber(a, b) {
    console.log(`${typeof (a)} ${typeof (b)}`);
    if (typeof (a) === 'string' || typeof (b) === 'string') {
        return NaN
    }
    else {
        let signA = Math.sign(a)
        let signB = Math.sign(b)
        switch (signA + ' ' + signB) {
            case ('1 1'):
            case ('0 1'):
            case ('1 0'):
            case ('0 0'):
                console.log(`a - b`);
                return a - b;
            case ('-1 -1'):
            case ('-0 -1'):
            case ('-1 -0'):
            case ('-0 -0'):
                console.log(`a * b`);
                return a * b;
            default:
                console.log(`a + b`);
                return a + b;
        }
    }
}

console.log(`The result of a mathematical operation = '${rangeNumber(7, 0)}'`)

//-----------------------------------------------------------------------------------------------------------------------------------------------
// If Else в одну строку

function adf() { return a !== 'string' && b !== 'string' ? a + b : NaN; }

//-----------------------------------------------------------------------------------------------------------------------------------------------
// Вывести ряд от а до 15

"use strict";

let a = prompt('Number 1-15');
a = Number(a);
console.log(`User chose '${a}'`);

function rangeNumber(a) {
    let stringA = String(a)
    if (a < 14) {
        stringA = `'${stringA}' ${rangeNumber(a + 1)}`;
        return stringA;
    } else
        if (a === 14)
            stringA = `'${stringA}' '${rangeNumber(a + 1)}'`;
    return stringA;
}
debugger
switch (a) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
        console.log(rangeNumber(a));
        break;
    default:
        console.log(`'${a}' out of range 1-15`);
        break;
}

//-----------------------------------------------------------------------------------------------------------------------------------------------
// Угадай число

// let x = Math.floor(Math.random() * 10);
// console.log(x);
// let numUser = prompt('Number 0-9');
numUser = Number(numUser);
console.log(`User chose ${numUser}`);

function guessTheNumber(n, y) {
    if (y === x && n >= 0) { console.log('You guessed!!!'); }
    else if (n >= 0) {
        let numUser = prompt(`you have ${n} try left`);
        numUser = Number(numUser);
        console.log(`Wrong number ${numUser}`);
        guessTheNumber(n - 1, numUser);
    } else console.log(`Attempts are over`);
}

guessTheNumber(5, numUser);

//-----------------------------------------------------------------------------------------------------------------------------------------------
// Ряд где складываются два последних числа в ряде и тем самым продолжают его

function fibonacci(n, x, y) {
    var current = x + y;
    var fibonacci_string = String(current);
    if (n > 1)
        fibonacci_string = fibonacci_string + fibonacci(n - 1, current, x);
    return fibonacci_string;
}

let arr = fibonacci(5, 5, 6);
console.log(arr);

//-----------------------------------------------------------------------------------------------------------------------------------------------
// Функция разрешает вводить только числа от 19 до 90.

"use strict";

let num2 = +prompt('Age?');

function functionNum2() {
    if (isNaN(num2)) {
        num2 = +prompt('Age must be a number!');
        functionNum2();
    } else if (num2 === 0) {
        num2 = +prompt('Age cannot be zero!');
        functionNum2();
    } else if (num2 < 0) {
        num2 = +prompt('Age cannot be a negative number!');
        functionNum2();
    } else if (num2 > 90) {
        num2 = +prompt('Age is too high!');
        functionNum2();
    } else if (num2 > 0 && num2 <= 18) {
        num2 = +prompt('Age too low!');
        functionNum2();
    }
    return num2;
}

console.log(`Your name Nert, your age ${functionNum2()}`);
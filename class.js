// 1. Реализовать конструктор в ES6 синтаксисе(также используйте аргументы по 
//умолчанию):  
// function Component(tagName)  this.tagName = tagName || 'div';
//     this.node = document.createElement(tagName);}
// Пример вызова: const comp = new Component('span');

class Component {
    constructor(tagName = 'div') {
        this.tagName = tagName;
        this.node = document.createElement(tagName);
    }
}

const comp = new Component('p');



// 2.Реализовать конструктор и методы в ES6 синтаксисе:
// function Component(tagName) {  this.tagName = tagName || 'div';
// this.node = document.createElement(tagName);}
// Component.prototype.setText = function (text) { 
//  this.node.textContent = text;};

class CreatingEl {
    constructor(tagName = 'div') {
        this.tagName = tagName;
        this.node = document.createElement(tagName);
    }
    set addText(text) {
        this.node.textContent = text;
    }
    get addText() {
        return this.textContent;
    }
}

const addTag = new CreatingEl('p');
addTag.addText = 'some text';



// 3.Создать класс калькулятора который будет принимать 
// стартовое значение и у него будут методы сложить, вычесть,
// умножить , разделить. Также у него должны быть геттер и сеттер
// для получения и установки текущего числа с которым производятся
// вычисления.



class Calculate {
    constructor(value = 0) {
        this.number = value;
    }
    get_number() {
        return this.number;
    }
    set_number(val) {
        this.number = val;
    }
    plus(i, i2) {
        if (!Number.isInteger(i)) return;
        if (i2 == undefined || !Number.isInteger(i2)) {
            i2 = i;
            i = this.number;
        }
        return (i + i2);
    }
    minus(i, i2) {
        if (!Number.isInteger(i)) return;
        if (i2 == undefined || !Number.isInteger(i2)) {
            i2 = i;
            i = this.number;
        }
        return (i - i2);
    }
    divide(i, i2) {
        if (!Number.isInteger(i)) return;
        if (i2 == undefined || !Number.isInteger(i2)) {
            i2 = i;
            i = this.number;
        }
        return (i / i2);
    }
    multiply(i, i2) {
        if (!Number.isInteger(i)) return;
        if (i2 == undefined || !Number.isInteger(i2)) {
            i2 = i;
            i = this.number;
        }
        return (i * i2);
    }
}
const calk = new Calculate(0);
calk.set_number(10);
console.log(calk.plus(5));
console.log(calk.plus(5, 5));
console.log(calk.multiply(5));

import calculator from './calculator'

let myCalculator = calculator(100);

console.log(myCalculator.sum(1, 2, 3)); //вернет 106
console.log(myCalculator.dif(10, 20)); //вернет 70
console.log(myCalculator.div(2, 0)); //вернет сообщение об ошибке
console.log(myCalculator.div(0, 0)); //вернет сообщение об ошибке
console.log(myCalculator.div(0, 2)); //вернет сообщение об ошибке
console.log(myCalculator.div(2, 2)); //вернет 25
console.log(myCalculator.mul(2, 2)); //вернет 400
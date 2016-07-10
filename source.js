(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = calculator;
function calculator(firstNumber) {
    var calcObject = {
        sum: function sum() {
            var result = firstNumber;

            for (var number = 0; number < arguments.length; number++) {
                result += arguments[number];
            }

            return result;
        },
        dif: function dif() {
            var result = firstNumber;

            for (var number = 0; number < arguments.length; number++) {
                result -= arguments[number];
            }

            return result;
        },
        div: function div() {
            var result = firstNumber;

            try {
                for (var number = 0; number < arguments.length; number++) {
                    if (arguments[number] === 0) {
                        throw new Error('Нельзя делить на ноль!');
                    } else {
                        result = result / arguments[number];
                    }
                }

                return result;
            } catch (e) {
                return 'Ни один из аргументентов не должен быть равен 0';
            }
        },
        mul: function mul() {
            var result = firstNumber;

            for (var number = 0; number < arguments.length; number++) {
                result = result * arguments[number];
            }

            return result;
        }
    };

    return calcObject;
}

},{}],2:[function(require,module,exports){
'use strict';

var _calculator = require('./calculator');

var _calculator2 = _interopRequireDefault(_calculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var myCalculator = (0, _calculator2.default)(100);

console.log(myCalculator.sum(1, 2, 3)); //вернет 106
console.log(myCalculator.dif(10, 20)); //вернет 70
console.log(myCalculator.div(2, 0)); //вернет сообщение об ошибке
console.log(myCalculator.div(0, 0)); //вернет сообщение об ошибке
console.log(myCalculator.div(0, 2)); //вернет сообщение об ошибке
console.log(myCalculator.div(2, 2)); //вернет 25
console.log(myCalculator.mul(2, 2)); //вернет 400

},{"./calculator":1}]},{},[2]);

export default function calculator(firstNumber){
    let calcObject = {
        sum: function () {
            let result = firstNumber;

            for(let number = 0; number < arguments.length; number++){
                result+=arguments[number];
            }

            return result;
        },
        dif: function () {
            let result = firstNumber;

            for(let number = 0; number < arguments.length; number++){
                result-=arguments[number];
            }

            return result;
        },
        div: function () {
            let result = firstNumber;

            try {
                for(let number = 0; number < arguments.length; number++){
                    if(arguments[number] === 0) {
                        throw new Error('Нельзя делить на ноль!')
                    }
                    else {
                        result = result/arguments[number];
                    }
                }

                return result;
            }
            catch (e){
                return 'Ни один из аргументентов не должен быть равен 0';
            }
        },
        mul: function () {
            let result = firstNumber;

            for(let number = 0; number < arguments.length; number++){
                result = result*arguments[number];
            }

            return result;
        }
    };

    return calcObject;
}
/**
 * Created by Вероника on 10.07.2016.
 */
function isAllTrue(source, filterFn) {
    try{
        if (!(typeof source == "object" && source instanceof Array)){
            throw new Error('Это не массив!');
        }
        if (source.length == 0){
            throw new Error('Пустой массив!');
        }
    }
    catch (e){
        return 'Первый параметр должен быть не пустым массивом!';
    }

    let filter = true;

    for(let a = 0; a < source.length; a++){
        let flag = filterFn(source[a]);
        filter = filter && flag;
    }

    return filter;
}

(function test() {
    let allNumbers = [1, 2, 4, 5, 6, 7, 8],
        someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
        noNumbers = ['это', 'массив', 'без', 'чисел'];

    function isNumber(val) {
        return typeof val === 'number';
    }

    console.log(isAllTrue(allNumbers, isNumber)); //вернет true
    console.log(isAllTrue(someNumbers, isNumber)); //вернет false
    console.log(isAllTrue(noNumbers, isNumber)); //вернет false
    console.log(isAllTrue([], isNumber)); //вернет сообщение об ошибке
})();
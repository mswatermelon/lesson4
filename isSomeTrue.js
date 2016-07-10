function isSomeTrue(source, filterFn){
    let filter = false;

    for(let a = 0; a < source.length; a++){
        let flag = filterFn(source[a]);
        filter = filter || flag;
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

    console.log(isSomeTrue(allNumbers, isNumber)); //вернет true
    console.log(isSomeTrue(someNumbers, isNumber)); //вернет true
    console.log(isSomeTrue(noNumbers, isNumber)); //вернет false
})();
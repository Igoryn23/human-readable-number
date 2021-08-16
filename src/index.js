module.exports = function toReadable(number) {
    const arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const arr2 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const numStr = number.toString();
    const firstSymbol = numStr[0];
    const secondSymbol = numStr[1];

    if (number < 20) {
        let word = arr1[number];
        return word;
    }
    // для круглых чисел менее 100, от 20 до 90
    if (number > 19 && number < 100 && numStr[1] == 0) {
        let first = numStr[0];
        let word = arr2[first];
        return word;
    }
    if (number > 20 && number < 100) {
        let first = numStr[0];
        let second = numStr[1];
        let word1 = arr2[first];
        let word2 = arr1[second];
        return word1 + ' ' + word2;
    }
    if (number >= 100 && numStr[1] == 0 && numStr[2] == 0) {
        let first = numStr[0];
        let word = arr1[first];
        return word + ' hundred';
    }
    // для числе типа от 100 до 120, от 200 до 220 ....
    if (number > 100 && numStr[1] < 2) {
        let first = arr1[firstSymbol];
        // режем первый символ строки и приводим к числу
        let tempNum = parseInt(numStr.substring(1));
        let second = arr1[tempNum];
        return `${first} hundred ${second}`;
    }
    // выше 100 и круглые 
    if (number > 100 && numStr[2] == 0) {
        let first = arr1[firstSymbol];
        let second = arr2[secondSymbol];
        return `${first} hundred ${second}`;
    }
    if (number > 100) {
        let firstNum = numStr[0];
        let wordFirst = arr1[firstNum];
        // далее выполняем прошлое условие 
        let first = numStr[1];
        let second = numStr[2];
        let word1 = arr2[first];
        let word2 = arr1[second];
        return `${wordFirst} hundred ${word1} ${word2}`;
    }
}
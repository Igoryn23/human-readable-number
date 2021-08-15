module.exports = function toReadable(number) {
    const arr1 = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const arr2 = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    let temp;
    switch(number){
        case 20:
            return 'twenty';
            break;
        case 30:
            return 'thirty';
            break;
        case 30:
            return 'thirty';
            break;
        case 40:
            return 'forty';
            break;
        case 50:
            return 'fifty';
            break;
        case 60:
            return 'sixty';
            break;
        case 70:
            return 'seventy';
            break;
        case 80:
            return 'eighty';
            break;
        case 90:
            return 'ninety';
            break;
        case 100:
            return 'one hundred';
            break;
        case 200:
            return 'two hundred';
            break;
        case 300:
            return 'three hundred';
            break;
        case 400:
            return 'four hundred';
            break;
        case 500:
            return 'five hundred';
            break;
        case 600:
            return 'six hundred';
            break;
        case 700:
            return 'seven hundred';
            break;
        case 800:
            return 'eight hundred';
            break;
        case 900:
            return 'nine hundred';
            break;
    }
    if(number < 20){
        let word = arr1[number];
        return word;
    }

    if(number > 20 && number < 100){
let str = number + '';
let first = str[0];
let second = str[1];
let word1 = arr2[first];
let word2 = arr1[second];
return word1 + ' ' + word2;
    }


if(number > 100){
    let str = number + '';
    
    let firstNum = str[0];
    let wordFirst = arr1[firstNum];
    // далее выполняем прошлое условие 
    let first = str[1];
    let second = str[2];
    let word1 = arr2[first];
    let word2 = arr1[second];
    return `${wordFirst} hundred ${word1} ${word2}`;
}   
}
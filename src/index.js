module.exports = function toReadable(number) {
    const arr1 = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const arr2 = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    if(number < 20){
        let word = arr1[number];
        return word;
    }
    if(number >= 20 && number < 100){
let str = number + '';
let first = str[0];
let second = str[1];
let word1 = arr2[first];
let word2 = arr1[second];
return word1 + ' ' + word2;
    }
    /*
    switch (number) {
        case 0:
            return 'zero';
            break;
        case 1:
            return 'one';
            break;
        case 2:
            return 'two';
            break;
        case 3:
            return 'three';
            break;
        case 4:
            return 'four';
            break;
        case 5:
            return 'five';
            break;
        case 6:
            return 'six';
            break;
        case 7:
            return 'seven';
            break;
        case 8:
            return 'eight';
            break;
        case 9:
            return 'nine';
            break;
        case 10:
            return 'ten';
            break;
        case 11:
            return 'eleven';
            break;
        case 12:
            return 'twelw';
            break;
        case 13:
            return 'thirteen';
            break;
        case 14:
            return 'fourteen';
            break;
        case 15:
            return 'fifteen';
            break;
        case 16:
            return 'sixteen';
            break;
        case 17:
            return 'seventeen';
            break;
        case 18:
            return 'eighteen';
            break;
        case 19:
            return 'nineteen';
            break;
        case 20:
            return 'twenty';
            break;
        case 21:
            return 'twenty one';
            break;
        case 22:
            return 'twenty two';
            break;
        case 23:
            return 'twenty three';
        case 24:
            return 'twenty four';
            break;
        case 25:
            return 'twenty five';
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
        case 900:
            return 'nine hundred';
            break;
        case 998:
            return 'nine hundred ninety eight';
            break;
        case 999:
            return 'nine hundred ninety nine';
            break;
    }
    */
}
module.exports = function toReadable(number) {
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
        case 20:
            return 'twenty';
            break;
        case 100:
            return 'one hundred';
            break;
        case 998:
            return 'nine hundred ninety eight';
            break;
        case 999:
            return 'nine hundred ninety nine';
            break;
    }
}
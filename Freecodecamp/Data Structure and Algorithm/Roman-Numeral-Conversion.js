/*
Problem Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter
*/

function convertToRoman(num) {
    let romanMap = new Map();
    
    romanMap.set(1, 'I');
    romanMap.set(2, 'II');
    romanMap.set(3, 'III');
    romanMap.set(4, 'IV');
    romanMap.set(5, 'V');
    romanMap.set(6, 'VI');
    romanMap.set(7, 'VII');
    romanMap.set(8, 'VIII');
    romanMap.set(9, 'IX');
    romanMap.set(10, 'X');

    romanMap.set(20, 'XX');
    romanMap.set(30, 'XXX');
    romanMap.set(40, 'XL');
    romanMap.set(50, 'L');
    romanMap.set(60, 'LX');
    romanMap.set(70, 'LXX');
    romanMap.set(80, 'LXXX');
    romanMap.set(90, 'XC')
    romanMap.set(100, 'C');

    romanMap.set(200, 'CC');
    romanMap.set(300, 'CCC');
    romanMap.set(400, 'CD');
    romanMap.set(500, 'D');
    romanMap.set(600, 'DC');
    romanMap.set(700, 'DCC');
    romanMap.set(800, 'DCCC');
    romanMap.set(900, 'CM')
    romanMap.set(1000, 'M');

    romanMap.set(2000, 'MM');
    romanMap.set(3000, 'MMM');

    let lengthOfNum = Math.ceil(Math.log10(num));
    let queue = new Array();
    let cnt = 1;

    while(num) {
        let t = num%10;
        num = parseInt((num / 10));
        t = t * cnt;
        cnt = cnt * 10;
        queue.unshift(romanMap.get(t));
    }
    return queue.join('');
   }
   
   console.log(convertToRoman(3999));

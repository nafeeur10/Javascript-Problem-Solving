/*
Problem Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker
*/

function palindrome(str) {
    let mainStr = '';
    for(let i = 0; i < str.length; i++) {
        if((str[i].toLowerCase() >= 'a' && str[i].toLowerCase() <= 'z') || (str[i] >= '0' && str[i] <= '9')) {
            mainStr+=str[i].toLowerCase();
        }
    }

    let j = mainStr.length - 1;
    for(let i = 0; i < (mainStr.length)/2; i++) {
        if(mainStr[i] != mainStr[j]){
            return false;
        }
        j--;
    }
    return true;
  }
  
  console.log(palindrome("_eye"));

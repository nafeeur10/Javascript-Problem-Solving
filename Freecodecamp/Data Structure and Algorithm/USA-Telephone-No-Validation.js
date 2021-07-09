/*
Problem Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator
*/

function telephoneCheck(str) {
    let length = str.length;
    let cnt = 0;

    for(let i = length-1; i > length-5; i--) {
        if(str[i]>='0' && str[i]<='9') {
            cnt++;
        }
        else {
            return false;
        }
    }

    length = length - 5;
    if(str[length] == '-' || str[length] == " ") { length--;}

    for(let i = length; i > length-3; i--) {
        if(str[i]>='0' && str[i]<='9') {
            cnt++;
        }
        else {
            return false;
        }
    }

    length-=3;
    let bracket1 = false
    if(str[length] == '-' || str[length] == " ") { length--;}
    if(str[length] == ')') { length--; bracket1 = true; }


    for(let i = length; i > length-3; i--) {
        if(str[i]>='0' && str[i]<='9') {
            cnt++;
        }
        else {
            return false;
        }
    }

    length-=3;

    if(bracket1) {
        if(str[length] == '(') length--;
        else return false;
    }


    let flag1 = false;
    if(str[length] == '-' || str[length] == " ") { length--; flag1 = true; }
    if(str[length] === '1' && length === 0) return true;
    
    if(cnt === 10 && flag1 === false && length === -1)
    return true;
    else
    return false;
  }
  
  console.log(telephoneCheck("27576227382")); // false

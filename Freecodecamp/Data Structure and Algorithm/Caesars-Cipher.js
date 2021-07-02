/*
  Problem Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher
*/

function rot13(str) {
    let main = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let cot13 = 'NOPQRSTUVWXYZABCDEFGHIJKLM';

    let map = new Map();
    for(let i = 0; i < main.length; i++) {
        map.set(main[i], cot13[i]);
    }

    let ans = new Array();

    for(let i = 0; i < str.length; i++) {
        if(str[i] >= 'A' && str[i] <= 'Z') {
            let t = map.get(str[i]);
            ans.push(t);
        }
        else
        {
            ans.push(str[i]);
        }
    }
    return ans.join("");
  }
  
  rot13("SERR PBQR PNZC");

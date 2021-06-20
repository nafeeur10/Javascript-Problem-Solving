/*
 Problem Link: https://leetcode.com/problems/to-lower-case/
*/

/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let ansStr = '';
    for(let i=0; i<s.length; i++) {
        if(s[i]>='A' && s[i]<='Z') {
            ansStr += s[i].toLowerCase();
        }
        else
            {
                ansStr += s[i];
            }
    }
    return ansStr;
};

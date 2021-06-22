/*
Problem Link: https://leetcode.com/problems/number-of-good-pairs/
Solution Language: Javascript
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
     let cnt = 0;
     for(let i = 0; i < nums.length - 1; i++) {
         for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] == nums[j]) {
                cnt++;
            }
         }
     }
    return cnt;
};

console.log(numIdenticalPairs([1,2,3]));

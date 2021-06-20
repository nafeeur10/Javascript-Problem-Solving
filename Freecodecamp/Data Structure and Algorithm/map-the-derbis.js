/*
Problem Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris
*/

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  let ans = [];

  for(let i = 0; i < arr.length; i++) {
    let orbitPeriod = Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius+arr[i].avgAlt, 3)/GM));
    let obj = {};
    obj['name'] = arr[i].name;
    obj['orbitalPeriod'] = orbitPeriod;
    ans.push(obj);
  }
  return ans;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);

/*
Problem Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register
*/

function getCurrencyUnitMap()
{
  let currencyUnitMap = new Map();

  currencyUnitMap.set("ONE HUNDRED", 100);
  currencyUnitMap.set("TWENTY", 20);
  currencyUnitMap.set("TEN", 10);
  currencyUnitMap.set("FIVE", 5);
  currencyUnitMap.set("ONE", 1);
  currencyUnitMap.set("QUARTER", 0.25);
  currencyUnitMap.set("DIME", 0.1);
  currencyUnitMap.set("NICKEL", 0.05);
  currencyUnitMap.set("PENNY", 0.01);

  return currencyUnitMap;
}

function getCidSum(cid)
{
    let sum = 0;
    for(let i = 0; i < cid.length; i++)
    {
        sum += cid[i][1];
    }
    return sum.toFixed(2);
}

function checkCashRegister(price, cash, cid) {
    const status = ["INSUFFICIENT_FUNDS", "CLOSED", "OPEN"];
    let balance = cash - price;
    let mainBalance = balance;

    let currencyAmountMap = getCurrencyUnitMap();

    var ans = {
        'status': [],
        'change': []
    };

    let totalAvailableBalance = getCidSum(cid);

    let revCid = cid.reverse();
    let incrementCid = 0;
    let changeArray = new Array();

    for(let [key, value] of currencyAmountMap)
    {
        if(balance < revCid[incrementCid][1])
        {
           let t = parseInt(balance/value);
           if(t != 0) {
               balance= (balance - (t*value).toFixed(2)).toFixed(2);
               changeArray.push([key, t*value]);
           }
        }
        else
        {
           changeArray.push([key, revCid[incrementCid][1]]);
           balance = (balance - revCid[incrementCid][1]).toFixed(2);
         }
        
        incrementCid++;
    }

    if(balance > 0 || totalAvailableBalance < mainBalance)
    {
        ans.status = status[0];
        ans.change = [];
    }
    else if(balance == 0 && totalAvailableBalance == mainBalance)
    {
        ans.status = status[1];
        ans.change = changeArray.reverse();
    }
    else
    {
        ans.status = status[2];
        ans.change = changeArray;
    }
    return ans;
}

checkCashRegister(19.50, 20, 
    [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

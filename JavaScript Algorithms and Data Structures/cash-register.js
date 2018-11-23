function checkCashRegister(price, cash, cid) {
  let denomArr = [["ONE HUNDRED", 100],
["TWENTY", 20],
["TEN", 10],
["FIVE", 5],
["ONE", 1],
["QUARTER", 0.25],
["DIME", 0.1],
["NICKEL", 0.05],
["PENNY", 0.01]];
  let cidReverseArr = [...cid.reverse()];
  cid = cid.reverse();
  let change = cash - price;
  // console.log('change', change);
  let receipt = {status: '', change: []};
  // Here is your change, ma'am.
  let totalAvailable = 0;
  for (let i = 0; i < cid.length; i++) {
    totalAvailable = Math.round((totalAvailable + cid[i][1])*100)/100;
    // console.log(cid[i][0], totalAvailable);
  }
  // console.log('totalAvailable', totalAvailable);
  if (change > totalAvailable) {
    receipt.status = 'INSUFFICIENT_FUNDS';
    return receipt;
  }
  if (change === totalAvailable) {
    receipt.status = 'CLOSED';
    receipt.change = cid;
    return receipt;
  }
  // console.log(cidReverseArr);
  for (let i = 0; i < denomArr.length; i++) {
    if (change/denomArr[i][1] >= 1) {
      // console.log('Change at ' + cidReverseArr[i][0], change);
      let numberOfDenomsNeeded = Math.floor(change/denomArr[i][1]);
      // console.log('numberOfDenomsNeeded ' + denomArr[i][0], numberOfDenomsNeeded);
      let maxNeeded = denomArr[i][1] * numberOfDenomsNeeded;
      // console.log('maxNeeded ' + denomArr[i][0], maxNeeded);
      // console.log('available ' + cidReverseArr[i][0], cidReverseArr[i][1]);
      if (cidReverseArr[i][1] < maxNeeded) {
        // console.log(cidReverseArr[i][0] + ' i= ' + i, 'Not enough!');
        if (cidReverseArr[i][1] !== 0) {
          // console.log ('There is some', cidReverseArr[i][0]);
          change = Math.round((change - cidReverseArr[i][1])*100)/100;
          receipt.change.push([denomArr[i][0], cidReverseArr[i][1]]);
        }
      } else {
        change = Math.round((change - (denomArr[i][1] * numberOfDenomsNeeded))*100)/100;
      receipt.change.push([denomArr[i][0], denomArr[i][1] * numberOfDenomsNeeded]);
      }
    }
    if (change === 0) {
      receipt.status = "OPEN";
      break;
    }
  }
  if (change !== 0) {
    receipt.status = 'INSUFFICIENT_FUNDS';
    receipt.change = [];
  }
  // receipt.change.forEach( item => {
  //   console.log(item);
  // });
  console.log(JSON.stringify(receipt));
  return receipt;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

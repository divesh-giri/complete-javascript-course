'use strict'

// Coding Challenge #2
// const bill = Number(prompt());

const calcTip = function (bill) {
    // let tip;
    // if (bill >= 50 && bill <= 300)
    //     tip = (bill / 100) * 15;
    // else
    //     tip = (bill / 100) * 15;
    // return tip;
    return bill >= 50 && bill <= 300 ? (bill / 100) * 15 : (bill / 100) * 20;
}

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);





const dollarAmount = 2.16
const piggyBank = {}

// take the total amount and divide quarters. take the remainder and divide dimes. take remainder and divide nickels. the remainder is how many pennies
const coinValues = {
    "quarters": .25,
    "dimes": .10,
    "nickles": .05,
    "pennies": .01
}

//value of coins in piggy bank
let remainingAmount = dollarAmount;

for(let key in coinValues) {
    //let coinNumber = piggyBank[key];
    let coinTotal = 0;

    if(key === "quarters") {
        coinTotal = Math.floor(remainingAmount / coinValues.quarters);
        remainingAmount -= coinTotal * coinValues.quarters;
        piggyBank[key] = coinTotal;
    } else if (key === "dimes") {
        coinTotal = Math.floor(remainingAmount / coinValues.dimes);
        remainingAmount -= coinTotal * coinValues.dimes;
        piggyBank[key] = coinTotal;
    } else if (key === "nickles") {
        coinTotal = Math.floor(remainingAmount / coinValues.nickles);
        remainingAmount -= coinTotal * coinValues.nickles;
        piggyBank[key] = coinTotal;
    } else if (key === "pennies") {
        coinTotal = Math.floor(remainingAmount / coinValues.pennies);
        remainingAmount -= coinTotal * coinValues.pennies;
        piggyBank[key] = coinTotal;
    }

}

console.log(piggyBank)
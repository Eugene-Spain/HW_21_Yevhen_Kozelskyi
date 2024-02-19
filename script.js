let countryChoice;
let budgetChoice;

let requestCountryChoice
let requestBudgetChoice

let cheapCountry = "Cheap Country";
let okCountry = "Ok Country";
let expensiveCountry = "Expensive Country";

let cheapPrice = "Cheap Price";
let okPrice = "Ok Price";
let expensivePrice = "Expensive Price";

const MOLDOVA = "Moldova";
const UKRAINE = "Ukraine";
const SPAIN = "Spain";
const FRANCE = "France";
const AUSTRALIA = "Australia";
const CANADA = "Canada";
const USA = "USA";

let cheapCountryList = [MOLDOVA, UKRAINE];
let okCountryList = [SPAIN, FRANCE];
let expensiveCountryList = [AUSTRALIA, CANADA, USA];

requestCountryChoice = prompt(`Welcome to our travel agency 'Chao-Chao LTD'! Please choose country where you would like to travel. Right now we can provide you next countries: ${cheapCountryList},${okCountryList},${expensiveCountryList}`);

// I have decided to use Arrays so I did some rebuilds to the old code
// if ((requestCountryChoice === MOLDOVA) || (requestCountryChoice === UKRAINE)) {
//     countryChoice = cheapCountry;
// } else if ((requestCountryChoice === SPAIN) || (requestCountryChoice === FRANCE)) {
//     countryChoice = okCountry;
// } else if ((requestCountryChoice === AUSTRALIA) || (requestCountryChoice === CANADA) || (requestCountryChoice === USA)) {
//     countryChoice = expensiveCountry;

if ((requestCountryChoice === cheapCountryList[0]) || (requestCountryChoice === cheapCountryList [1])) {
    countryChoice = cheapCountry;
} else if ((requestCountryChoice === okCountryList[0]) || (requestCountryChoice === okCountryList[1])) {
    countryChoice = okCountry;
} else if ((requestCountryChoice === expensiveCountryList[0]) || (requestCountryChoice === expensiveCountryList[1]) ||(requestCountryChoice === expensiveCountryList[2])) {
    countryChoice = expensiveCountry;
} else {
    alert(`Hope sometimes we could provide you services to ${requestCountryChoice} but right now try to select country from the list or check if you haven't done any mistake`)
    countryChoice = false
}
console.log(countryChoice);
if (countryChoice) {
    requestBudgetChoice = prompt("provide your budget that you can use in $");
    if ((requestBudgetChoice > 0) && (requestBudgetChoice <= 300)) {
        alert(`Sorry but ${requestBudgetChoice} is not enough to travel anywhere we can provide you. Please save more money and return to us.`)
        budgetChoice = false
    } else if ((requestBudgetChoice >= 300) && (requestBudgetChoice < 500)) {
        budgetChoice = cheapPrice;
    } else if ((requestBudgetChoice >= 500) && (requestBudgetChoice <= 1000)) {
        budgetChoice = okPrice;
    } else if (requestBudgetChoice > 1000) {
        budgetChoice = expensivePrice;
    } else {
        alert(`You have inserted ${requestBudgetChoice} as your budget but it is not a correct value. Please check it again and insert correct budget`)
        budgetChoice = false
    }
    console.log(budgetChoice);
}
if (countryChoice && budgetChoice) {
    if (countryChoice === cheapCountry) {
        if (budgetChoice) {
            alert(`You've got a point! Lets help us to provide you a travel to ${requestCountryChoice} for ${requestBudgetChoice} $`)
        }
    }else if(countryChoice === okCountry){
        if (budgetChoice === cheapPrice){
            alert(`Oh no, you cant go to ${requestCountryChoice} for ${requestBudgetChoice} . But you may visit ${cheapCountryList}`)
        } else {
            alert(`You've got a point! Lets help us to provide you a travel to ${requestCountryChoice} for ${requestBudgetChoice} $`)
        }
    }else if(countryChoice === expensiveCountry){
        if (budgetChoice === cheapPrice){
            alert(`Oh no, you cant go to ${requestCountryChoice} for ${requestBudgetChoice} $. But you may visit ${cheapCountryList}`)
        } else if(budgetChoice === okPrice){
            alert(`Oh no, you cant go to ${requestCountryChoice} for ${requestBudgetChoice} $. But you may visit ${cheapCountryList}, ${okCountryList}`)
        } else {
            alert(`You've got a point! Lets help us to provide you a travel to ${requestCountryChoice} for ${requestBudgetChoice} $`)
        }
    }
}
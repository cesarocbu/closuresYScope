// const moneyBox = (coins) => {
//     var saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(10);
// moneyBox(20);





const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
       saveCoins += coins;
       console.log(`Money box: $${saveCoins}`);
    }

    return countCoins;
}


let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(12);

//Recuerda las asignaciones anteriores en la variable saveCoins.
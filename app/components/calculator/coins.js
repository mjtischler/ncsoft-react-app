export let calculateCoins = (quartersValue, dimesValue, nicklesValue, penniesValue, amountEntered) => {

    var coins = [quartersValue, dimesValue, nicklesValue, penniesValue];

    var amountEntered = amountEntered;

    return {
        coins: coins,
        amountEntered: amountEntered
    };

}

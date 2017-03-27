export let calculateCoins = (quartersValue, dimesValue, nicklesValue, penniesValue, amountEntered) => {

    var coins = [quartersValue, dimesValue, nicklesValue, penniesValue];

    return {
        coins: coins,
        amountEntered: amountEntered
    };

};

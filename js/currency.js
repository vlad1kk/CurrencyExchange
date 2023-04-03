const RATES = {
    usd: 0.026350461133069828,
    eur: 0.024330900243309
}

function convert (uah, currency){
    if(!RATES[currency]){
        return null;
    }
    return uah * RATES[currency];
};
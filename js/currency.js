const RATES = {
    usd: 0.026,
    eur: 0.024
}

function convert ({uah, currency}){
    if(!RATES[currency]){
        return null;
    }
    return uah * RATES[currency];
};
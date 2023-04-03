const jsInput = document.querySelector('.js-input');
const currencyValue = document.querySelector('.currency');
const jsOutput = document.querySelector('.js-output');

jsInput.addEventListener('input', function(){
    // console.log(jsInput.value)
    const uah = jsInput.value;
    const currency = currencyValue.value;
    const result = convert(uah, currency);

    jsOutput.innerText = result;
})
currencyValue.addEventListener('change', function(){
    const uah = jsInput.value;
    const currency = currencyValue.value;
    const result = convert(uah, currency);

    jsOutput.innerText = result;
})
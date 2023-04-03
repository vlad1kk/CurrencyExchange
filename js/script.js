const jsInput = document.querySelector('.js-input');
const currencyValue = document.querySelector('.currency');
const jsOutput = document.querySelector('.js-output');

function getInput(){
    return{
        uah: Number(jsInput.value),
        currency: currencyValue.value
    }
}

function render(result){
    jsOutput.innerText = result;
}

jsInput.addEventListener('input', function(){
    // console.log(jsInput.value)
    const result = convert(getInput());
    render(result);
    
})
currencyValue.addEventListener('change', function(){
    const result = convert(getInput());
    render(result);
})
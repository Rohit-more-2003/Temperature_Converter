const celciusEl = document.getElementById("celcius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

function computeTemp(event){
    // console.log(event.target.name);
    // console.log(event.target.value);

    const currentValue = event.target.value;

    switch(event.target.name){
        case "celcius":
            kelvinEl.value = (currentValue + 273.32);
            fahrenheitEl.value = (currentValue * 1.8 + 32);
            break;
        case "fahrenheit":
            celciusEl.value = ((currentValue - 32) / 1.8);
            kelvinEl.value = ((currentValue - 32)/1.8 + 273.32);
            break;
        case "kelvin":
            celciusEl.value = (currentValue - 273.32);
            fahrenheitEl.value = ((currentValue - 273.32)*1.8 + 32);
            break;
        default:
            break;
    }
}
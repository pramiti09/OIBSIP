const input = document.querySelector('#input-box')
const result = document.querySelector('#result-box')
const inputSelect = document.querySelector('#input-dropdown')
const resultSelect = document.querySelector('#result-dropdown')

inputSelect.addEventListener('change', resultChange)
resultSelect.addEventListener('change', insertChange)

function resultChange() {
  if (
    inputSelect.selectedOptions[0].value ===
    resultSelect.selectedOptions[0].value
  ) {
    if (resultSelect.selectedIndex < 2) {
      resultSelect.selectedIndex += 1
    } else {
      resultSelect.selectedIndex = 0
    }
  }
}


function insertChange() {   // to change the  user defined dropdown value
  if (
    resultSelect.selectedOptions[0].value ===
    inputSelect.selectedOptions[0].value
  ) {
    if (inputSelect.selectedIndex < 2) {
      inputSelect.selectedIndex += 1
    } else {
      inputSelect.selectedIndex = 0
    }
  }
}

// convertor function 
function converter() {
  // invalid or no input zone
  if (input.value === '') {
    result.value = ''
    // alert appears
    alert('Please enter a valid value in the inputbox')
  }
  // degree celcius to farehiet
  else if (
    inputSelect.selectedOptions[0].value === 'Celcius' &&
    resultSelect.selectedOptions[0].value === 'Farenheit'
  ) {
    result.value = ((Number(input.value) * 9) / 5 + 32).toFixed(2) + ' ' + '°F' //formula to compute the value of farenhiet from  entered value of celcius
    console.log(result.value)
  }
  // farenheit to celcius
  else if (
    inputSelect.selectedOptions[0].value === 'Farenheit' &&
    resultSelect.selectedOptions[0].value === 'Celcius'
  ) {
    result.value =
      (((Number(input.value) - 32) * 5) / 9).toFixed(2) + ' ' + '°C' //formula to compute the value of celcius from  entered value of farenhiet
    console.log(result.value)
  }
  // kelvin to celcius
  else if(
    inputSelect.selectedOptions[0].value === 'Kelvin' &&
  resultSelect.selectedOptions[0].value === 'Celcius')
  {
    result.value =
      (Number(input.value) - 273.15).toFixed(2) + ' ' + '°C' //formula to compute the value of celcius from  entered value of Kelvin
    console.log(result.value)
  }
  //kelvin to farenheit
  else if(
    inputSelect.selectedOptions[0].value === 'Kelvin' &&
  resultSelect.selectedOptions[0].value === 'Farenheit')
  {
    result.value =
      (((Number(input.value) - 273.15)* 9) / 5+32).toFixed(2) + ' ' + '°C' //formula to compute the value of farenheit from  entered value of Kelvin
    console.log(result.value)
  }
//celcius to kelvin
else if(
    inputSelect.selectedOptions[0].value === 'Celcius' &&
  resultSelect.selectedOptions[0].value === 'Kelvin')
  {
    result.value =
      (Number(input.value) + 273.15).toFixed(2) + ' ' + '°C' //formula to compute the value of kelvin from  entered value of celcius
    console.log(result.value)
  }
  //farenheit to kelvin
  else if(
    inputSelect.selectedOptions[0].value === 'Farenheit' &&
  resultSelect.selectedOptions[0].value === 'Kelvin')
  {
    result.value =
      (((Number(input.value) + 459.67)* 5) / 9).toFixed(2) + ' ' + 'K' //formula to compute the value of Kelvin from  entered value of Farenheit
    console.log(result.value)
  }
 
  
}
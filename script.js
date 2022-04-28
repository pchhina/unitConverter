let inputEl = document.getElementById("input")

let lengthEl = document.getElementById('length');
let volumeEl = document.getElementById('volume');
let massEl = document.getElementById('mass');

let formEl = document.getElementById('form-input');



const convert = (input) => {
  
  const FEET_PER_METER = 3.28084;
  const GALLON_PER_LITRE = 0.264172;
  const POUNDS_PER_KG = 2.20462;

  let feet = input * FEET_PER_METER;
  let meter = input / FEET_PER_METER;

  let gallon = input * GALLON_PER_LITRE;
  let litre = input / GALLON_PER_LITRE;

  let pounds = input * POUNDS_PER_KG;
  let kg = input / POUNDS_PER_KG;

  // convert to strings with fixed precision

  feet = feet.toFixed(3);
  meter = meter.toFixed(3);
  gallon = gallon.toFixed(3);
  litre = litre.toFixed(3);
  pounds = pounds.toFixed(3);
  kg = kg.toFixed(3);

  let lengthMsg = `${input} meters = ${feet} feet |\
    ${input} feet = ${meter} meters`;
  lengthEl.textContent = lengthMsg;

  let volumeMsg = `${input} litres = ${gallon} gallon |\
    ${input} gallons = ${litre} litres`;
  volumeEl.textContent = volumeMsg;

  let massMsg = `${input} kg = ${pounds} pounds |\
    ${input} pounds = ${kg} kg`;
  massEl.textContent = massMsg;
}

formEl.addEventListener('input', event => {
  event.preventDefault();
  inputEl.textContent = event.target.value;
  let input = Number(inputEl.textContent);
	if (Number.isNaN(input)) {
		badInputMessage();
	} else {
		convert(input);
	}
})

const badInputMessage = () => {
	let msg = 'Please enter a valid number'
	massEl.textContent = msg;
	volumeEl.textContent = msg;
	lengthEl.textContent = msg;
}
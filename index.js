/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert")
const metricInput = document.getElementById("metric-input")
const lengthOutput = document.getElementById("length-output")
const volumeOutput = document.getElementById("volume-output")
const massOutput = document.getElementById("mass-output")

convertBtn.addEventListener("click", function(){
    let lengthM = (3.281 * metricInput.value).toFixed(3)
    let lengthFt = (0.305 * metricInput.value).toFixed(3)
    
    let volumeLr= (0.264 * metricInput.value).toFixed(3)
    let volumeGal = (3.785 * metricInput.value).toFixed(3)
    
    let massKilo = (2.204 * metricInput.value).toFixed(3)
    let massLbs = (0.454 * metricInput.value).toFixed(3)
    
    lengthOutput.setAttribute('style', 'white-space: pre;');
    volumeOutput.setAttribute('style', 'white-space: pre;');
    massOutput.setAttribute('style', 'white-space: pre;');
    
    
    lengthOutput.textContent = `${metricInput.value} meters = ${lengthM} feet\r\n${metricInput.value} feet = ${lengthFt} meters`
    
    volumeOutput.textContent = `${metricInput.value} liters = ${volumeLr} gallons\r\n${metricInput.value} gallons = ${volumeGal} liters`
    
    massOutput.textContent = `${metricInput.value} kilograms = ${massKilo} pounds\r\n${metricInput.value} pounds = ${massLbs} kilograms`
})
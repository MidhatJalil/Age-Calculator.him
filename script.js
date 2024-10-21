function calculate(){

let currentYear = document.getElementById('inputage').value;
let birthYear = document.getElementById('inputyear').value;
let age = currentYear-birthYear;
let result = document.getElementById('result');


result.innerHTML = (`your age is ${age}`);
}
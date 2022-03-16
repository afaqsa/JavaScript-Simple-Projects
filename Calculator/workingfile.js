function sin() {
  document.getElementById('display').value = Math.sin(document.getElementById('display').value);
}
function cos() {
  document.getElementById('display').value = Math.cos(document.getElementById('display').value);
}
function tan() {
  document.getElementById('display').value = Math.tan(document.getElementById('display').value);
}
function DEL() {
  var number =  document.getElementById('display').value;
  document.getElementById('display').value = number.substr(0, number.length - 1);
}
function sqrt() {
  document.getElementById('display').value = Math.sqrt(document.getElementById('display').value);
}
function LOG() {
  document.getElementById('display').value = Math.log(document.getElementById('display').value);
}
function square() {
  document.getElementById('display').value = Math.pow(document.getElementById('display').value, 2);
}
function cube() {
  document.getElementById('display').value = Math.pow(document.getElementById('display').value, 3);
}
function calculate(value)
{
  document.getElementById('display').value += value;
}
function CLR() {
  document.getElementById('display').value="";
}
function equal() {
  document.getElementById('display').value = eval(document.getElementById('display').value);
}

//1-Hallar el menor de dos números sin usar condicionales como if, switch, operador ternario, ni librería Math.
//1- Find the smaller of two numbers without conditionals like if,switch, ternary operator and Math library.
function minor(a, b) {
  var minimum = 0;
  while(a && b){
    --a;
    --b;
    ++minimum;
  }
  return minimum;
}

//2-Determinar si dos números son iguales, sin usar comparaciones, sumas o restas  ni lbrería Math.
//2- Verify if two numbers are equals without comparisons, addition or subtraction or the Math library.
function isEquals(a, b) {
  const map = new Map();
  map.set(a, false);
  map.set(b, true);
  return map.get(a);
}

//2-dado un arreglo y un número de resultado, la suma de 2 números del arreglo debe dar igual al número de resultado, no puedo sumarse a si mismo.
// ejemplo: array: [1,4,4,1], resultado: 8
const resultInArray = (numbers, result) => {
	for(var i= 0; i < numbers.length; i++) {
  	for (var j= i + 1; j < numbers.length; j++) {
    	if(numbers[i] + numbers[j] === result)
      	return true;
    }
  }
  return false;
}
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

//1-Hallar el menor de dos números sin usar condicionales (if, switch) ni operador ternario, ni lbrería Math.
function minor(a, b) {
  var minimum = 0;
  while(a && b){
    --a;
    --b;
    ++minimum;
  }
  return minimum;
}

# problemas-resueltos
## 1-Hallar el menor de dos números sin usar condicionales (if, switch) ni operador ternario, ni lbrería Math.
function minor(a, b) {
	var minimum = 0;
	while(a && b){
  	--a;
    --b;
    ++minimum;
  }
  return minimum;
}

## 2-Determinar si dos números son iguales, sin usar comparaciones, sumas o restas  ni lbrería Math.
function isEquals(a, b) {
  const map = new Map();
	map.set(a, false);
	map.set(b, true);
  return map.get(a);
}
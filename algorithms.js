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

//3- Contador de palabras en un texto
//3- Counter of words in a text
let text = "Hola hola hola hola hola hola hola hola hola! hola!";

function normalizeWord(word){
	return word.toLowerCase().replace(/[.!,]/g, "");
}

function wordRepetition(text){
	let dictionary = {};
  let separatedWords = text.split(" ");
  for(let word of separatedWords){
  	let normWord = normalizeWord(word);
    console.log(normWord);
    if(normWord in dictionary){
    	++dictionary[normWord];
    }else{
    	dictionary[normWord] = 1;
    }
  }
  return dictionary;
}

//4-Fibonacci and memoize
const memoize = (func) => {
  const cache = {};
  return (...args) => {
    const argsKey = JSON.stringify(args);
    if (!cache[argsKey]) {
      cache[argsKey] = func(...args);
    }
    return cache[argsKey];
  };
};

//5-secuencia fibonacci utilizando recursividad
const fibonacci = memoize(n => {
  let result = 0;
  if(n === 1){
  	result = 1;
  } else if(n === 2){
  	result = 1;
  }else{
  	result = fibonacci(n-1) + fibonacci(n-2);
  }
	return result;
});
for(let i = 1; i< 10; i++) console.log(fibonacci(i));

//6-Binary search
function binarySearchRecursion(arr, left, right, objetive){
	if(right >= left){
  	let mid= Math.floor((left + right)/2);
    if(arr[mid] === objetive){
    	return mid;
    }
    if(arr[mid] > objetive){
    	return binarySearchRecursion(arr, left, mid - 1, objetive);
    }
    return binarySearchRecursion(arr, mid + 1, right, objetive);
  }
	return -1;
}

var arr = [0,1,2,3,4,5,6,7,8];
var objetive = 6;
var number = binarySearchRecursion(arr, 0, (arr.length - 1), objetive);
if(number > -1){
	console.log("I find your in the position: ", number);
}else{
	console.log(":( no te encontré ");
}

// Imprimir pares de numeros que suman el resultado final
function printpairs(arr, result)
    {
    		let couple = "This doesn't have couple";
        let dict = {};
        for (let i = 0; i < arr.length; ++i)
        {
            let temp = result - arr[i];
            if (dict[temp.toString()]) {
                couple =`${arr[i]} ${dict[temp]}`;
                return couple;
            }
            dict[arr[i]] = arr[i];
        }
        return couple;
    }

console.log(printpairs([0, 1, 3, -3, 1, 3], 6));
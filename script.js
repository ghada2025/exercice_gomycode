//******Fonctions de manipulation de chaînes :************************************************************

//Inverser une chaîne:
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello ghada"));

//Compter les caractères : 
function countCharacters(str) {
    return str.length;
}
console.log(countCharacters("Hello ghada"));
//Mettre les mots en majuscule :
function capitalizeWords(str) {
    return str.toUpperCase();
}
console.log(capitalizeWords("hello ghada"));
//******Fonctions du tableau :***************************************************************************

//Trouver le maximum et le minimum :
function findMaxAndMin(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return [min , max];
}
console.log(findMaxAndMin([1, 2, 3, 4, 5]));
//Somme du tableau :
function sumArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));
//Filter Array : 
function filterArray(arr) {
    const result = arr.filter((word) => word.length > 6);
    return result;
}
console.log(filterArray(['spray', 'elite', 'exuberant', 'destruction', 'present']));
//*******Fonctions mathématiques :**********************************************************************

//Factorielle :
function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  console.log(factorial(5));
//Vérification des nombres premiers : 
function isPrime(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  console.log(isPrime(7));
//Séquence de Fibonacci : 
function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
console.log(fibonacci(6));

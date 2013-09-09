/* Manipulation de tableaux */
==================
var empty = [];
var numbers = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine'
];

empty[1]          // undefined
numbers[1]        // 'one'

empty.length      // 0
numbers.length    // 10
    
    
====================================
var numbers_object = {
    '0': 'zero',  '1': 'one',   '2': 'two',
    '3': 'three', '4': 'four',  '5': 'five',
    '6': 'six',   '7': 'seven', '8': 'eight',
    '9': 'nine'
};
    
    
====================================
var misc = [
    'string', 98.6, true, false, null, undefined,
    ['nested', 'array'], {object: true}, NaN,
    Infinity
];
misc.length    // 10
    
    
====================================
var myArray = [];
myArray.length             // 0

myArray[1000000] = true;
myArray.length             // 1000001
// myArray contains one property.
    
    
====================================
numbers.length = 3;
// numbers is ['zero', 'one', 'two']
    
    
====================================
numbers[numbers.length] = 'shi';
// numbers is ['zero', 'one', 'two', 'shi']
    
    
====================================
numbers.push('go');
// numbers is ['zero', 'one', 'two', 'shi', 'go']
    
    
====================================
delete numbers[2];
// numbers is ['zero', 'one', undefined, 'shi', 'go']
    
    
====================================
numbers.splice(2, 1);
// numbers is ['zero', 'one', 'shi', 'go']
    
    
====================================
var i;
for (i = 0; i < myArray.length; i += 1) {
    document.writeln(myArray[i]);
}
    
    
====================================
// Create an array of numbers.

var data = [4, 8, 15, 16, 23, 42];

// 1. Définissez 2 fonctions simples add et mult.
// add additionera 2 nombres
// mult multipliera 2 nombres

var add = function (a, b) {
    return a + b;
};

var mult = function (a, b) {
    return a * b;
};

// 2. Utiliser la méthode reduce sur le tableau
// pour faire la somme de ses éléments
var sum = data.reduce(add, 0);    // sum is 108


// 3. Utiliser la méthode reduce sur le tableau
// pour faire le produit de ses éléments
var product = data.reduce(mult, 1);
    // product is 7418880
    

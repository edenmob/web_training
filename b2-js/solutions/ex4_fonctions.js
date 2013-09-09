/* Fonctions */
==================
// Créer une variable add contenant une fonction
// faisant la somme de ses 2 paramètres

var add = function (a, b) {
    return a + b;
};
    
    
====================================

var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};

// Appeler la méthode increment 2 fois (sans et avec paramètre)

myObject.increment(  );
document.writeln(myObject.value);    // 1

myObject.increment(2);
document.writeln(myObject.value);    // 3
    
    
====================================
var sum = add(3, 4);    // sum is 7
    
    
====================================
// Augment myObject with a double method.

myObject.double = function (  ) {
    var that = this;    // Workaround.

    var helper = function (  ) {
        that.value = add(that.value, that.value);
    };

    helper(  );    // Invoke helper as a function.
};

// Appeler la fonction double

myObject.double(  );
document.writeln(myObject.value);     // 6 
    
    
====================================
var Quo = function (string) {
    this.status = string;
};

// 1. Définissez une méthode getStatus
// via prototype

Quo.prototype.getStatus = function (  ) {
    return this.status;
};

// 2. Créer une instance de Quo
// et appeler la méthode getStatus

var myQuo = new Quo("confused");

document.writeln(myQuo.getStatus(  ));  // confused
    
    
====================================
var array = [3, 4];
// Utilisation de apply
var sum = add.apply(null, array);    // sum is 7

var statusObject = {
    status: 'A-OK'
};

// Utilisation de apply via prototype

var status = Quo.prototype.get_status.apply(statusObject);
    // status is 'A-OK'
    

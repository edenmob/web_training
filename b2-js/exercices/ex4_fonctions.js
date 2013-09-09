/* Fonctions */
==================
// Créer une variable add contenant une fonction
// faisant la somme de ses 2 paramètres
    
    
====================================

var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};

// Appeler la méthode increment 2 fois (sans et avec paramètre)
    
    
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
    
    
====================================
var Quo = function (string) {
    this.status = string;
};

// 1. Définissez une méthode getStatus
// via prototype


// 2. Créer une instance de Quo
// et appeler la méthode getStatus
    
    
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
    

/* Héritage */

var Mammal = function (name) {
    this.name = name;
};

Mammal.prototype.get_name = function (  ) {
    return this.name;
};

Mammal.prototype.says = function (  ) {
    return this.saying || '';
};
    
    
====================================
var myMammal = new Mammal('Herb the Mammal');
var name = myMammal.get_name(  ); // 'Herb the Mammal'
    
    
====================================
var Cat = function (name) {
    this.name = name;
    this.saying = 'meow';
};

// 1. Remplacer Cat.prototype avec une instance de Mammal (mammifère)
Cat.prototype = new Mammal(  );

// 2. Ajouter une méthode purr (miauler) au prototype qui doit renvoyer
// r-r-r-r-r (le nombre de r étant passé en paramètre)
Cat.prototype.purr = function (n) {
    var i, s = '';
    for (i = 0; i < n; i += 1) {
        if (s) {
            s += '-';
        }
        s += 'r';
    }
    return s;
};

// 3. Ajouter une méthode get_name qui doit renvoyer meow NomDuChat meow
Cat.prototype.get_name = function (  ) {
    return this.says(  ) + ' ' + this.name + ' ' + this.says(  );
};


var myCat = new Cat('Henrietta');
var says = myCat.says(  ); // 'meow'
var purr = myCat.purr(5); // 'r-r-r-r-r'
var name = myCat.get_name(  );
//            'meow Henrietta meow'
    

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
// 2. Ajouter une méthode purr (miauler) au prototype qui doit renvoyer
// r-r-r-r-r (le nombre de r étant passé en paramètre)
// 3. Ajouter une méthode get_name qui doit renvoyer meow NomDuChat meow



var myCat = new Cat('Henrietta');
var says = myCat.says(  ); // 'meow'
var purr = myCat.purr(5); // 'r-r-r-r-r'
var name = myCat.get_name(  );
//            'meow Henrietta meow'
    

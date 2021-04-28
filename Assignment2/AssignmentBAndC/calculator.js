
 function Calculator(){  //object of calculator
    this.value =  0;

    getValue = function(){
        return this.value;
    };

    this.add = function(value) {
       this.value += value;
    };

    this.substract = function(value) {
        this.value -= value;
    };

     this.multiply = function(value) {
        this.value *= value;
    };

    this.divide = function(value) {
        this.value /= value;
    };

    this.result = function() {
        return this.result;
    };

    this.root =  function(root){
        return Math.pow(value, 1 / root);
    };

    this.involute = function(){
        return (1.0 / value);
    };
}

/**
 * Calling the methods and new calculator objects with testing values
 */


var cAdd = new Calculator();
console.log(cAdd.getValue());
cAdd.add(4);
console.log(cAdd.result());

var cMin = new Calculator();
console.log(cAdd.getValue());
cAdd.substract(4);
console.log(cAdd.result());

var cDivide = new Calculator();
console.log(cAdd.getValue());
cAdd.add(4);
cAdd.divide(2);
console.log(cAdd.result());

var cMulti = new Calculator();
console.log(cAdd.getValue());
cAdd.add(4);
cAdd.multiply(2);
cAdd.result();

var cRoot = new Calculator();
console.log(cAdd.getValue());
cAdd.add(4);
cAdd.root();
console.log(cAdd.result());

var cInvolute = new Calculator();
console.log(cAdd.getValue());
cAdd.add(4);
cAdd.involute();
console.log(cAdd.result());
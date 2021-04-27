/*
* this is how to construct an object in JS
*/
function director(name, age, work){
    this.name = name; 
    this.age = age;
    this.work = new Array[10];
}
//How to create a single object with getters and setters inside.
var director = {
    name: 'bla bla',
    age: 25,
    work: ['avengers', 'The last Kingdom', 'The boys'],

    getName: function(){
        return this.name;
    },

    getAge: function(){
        return this.age;
    },

    getWorkDone: function(){
        return this.work;
    },

    setName: function(name){
        this.name = name;
    },

    setAge: function(age){
        this.age = age;
    }
}
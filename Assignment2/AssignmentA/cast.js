/*
* this is how to construct an object in JS
*/
function cast(name, age, acting){
    this.name = name; 
    this.age = age;
    this.acting = acting;
}
//How to create a single object with getters and setters inside.
var cast = {
    name : 'Father pyrlig',
    age: 45,
    acting: 'priest',

    getName: function() {
        return this.name;
    },
    
    getAge: function() {
        return this.age;
    },
    
    getWork: function() {
        return this.work;
    },

    setName: function(name){
        this.name = name;
    },

    setAge: function(age){
        this.age = age;
    },

    setActing: function(acting){
        this.acting = acting;
    }
};





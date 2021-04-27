/*
* this is how to construct an object in JS
*/
function epidode(name, duration){
    this.name = name; 
    this.duration = duration;
}
//How to create a single object with getters and setters inside.
var episode = {
    name: 'The death of King Alfred',
    duration: 50.25,

    getName: function(){
        return this.name;
    },

    getDuration: function(){
        return this.duration;
    },

    setName: function (name){
        this.name = name; 
    },

    setDuration: function (duration){
        this.duration = duration; 
    },
};
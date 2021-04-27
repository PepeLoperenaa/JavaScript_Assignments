/*
* this is how to construct an object in JS
*/
function serie(name, epidode, stillRecording, cast){
    this.name = name; 
    this.epidode = epidode; 
    this.stillRecording = stillRecording; 
    this.cast = new Array[cast];
}

//How to create a single object with getters and setters inside. 
var serie  = {
    name: 'The last kingdom', 
    episode : episodes,
    continue : true, 
    cast : cast,

    getName: function(){
        return this.name;
    },
    
    getEpisodes: function(){
        return this.episodes;
    },
    
    getContinue: function(){
        return this.continue;
    },
    
    getCast: function(){
        return this.cast;
    },

    setName: function (name){
        this.name = name; 
    },

    setEpisodes: function (epidode){
        this.epidode = epidode; 
    },

    setContinue: function (Continue){
        this.continue = this.continue; 
    }
};
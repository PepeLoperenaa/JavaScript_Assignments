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
    }
    
};

function Person(name, apellido){ //constructor to do after. 
    this.name =  name;
    this.apellido = apellido;
    this.getApellido = function() {
        return this.apellido;
    }
}

var  p= new Person("","");
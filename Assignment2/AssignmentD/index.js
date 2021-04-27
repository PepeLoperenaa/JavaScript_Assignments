function beer(){
    this.beer = 99; //how many beers there is

    this.loopBeer = function(){
        for (beer = 99;beer>=1;beer--){
            document.write( beer + " bottles of beer. Gerjan has one and passes it to Martijn " +
         (beer-1) +"<br><br>");
        }
    }
}

var b = new beer(); //creation of new object

b.loopBeer(); //method 
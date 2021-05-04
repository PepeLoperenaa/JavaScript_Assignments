function Images() {
    this.images = ["img/brain.jpg", "img/cry.jpg", "img/crying.jpg", "img/foca.jpg" , "img/frame.jpg", "img/global.jpg", "img/icarly.jpg", "img/mind.jpg", "img/patricio.png", "img/yes.jpg"];
    this.current = -1;

    this.nextSlide = function(i) {
        this.current+=i;
        if(this.current==this.images.length)
            this.current=0;
        else if(this.current==-1)
            this.current=this.images.length-1;
        document.getElementById("pic1").src = this.images[this.current];
    }

}

var im = new Images();
im.nextSlide(1);

console.log("Hola");






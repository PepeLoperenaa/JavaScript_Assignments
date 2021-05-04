function Images() {
    this.images = ["img/brain.jpg", "img/cry.jpg", "img/crying.jpg"];
    this.current = -1;

    this.nextSlide = function() {
        this.current=(this.current+1)%this.images.length;
        document.getElementById("pic1").src = this.images[this.current];
    }

}

var im = new Images();

function next() {
    im.nextSlide();
}






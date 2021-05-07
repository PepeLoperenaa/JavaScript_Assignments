var items = [];

function Item(text) {
    this.text=text;
    this.done=false;

    this.getText = function() {
        return this.text;
    }

    this.setDone = function() {
        if(this.done==false) {
            this.done = true;
            return true;
        }
        else
            return false;
    }
}

$(function() {
    
    $('#button').on('click', function() {
        $('#todo').append("<li><input type='text' id='current'></input></li>"); //input
        $('#current').focus();
        $('#current').on('focusout', function() {
            items.push(new Item(this.value));
            $('#todo > li').last().remove();
            $('#todo').append("<li class='item'>"+items[items.length-1].getText()+"</li>");
        })
    });

    $('#todo').on('click','li', function() { //need to remove after strike. 
        $(this).wrap("<strike>");
        //$(this).remove;
    });
    // coger el indice que es dentro de la lista

        // ponerle setDone

        // si setdone == true, entonces lo subrayo
        //this.style.text=subrayado;
});
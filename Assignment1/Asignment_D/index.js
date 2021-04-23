//the array where results are stored
var array = ["apple", "banana", "pear", "chicken", "fish", "corn", "chips", "potato", "salt", "pepper"]; 

var arrayLength = array.length; // variable for the array length. 

for(var j = 0; j < arrayLength; j++){
    document.write("<p>" + array[j] + "</p>");
} //for loop without the change

document.write("After change: <br>");

array[8] = "sugar"; //change of value

for(var i = 0; i < arrayLength; i++){
    document.write("<p>" + array[i] + "</p>");
} //for loop with the change



// This is the bonus where we can change an element in the shopping list with a table. 
//All of this was found and done following a tutorial online.

var table = document.getElementById('shopping'); //id of table
var cells = table.getElementsByTagName('td'); // HTMl tag of the element we want to use 

for(var i = 0; i < cells.length; i++){ //iterate through all of the cells in the table
    cells[i].onclick = function() {

        if(this.hasAttribute('data-clicked')){ 
            //if it has been clicked return value
            return;
        }

        this.setAttribute('data-clicked', 'yes'); //setting attributes for editing.
        this.setAttribute('data-text', this.innerHTML);

        var input = document.createElement('input'); //get a way to get input
        input.setAttribute('type', 'text'); //type of input
        input.value = this.innerHTML; //this refers to the cell we are clicking

        input.onblur = function(){
            var td = input.parentElement; //getting the HTML parent element
            var originalText = input.parentElement.getAttribute('data-text');
            var currentText = this.value; //this is the input element

            if(originalText != currentText){
                //there is a change in the text
                //Here the data can be saved into the data. 
                td.removeAttribute('data-clicked');
                td.removeAttribute('data-text');
                td.innerHTML = currentText;
            }

        }
        this.innerHTML = '';
        this.append(input);
        this.firstElementChild.select();
    }
}
var array = ["apple", "banana", "pear", "chicken", "fish", "corn", "chips", "potato", "salt", "pepper"];

var arrayLength = array.length;

for(var i = 0; i < arrayLength; i++){
    document.write(array[i] + "<br>");
}

if(array[8] == "salt"){
    array[8].replace("sugar");
}

 //need to see how to change the value
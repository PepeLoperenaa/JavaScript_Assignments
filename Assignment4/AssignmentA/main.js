function numbers() {
    let div = document.getElementById('new'); //get html element
    let a0 = 0; //first number fibonacci 
    let a1 = 1;
    var element = document.createElement("p"); //creating html tag 
    element.innerHTML = a0; //HTMl value
    div.appendChild(element); //put together so that it can be shown in html. 
    element = document.createElement("p");
    element.innerHTML = a1;
    div.appendChild(element);

    for (let i = 0; i < 18; i++) { //running through the first 20 fibonacci numbers. 
        let current = a0 + a1;
        element = document.createElement("p");
        element.innerHTML = current;
        div.appendChild(element);
        a0 = a1;
        a1 = current;
    }
}

function numbers() {
    let div = document.getElementById('new');
    let a0 = 0;
    let a1 = 1;
    var element = document.createElement("p");
    element.innerHTML = a0;
    div.appendChild(element);
    element = document.createElement("p");
    element.innerHTML = a1;
    div.appendChild(element);

    for(let i=0;i<18;i++) {
        let current = a0+a1;
        element = document.createElement("p");
        element.innerHTML = current;
        div.appendChild(element);
        a0 = a1;
        a1 = current;
    }
}



const counter = document.getElementById('counter');

let increment = ()=>{
    let value = parseInt(counter.innerText);
    value = value + 1;
    counter.innerText = value;
}

let decrement = ()=>{
    let value = parseInt(counter.innerText);
    value = value - 1;
    counter.innerText = value;
}




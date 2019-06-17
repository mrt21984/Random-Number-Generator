const person = {
    name: "Tim",
    date: new Date().toDateString()
}

const ui = {
    maxInp: document.querySelector('#max'),
    randOut: document.querySelector('#randNum'),
    btn: document.querySelector('#btn')
}

ui.btn.addEventListener('click', (e) => {
    e.preventDefault;
    ui.randOut.innerHTML = Math.floor(Math.random() * parseInt(ui.maxInp.value) + 1);

    
})
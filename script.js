const keys = document.querySelectorAll(".tecla");

function playNote(nota){
    const notas = new Audio(`notas/${nota}.mp3`);
    notas.play();
}


function clickDown(key){
    playNote(key.getAttribute("data-note"));
    if(key.className.includes('preta')){
        key.classList.add('preta-click');
        return;
    }
    key.classList.add("branca-click");
}

function clickUp(key){
    key.classList.remove("branca-click")
    key.classList.remove('preta-click');
}

keys.forEach((key) => {
    key.addEventListener('mousedown', () => {clickDown(key)})
    key.addEventListener('mouseup', () => {clickUp(key)})

})
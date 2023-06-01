const keys = document.querySelectorAll(".tecla");


function clickDown(key){
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
const keys = document.querySelectorAll(".tecla");
const showkeysbox = document.getElementById('select-show');

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

function showKeys(){
    const checkbox = document.getElementById("show-keys");
    let back = document.getElementsByClassName("back-show")[0];
    let circle = document.getElementsByClassName("circle-show")[0];
    let spans = document.querySelectorAll("#teclas-piano span");

    if(checkbox.checked){
        back.classList.remove("back-active");
        circle.classList.remove("circle-active");
        spans.forEach((span) => {
            span.style.display = "none";
        })
    }else{
        back.classList.add('back-active');
        circle.classList.add('circle-active');
        spans.forEach((span) => {
            span.style.display = "inline";
        })
    }
    
}


keys.forEach((key) => {
    key.addEventListener('mousedown', () => {clickDown(key)})
    key.addEventListener('mouseup', () => {clickUp(key)})
    key.addEventListener('mouseleave', () => {clickUp(key)})

})

showkeysbox.addEventListener('click', () => {showKeys()})
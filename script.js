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

const keysDownMap = {
    "1":() => clickDown(keys[0]),
    "2":() => clickDown(keys[1]),
    "3":() => clickDown(keys[2]),
    "4":() => clickDown(keys[3]),
    "5":() => clickDown(keys[4]),
    "6":() => clickDown(keys[5]),
    "7":() => clickDown(keys[6]),
    "8":() => clickDown(keys[7]),
    "9":() => clickDown(keys[8]),
    "0":() => clickDown(keys[9]),
    "q":() => clickDown(keys[10]),
    "w":() => clickDown(keys[11]),
    "e":() => clickDown(keys[12]),
    "r":() => clickDown(keys[13]),
    "t":() => clickDown(keys[14]),
    "y":() => clickDown(keys[15]),
    "u":() => clickDown(keys[16]),
    "i":() => clickDown(keys[17]),
    "o":() => clickDown(keys[18]),
    "p":() => clickDown(keys[19]),
    "a":() => clickDown(keys[20]),
    "s":() => clickDown(keys[21]),
    "d":() => clickDown(keys[22]),
    "f":() => clickDown(keys[23])
}

const keysUpMap = {
    "1":() => clickUp(keys[0]),
    "2":() => clickUp(keys[1]),
    "3":() => clickUp(keys[2]),
    "4":() => clickUp(keys[3]),
    "5":() => clickUp(keys[4]),
    "6":() => clickUp(keys[5]),
    "7":() => clickUp(keys[6]),
    "8":() => clickUp(keys[7]),
    "9":() => clickUp(keys[8]),
    "0":() => clickUp(keys[9]),
    "q":() => clickUp(keys[10]),
    "w":() => clickUp(keys[11]),
    "e":() => clickUp(keys[12]),
    "r":() => clickUp(keys[13]),
    "t":() => clickUp(keys[14]),
    "y":() => clickUp(keys[15]),
    "u":() => clickUp(keys[16]),
    "i":() => clickUp(keys[17]),
    "o":() => clickUp(keys[18]),
    "p":() => clickUp(keys[19]),
    "a":() => clickUp(keys[20]),
    "s":() => clickUp(keys[21]),
    "d":() => clickUp(keys[22]),
    "f":() => clickUp(keys[23])
}

document.body.addEventListener('keypress', (key) => {
    key.preventDefault();
    keysDownMap[key.key]();
});
document.body.addEventListener('keyup', (key) => {
    key.preventDefault();
    keysUpMap[key.key]();
});


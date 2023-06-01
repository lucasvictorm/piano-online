const keys = document.querySelectorAll(".tecla");
keys.forEach((key) => {
    key.addEventListener('click', () => {console.log('clique')})
})
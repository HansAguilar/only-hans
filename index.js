const bastos = document.getElementById('bastos');
const nudes = document.querySelector('#nudes');
const close = document.getElementById('close');

close.addEventListener("click", () => {
    bastos.classList.remove("block")
    bastos.classList.add("hidden")
})

nudes.addEventListener("click", () => {
    bastos.classList.remove("hidden")
    bastos.classList.add("block")
})


const changeBtn = document.querySelector("#changeBtn")
const root = document.querySelector("#root")

const colors = ['#000', '#AB2A0E', '#ABAB0E', '#0EAB4E', '#0E40AB', '#850EAB', '#A9125B']
let index = 0;

changeBtn.addEventListener("click", () => {
    console.log(colors[index])

    root.style.backgroundColor = colors[index];

    if(index === colors.length - 1) {
        index = 0
   }
   else {
        index++;
   }
})


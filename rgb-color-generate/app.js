let btnButton = document.querySelector("#btnButton")
let root = document.querySelector("#root")

window.onload = () => {
    main()
}

function main() {
    btnButton.addEventListener("click", function() {
        let color = generateColor()
        root.style.backgroundColor = color
    })
}

function generateColor() {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    return `rgb(${red}, ${green}, ${blue})`
}

const root = document.getElementById("root")
const text = document.getElementById("text")
const btnButton = document.getElementById("btnButton")
const copyBtn = document.getElementById("copyBtn")


window.onload = () => {
    main()
}


function main() {
    btnButton.addEventListener("click", function() {
        let bgColor = randomHexColorCode()
        root.style.backgroundColor = bgColor 
        text.value = bgColor
    })

    copyBtn.addEventListener("click", function() {
        copyColorCode()
        alert("Successfull copy the color code")
    })
}


// generate color hexacode
function randomHexColorCode() {
    let hexaColor = (Math.random() * 0xfffff * 1000000).toString(16)
    return "#"+hexaColor.slice(0, 6)
}

// copy color code
function copyColorCode() {
    text.select()
    navigator.clipboard.writeText(text.value);
}

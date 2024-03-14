const root = document.querySelector("#root")
const text = document.querySelector("#text")
const btnButton = document.querySelector("#btnButton")
const copyBtn = document.querySelector("#copyBtn") 
 

// global variable
let elemDiv = null;

// first loading on load function
window.onload = () => {
    main()
}


// main function
function main() {

    // background event
    btnButton.addEventListener("click", function(){
        let bgColor = randomHexColorCodeGenerator()
        root.style.backgroundColor = bgColor;
        text.value = bgColor
    })

    // copy event
    copyBtn.addEventListener("click", function() {

        if(elemDiv !== null) {
            elemDiv.remove()
        }

        if(isValidHexaCode(text.value)) {
            text.select()
            navigator.clipboard.writeText(text.value)
            createToastMessage(text.value)
        }
        else {
            alert("Invalid Color Code")
        }
 
    })

    // check hexa code
    text.addEventListener("keyup", function(e) {
        color = e.target.value
        if(color && isValidHexaCode(color)){
            root.style.backgroundColor = e.target.value
        }
    })

}

// rendom hex color generator
function randomHexColorCodeGenerator() {
    let hexaColor = (Math.random() * 0xfffff * 1000000).toString(16)
    let color = "#"+hexaColor.slice(0, 6)
    return color;
}

// create dynamic toast message
function createToastMessage() {
    elemDiv = document.createElement("div")
    let span = document.createElement("span")
    elemDiv.className = "toast-message toast-message-side-in";
    elemDiv.id = "removeToast"
    elemDiv.setAttribute("style", `background: ${text.value}`)

    // remove toast message class
    elemDiv.addEventListener("click", () => {
        elemDiv.classList.remove("toast-message-side-in")
        elemDiv.classList.add("toast-message-side-out")
        // remove toast message
        elemDiv.addEventListener("animationend", () => {
            elemDiv.remove();
            elemDiv = null;
        })
    
    })

    span.innerText = `${text.value} Copyed Success`
    elemDiv.appendChild(span)
    document.body.appendChild(elemDiv);
}


/**
 * @param {string} color 
 */

// Checking valid hexacode function
function isValidHexaCode(color) {
    let reg = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
    return reg.test(color)
}



 
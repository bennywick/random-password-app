let generatePasswordForm = document.getElementById('generatePasswordForm')
let passwordOneEl = document.getElementById('password-one-text')
let passwordTwoEl = document.getElementById('password-two-text')
let tooltip1El = document.getElementById('tooltip-1')
let tooltip2El = document.getElementById('tooltip-2')
let passwordLength = document.getElementById('password-length')

generatePasswordForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",
    "V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
    "u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%",
    "^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
    let passwordOne = "";
    let passwordTwo = "";
    
    for (let i = 0; i < passwordLength.value; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        passwordOne += characters[randomIndex]
    }

    for (let i = 0; i < passwordLength.value; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        passwordTwo += characters[randomIndex]
    }

    tooltip1El.textContent = 'Copy to clipboard'
    tooltip2El.textContent = 'Copy to clipboard'
    passwordOneEl.textContent = passwordOne
    passwordTwoEl.textContent = passwordTwo
})

function copyToClipboard(el) {
    let copyText = document.getElementById(el).textContent.trim()
    navigator.clipboard.writeText(copyText)
    if (el == "password-one-btn") {
        tooltip1El.textContent = 'Copied!'
        tooltip2El.textContent = 'Copy to clipboard'
    } else {
        tooltip2El.textContent = 'Copied!'
        tooltip1El.textContent = 'Copy to clipboard'
    }
}
const plusbtn = document.getElementById("plus");
const minusbtn = document.getElementById("minus");
const dividebtn = document.getElementById("divide");
const multipliebtn = document.getElementById("multiplie");
let options = [plusbtn, minusbtn, dividebtn, multipliebtn];

for(let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", () => {
        let displayLength = display.textContent.length;
        let lastDigit = display.textContent.charAt(displayLength - 1);
        if(lastDigit == "+" || lastDigit == "-" || lastDigit == "/" || lastDigit == "*") {
            alert("Math Error");
        } else {
            display.textContent += options[i].textContent;
        }

    });
}




const numbers = document.getElementsByClassName("numbbutton");
for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", () => {
        display.textContent += numbers[i].textContent;
    })
}

const display = document.getElementById("display");


function calc() {
    let content = display.textContent;
    display.textContent = eval(content);
}

document.getElementById("calc").addEventListener("click", calc);

document.getElementById("del").addEventListener("click", () => {
    display.textContent = "";
});


document.getElementById("dellast").addEventListener("click", () => {
    let text = display.textContent;
    text = text.substring(0,text.length - 1);
    display.textContent = text;
});
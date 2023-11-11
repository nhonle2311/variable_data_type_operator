function Addition() {
    let Number1 = +document.getElementById('Number1').value;
    let Number2 = +document.getElementById('Number2').value;
    let Result = Number1 + Number2;
    document.getElementById('Result').innerText = "Result:" + Result;
}
function Subtraction() {
    let Number1 = +document.getElementById('Number1').value;
    let Number2 = +document.getElementById('Number2').value;
    let Result = Number1 - Number2;
    document.getElementById('Result').innerText = "Result:" + Result;
}
function Multiplication() {
    let Number1 = +document.getElementById('Number1').value;
    let Number2 = +document.getElementById('Number2').value;
    let Result = Number1 * Number2;
    document.getElementById('Result').innerText = "Result:" + Result;
}
function Division() {
    let Number1 = +document.getElementById('Number1').value;
    let Number2 = +document.getElementById('Number2').value;
    let Result = Number1 / Number2;
    document.getElementById('Result').innerText = "Result:" + Result;
}


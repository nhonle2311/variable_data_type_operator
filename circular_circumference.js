function Calculate() {
    let Perimeter = document.getElementById('Perimeter').value;
    let C = Math.PI * Perimeter * 2;
    document.getElementById('Result').innerText = "Result P: " + C;
}